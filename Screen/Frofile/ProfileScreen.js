import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TouchableWithoutFeedback,TextInput } from 'react-native';


const ProfileScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

   const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Huu Nha');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    
  };
  const handleSave = () => {
    setIsEditing(false);
  };
  const closeMenu = () => {
    setIsMenuVisible(false);
  };
  

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <View style={styles.avatarContainer}>
        <Image source={require('./image/avatar.jpg')} style={styles.avatar} />
        <View style={styles.profileHeader}>
        <View style={styles.userInfo}>
        <Text style={styles.username}>{name}</Text>
         <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
          <Image source={require('./image/edit_icon.png')} style={styles.editIcon} />
        </TouchableOpacity>
      </View>
      </View>
       </View> 
      <Modal visible={isEditing} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Chỉnh sửa thông tin</Text>
            <TextInput
              style={styles.input}
              placeholder="Nhập tên mới"
              onChangeText={(text) => setName(text)}
              value={name}
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Lưu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setIsEditing(false)}>
              <Text style={styles.cancelButtonText}>Hủy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.menuButton} onPress={() => setIsMenuVisible(true)}>
        <Image source={require('./image/menu_icon.png')} style={styles.menuIcon} />
      </TouchableOpacity>
      <Modal
        visible={isMenuVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsMenuVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setIsMenuVisible(false)}>
          <View style={styles.overlay}>
            <View style={styles.menu}>
              <TouchableOpacity style={styles.menuItem} onPress={() => toggleDarkMode()}>
                <Image source={require('./image/bright_icon.png')} style={styles.menuItemImage} />
                <Text style={styles.menuText}>Sáng/Tối</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.closeButton} onPress={() => closeMenu()}>
                <Text style={styles.closeButtonText}>Đóng</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#fff', // Giao diện sáng
  },
  darkContainer: {
    backgroundColor: '#000', // Giao diện tối
  },
  avatarContainer: {
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    // flexDirection: 'row', // Hiển thị các phần tử trong hàng ngang
    // alignItems: 'center', // Căn chỉnh các phần tử theo chiều ngang
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  editButton: {
    marginLeft: 10,
    borderRadius: 15, 
  },
  editIcon: {
    width: 24,
    height: 24,
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuItemImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue', 
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cancelButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'gray',
  },
});

export default ProfileScreen;
