import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity, Modal, Button } from 'react-native';

const messages = [
  { id: 1, sender: 'Alice', text: 'Đã theo dõi', image: 'https://media.istockphoto.com/id/1387406044/vi/anh/c%C3%B4-h%E1%BA%A7u-b%C3%A0n-tr%E1%BA%BB-ch%C3%A2u-%C3%A1-%C4%91%E1%BB%A9ng-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-h%E1%BB%93ng.jpg?s=1024x1024&w=is&k=20&c=ALS2mnV2tSt7mLHe6mynjtKrlgxWH8Mx6XvQdqt_9jo= ', isFollowing: true },
   { id: 12, sender: 'Alice', text: 'Đã theo dõi', image: 'https://media.istockphoto.com/id/1387406044/vi/anh/c%C3%B4-h%E1%BA%A7u-b%C3%A0n-tr%E1%BA%BB-ch%C3%A2u-%C3%A1-%C4%91%E1%BB%A9ng-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-h%E1%BB%93ng.jpg?s=1024x1024&w=is&k=20&c=ALS2mnV2tSt7mLHe6mynjtKrlgxWH8Mx6XvQdqt_9jo= ', isFollowing: true },
    { id: 3, sender: 'Alice', text: 'Đã theo dõi', image: 'https://media.istockphoto.com/id/1387406044/vi/anh/c%C3%B4-h%E1%BA%A7u-b%C3%A0n-tr%E1%BA%BB-ch%C3%A2u-%C3%A1-%C4%91%E1%BB%A9ng-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-h%E1%BB%93ng.jpg?s=1024x1024&w=is&k=20&c=ALS2mnV2tSt7mLHe6mynjtKrlgxWH8Mx6XvQdqt_9jo= ', isFollowing: true },
     { id: 4, sender: 'Alice', text: 'Đã theo dõi', image: 'https://media.istockphoto.com/id/1387406044/vi/anh/c%C3%B4-h%E1%BA%A7u-b%C3%A0n-tr%E1%BA%BB-ch%C3%A2u-%C3%A1-%C4%91%E1%BB%A9ng-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-h%E1%BB%93ng.jpg?s=1024x1024&w=is&k=20&c=ALS2mnV2tSt7mLHe6mynjtKrlgxWH8Mx6XvQdqt_9jo= ', isFollowing: true },
      { id: 5, sender: 'Alice', text: 'Đã theo dõi', image: 'https://media.istockphoto.com/id/1387406044/vi/anh/c%C3%B4-h%E1%BA%A7u-b%C3%A0n-tr%E1%BA%BB-ch%C3%A2u-%C3%A1-%C4%91%E1%BB%A9ng-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-h%E1%BB%93ng.jpg?s=1024x1024&w=is&k=20&c=ALS2mnV2tSt7mLHe6mynjtKrlgxWH8Mx6XvQdqt_9jo= ', isFollowing: true },
       { id: 6, sender: 'Alice', text: 'Đã theo dõi', image: 'https://media.istockphoto.com/id/1387406044/vi/anh/c%C3%B4-h%E1%BA%A7u-b%C3%A0n-tr%E1%BA%BB-ch%C3%A2u-%C3%A1-%C4%91%E1%BB%A9ng-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-h%E1%BB%93ng.jpg?s=1024x1024&w=is&k=20&c=ALS2mnV2tSt7mLHe6mynjtKrlgxWH8Mx6XvQdqt_9jo= ', isFollowing: true },
        { id: 77, sender: 'Alice', text: 'Đã theo dõi', image: 'https://media.istockphoto.com/id/1387406044/vi/anh/c%C3%B4-h%E1%BA%A7u-b%C3%A0n-tr%E1%BA%BB-ch%C3%A2u-%C3%A1-%C4%91%E1%BB%A9ng-tr%C3%AAn-n%E1%BB%81n-m%C3%A0u-h%E1%BB%93ng.jpg?s=1024x1024&w=is&k=20&c=ALS2mnV2tSt7mLHe6mynjtKrlgxWH8Mx6XvQdqt_9jo= ', isFollowing: true },

  // Danh sách tin nhắn khác
];

const FollowScreen = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [followingStatus, setFollowingStatus] = useState(messages.map(item => item.isFollowing));

  const renderAvatar = (imageUri) => {
    if (!imageUri) {
      return null;
    }
    return <Image source={{ uri: imageUri }} style={styles.avatar} />;
  };

  const toggleFollow = (index) => {
    const updatedStatus = [...followingStatus];
    updatedStatus[index] = !updatedStatus[index];
    setFollowingStatus(updatedStatus);
    // Đoạn này bạn có thể thực hiện logic lưu trạng thái theo dõi vào cơ sở dữ liệu hoặc backend
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
            <Button title="Tạo nhóm" onPress={() => {}} />
            <Button title="Cài đặt" onPress={() => {}} />
            <Button title="Đóng" onPress={() => setIsMenuVisible(false)} />
          </View>
        </View>
      </Modal>
      <ScrollView>
        {messages.map((item, index) => (
          <View key={item.id} style={styles.messageContainer}>
            <View style={styles.senderInfo}>
              {renderAvatar(item.image)}
              <Text style={styles.sender}>{item.sender}</Text>
            </View>
            <Text>{item.text}</Text>
            <TouchableOpacity onPress={() => toggleFollow(index)}>
              <Image source={item.isFollowing ? require('./image/follow_icon.png') : require('./image/unfollow_icon.png')} style={styles.followIcon} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
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
    borderWidth: 1,
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
    flexDirection: 'row', // Để có thể sắp xếp theo hàng ngang
    alignItems: 'center', // Để chắc chắn rằng các phần tử cùng hàng ngang với nhau
    justifyContent: 'space-between', // Để nút follow được căn phải
  },
  senderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 15,
    marginRight: 15,
  },
  sender: {
    fontWeight: 'bold',
  },
  followIcon: {
    width: 24,
    height: 24,
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

export default FollowScreen;
