import React, { useState } from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function AddModal() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { modalVisible, users } = state;

  const [newUser, setNewUser] = useState({});

  const close = () => {
    dispatch({ type: 'SET_MODAL_VISIBLE', modalVisible: false });
    setNewUser({});
  };

  const submit = () => {
    dispatch({ type: 'SAVE_USERS', users: [newUser, ...users] });
    close();
  };

  return (
    <Modal visible={modalVisible} animationType="fade" transparent>
      <View style={styles.modalView}>
        <View style={styles.modal}>
          <Pressable onPress={close} style={styles.closeButton}>
            <Text style={styles.close}>X</Text>
          </Pressable>

          <TextInput
            onChangeText={(t) => setNewUser({ ...newUser, username: t })}
            placeholder="Enter Username"
            style={styles.input}
          />
          <TextInput
            onChangeText={(t) => setNewUser({ ...newUser, age: t })}
            placeholder="Enter Age"
            style={styles.input}
          />
          <TextInput
            onChangeText={(t) => setNewUser({ ...newUser, image: t })}
            placeholder="Image URL"
            style={styles.input}
          />

          <Pressable style={styles.button} onPress={submit}>
            <Text>Submit</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    marginVertical: 5,
    height: 40,
    fontSize: 20,
    paddingHorizontal: 10,
  },
  closeButton: {
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  close: {
    fontSize: 30,
  },
});
