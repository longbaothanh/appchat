import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput, TouchableOpacity,Modal , Button } from 'react-native';
import CreateGroupModal from './CreateGroupModal';
const messages = [
  { sender: 'Hưu Nhã', text: 'Hello!', image: 'https://media.istockphoto.com/id/1221363425/vi/anh/ch%C3%A2n-dung-du-kh%C3%A1ch-tr%E1%BA%BB-v%E1%BB%9Bi-ba-l%C3%B4-trong-th%C3%A0nh-ph%E1%BB%91.jpg?s=1024x1024&w=is&k=20&c=YngHtX3i8CMoIVkKWuxmMocki2vxCZV-gsHKcQVcv18=' },
  { sender: 'Minh Khôi', text: 'Hi there!', image: 'https://media.istockphoto.com/id/1182657519/vi/anh/c%C3%B4-g%C3%A1i-tr%E1%BA%BB-quy%E1%BA%BFn-r%C5%A9-%C4%91%E1%BB%A9ng-trong-con-h%E1%BA%BBm-trung-t%C3%A2m-th%C3%A0nh-ph%E1%BB%91.jpg?s=1024x1024&w=is&k=20&c=zx7E3epme4V_v3knIdlQOx4Gh-2rzj8xMNm8JYFfE8s= '},
  { sender: 'Bảo Long', text: 'Hi!', image: 'https://media.istockphoto.com/id/1195844010/vi/anh/ch%C3%A0ng-trai-tr%E1%BA%BB-ch%C3%A2u-%C3%A1-c%E1%BA%ADn-c%E1%BA%A3nh-%E1%BA%A3nh-b%E1%BB%8B-c%C3%B4-l%E1%BA%ADp-tr%C3%AAn-m%C3%A0u-h%E1%BB%93ng.jpg?s=1024x1024&w=is&k=20&c=UsPDiFbEH-aZfKZTlYTb0eB0mO5yanw8x0n3tEZyBFg=' },
  { sender: 'Thanh Sơn', text: 'Hu!', image: 'https://media.istockphoto.com/id/1299092702/vi/anh/s%E1%BB%AD-d%E1%BB%A5ng-%C4%91i%E1%BB%87n-tho%E1%BA%A1i-c%E1%BB%A7a-b%E1%BA%A1n.jpg?s=1024x1024&w=is&k=20&c=Hj0h9bjO65_3ssJrr9ValTXt3urSO3Or5H1Xl-LAajM=' },
  { sender: 'Hoàng Nam', text: 'Hello!', image:'https://media.istockphoto.com/id/1322953222/vi/anh/thanh-ni%C3%AAn-vi%E1%BB%87t-nam-m%E1%BB%89m-c%C6%B0%E1%BB%9Di-%C4%91eo-k%C3%ADnh-nh%C3%ACn-m%C3%A1y-%E1%BA%A3nh.jpg?s=1024x1024&w=is&k=20&c=KzutvrK_kyzdCYdgoIUPzVjtwFjBJd1pMlrOCwwzAs0= '},
   { sender: 'Hưu Nhã', text: 'Hello!', image: 'https://media.istockphoto.com/id/1221363425/vi/anh/ch%C3%A2n-dung-du-kh%C3%A1ch-tr%E1%BA%BB-v%E1%BB%9Bi-ba-l%C3%B4-trong-th%C3%A0nh-ph%E1%BB%91.jpg?s=1024x1024&w=is&k=20&c=YngHtX3i8CMoIVkKWuxmMocki2vxCZV-gsHKcQVcv18=' },
  { sender: 'Minh Khôi', text: 'Hi there!', image: 'https://media.istockphoto.com/id/1182657519/vi/anh/c%C3%B4-g%C3%A1i-tr%E1%BA%BB-quy%E1%BA%BFn-r%C5%A9-%C4%91%E1%BB%A9ng-trong-con-h%E1%BA%BBm-trung-t%C3%A2m-th%C3%A0nh-ph%E1%BB%91.jpg?s=1024x1024&w=is&k=20&c=zx7E3epme4V_v3knIdlQOx4Gh-2rzj8xMNm8JYFfE8s= '},
  { sender: 'Bảo Long', text: 'Hi!', image: 'https://media.istockphoto.com/id/1195844010/vi/anh/ch%C3%A0ng-trai-tr%E1%BA%BB-ch%C3%A2u-%C3%A1-c%E1%BA%ADn-c%E1%BA%A3nh-%E1%BA%A3nh-b%E1%BB%8B-c%C3%B4-l%E1%BA%ADp-tr%C3%AAn-m%C3%A0u-h%E1%BB%93ng.jpg?s=1024x1024&w=is&k=20&c=UsPDiFbEH-aZfKZTlYTb0eB0mO5yanw8x0n3tEZyBFg=' },
  { sender: 'Thanh Sơn', text: 'Hu!', image: 'https://media.istockphoto.com/id/1299092702/vi/anh/s%E1%BB%AD-d%E1%BB%A5ng-%C4%91i%E1%BB%87n-tho%E1%BA%A1i-c%E1%BB%A7a-b%E1%BA%A1n.jpg?s=1024x1024&w=is&k=20&c=Hj0h9bjO65_3ssJrr9ValTXt3urSO3Or5H1Xl-LAajM=' },
  { sender: 'Hoàng Nam', text: 'Hello!', image:'https://media.istockphoto.com/id/1322953222/vi/anh/thanh-ni%C3%AAn-vi%E1%BB%87t-nam-m%E1%BB%89m-c%C6%B0%E1%BB%9Di-%C4%91eo-k%C3%ADnh-nh%C3%ACn-m%C3%A1y-%E1%BA%A3nh.jpg?s=1024x1024&w=is&k=20&c=KzutvrK_kyzdCYdgoIUPzVjtwFjBJd1pMlrOCwwzAs0= '},


  //Thêm các tin nhắn khác nếu cần
];

const MessageList = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isCreateGroupModalVisible, setIsCreateGroupModalVisible] = useState(false);

  const renderAvatar = (imageUri: any) => {
    if (!imageUri) {
      return null;
    }
    return <Image source={{ uri: imageUri }} style={styles.avatar} />;
  };

  const openCreateGroupModal = () => {
    setIsCreateGroupModalVisible(true);
  };

  const closeCreateGroupModal = () => {
    setIsCreateGroupModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <TextInput style={styles.searchInput} placeholder="Tìm kiếm..." />
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('./image/search_icon.png')} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => setIsMenuVisible(true)}>
          <Image source={require('./image/menu_icon.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
      <Modal
        visible={isMenuVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsMenuVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.menu}>
            <Button title="Thêm bạn" onPress={() => {}} />
            <Button title="Tạo nhóm" onPress={openCreateGroupModal} />
            <Button title="Cài đặt" onPress={() => {}} />
            <Button title="Đóng" onPress={() => setIsMenuVisible(false)} />
          </View>
        </View>
      </Modal>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <View style={styles.senderInfo}>
              {renderAvatar(item.image)}
              <Text style={styles.sender}>{item.sender}</Text>
            </View>
            <Text>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <CreateGroupModal visible={isCreateGroupModalVisible} onClose={closeCreateGroupModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  messageContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  senderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginRight: 20,
  },
  sender: {
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menu: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
});

export default MessageList;