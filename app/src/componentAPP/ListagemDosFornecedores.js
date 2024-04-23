
import { StyleSheet } from 'react-native';
import { UserScreen } from './UserScreen';

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

function UserScreen() {

  const [users, setUsers] = useState([
    { id: 1, name: 'Boate Josefine', photo: require('./componentAPP/image/boate.png') },
    { id: 2, name: 'Biblioteca Pública', photo: require('./componentAPP/image/biblioteca.png') },
    { id: 3, name: 'Farmacia Preço Baixo', photo: require('./componentAPP/image/farmacia.png') },
    { id: 4, name: 'Restaurante Kidelicia', photo: require('./componentAPP/image/restaurante.png') },
]);

  const handleUserPress = (userId) => {

    console.log('Usuário ${userId} pressionado');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {users.map((user) => (
        <TouchableOpacity key={user.id} onPress={() => handleUserPress(user.id)}>
          <View style={styles.userContainer}>
            <Image source={user.photo} style={styles.userPhoto} />
            <Text style={styles.userName}>{user.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}


export const styles = StyleSheet.create({
  scrollViewContainer: {
    marginTop:100,
    flexGrow: 1,
    justifyContent: 'center',

  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  userPhoto: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
  },
});

export default UserScreen;