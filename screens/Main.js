import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Thumbnail from '../components/Thumbnail';
import AddModal from '../components/AddModal';

export default function Main({ navigation }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/users')
      .then((res) => {
        dispatch({ type: 'SAVE_USERS', users: res.data.users });

        // For loading effect only
        setTimeout(() => {
          dispatch({ type: 'SET_LOADING', loading: false });
        }, 1000);
      })
      .catch((err) => console.log(err));
  }, []);

  const choose = (currentUser) => {
    dispatch({ type: 'SET_CURRENT_USER', currentUser });
    navigation.navigate('User');
  };

  const thumbnail = ({ item }) => (
    <Thumbnail
      key={item.id}
      id={item.id}
      username={item.username}
      age={item.age}
      image={item.image}
      onPress={() => choose(item)}
    />
  );

  const openModal = () =>
    dispatch({ type: 'SET_MODAL_VISIBLE', modalVisible: true });

  return (
    <View style={styles.container}>
      {loading && users?.length ? (
        <ActivityIndicator size="large" color="black" style={{ flex: 1 }} />
      ) : (
        <>
          <FlatList
            data={users}
            renderItem={thumbnail}
            keyExtractor={(item) => item.id}
            initialNumToRender={12}
            numColumns={2}
          />

          <Pressable style={styles.button} onPress={openModal}>
            <Text style={styles.color}>Add</Text>
          </Pressable>

          <AddModal />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    width: 40,
    height: 40,
    borderRadius: 50,
    transform: [{ scaleX: 5 }],
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  color: {
    fontSize: 15,
    transform: [{ scaleX: 0.3 }],
    color: 'white',
  },
  container: {
    flex: 1,
    padding: 15,
  },
});
