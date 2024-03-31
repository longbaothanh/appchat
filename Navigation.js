import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import MessageList from './Screen/Chat/MessageList';
import FollowScreen from './Screen/Follow/FollowScreen';
import ProfileScreen from './Screen/Frofile/ProfileScreen';

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;

            if (route.name === 'Nhắn tin') {
              iconSource = require('./assets/image/message_icon.png'); // Import your message icon
            } else if (route.name === 'Theo dõi') {
              iconSource = require('./assets/image/follow_icon.png'); // Import your follow icon
            } else if (route.name === 'Cá nhân') {
              iconSource = require('./assets/image/profile_icon.png'); // Import your profile icon
            }

            return <Image source={iconSource} style={{ width: 24, height: 24 }} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',

        }}
      >
        <Tab.Screen name="Nhắn tin" component={MessageList} />
        <Tab.Screen name="Theo dõi" component={FollowScreen} />
        <Tab.Screen name="Cá nhân" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
