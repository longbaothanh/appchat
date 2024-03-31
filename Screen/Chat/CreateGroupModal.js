import React, { useState } from 'react';
import { View, Modal, StyleSheet, TextInput, TouchableOpacity, Text, CheckBox, FlatList, Image } from 'react-native';

const members = [
  { id: 1, name: 'Thành viên 1', image: require('./image/anhnguoi.png') },
  { id: 2, name: 'Thành viên 2', image: require('./image/avatar.jpg') },
  { id: 3, name: 'Thành viên 3', image: require('./image/anhnguoi.png') },
  // Thêm các thành viên khác vào đây nếu cần
];
const CreateGroupModal = ({ visible, onClose }) => {
  const [groupName, setGroupName] = useState('');
  const [selectedMembers, setSelectedMembers] = useState([]);

  const handleToggleMember = (memberId) => {
    const isSelected = selectedMembers.includes(memberId);
    const updatedMembers = isSelected
      ? selectedMembers.filter(id => id !== memberId)
      : [...selectedMembers, memberId];
    setSelectedMembers(updatedMembers);
  };

  const handleCreateGroup = () => {
    const newGroup = { name: groupName, members: selectedMembers };
    console.log(newGroup);
    onClose();
  };

  const renderMemberItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleToggleMember(item.id)}>
      <View style={styles.memberItem}>
        <Image source={item.image} style={styles.memberImage} />
        <Text style={styles.memberText}>{item.name}</Text>
        <CheckBox
          value={selectedMembers.includes(item.id)}
          onValueChange={() => handleToggleMember(item.id)}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Tạo Nhóm Mới</Text>
          <TextInput
            style={styles.groupNameInput}
            placeholder="Nhập tên nhóm"
            value={groupName}
            onChangeText={setGroupName}
          />
          <Text style={styles.memberTitle}>Chọn Thành Viên:</Text>
          <FlatList
            data={members}
            renderItem={renderMemberItem}
            keyExtractor={item => item.id.toString()}
            style={styles.memberList}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.createButton} onPress={handleCreateGroup}>
              <Text style={styles.createButtonText}>Tạo Nhóm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Hủy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: '80%', // Điều chỉnh chiều rộng của modal
    height: '80%', // Điều chỉnh chiều cao của modal
    justifyContent: 'center', // Canh giữa theo chiều dọc
    alignItems: 'center', // Canh giữa theo chiều ngang
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  groupNameInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  memberTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  memberList: {
    marginBottom: 10,
    width: '100%',
  },
  memberItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
    width: '100%',
  },
  memberImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  memberText: {
    flex: 1,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  createButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 5,
    width: '48%',
  },
  createButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '48%',
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CreateGroupModal;