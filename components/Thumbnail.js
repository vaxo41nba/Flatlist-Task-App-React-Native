import React from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const width = (Dimensions.get('screen').width - 45) / 2;
const height = width + 15;

export default function Thumbnail({ username, age, image, onPress, id }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const uri = image
    ? image
    : 'https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png';

  const remove = () => {
    const updatedUsers = users.filter((u) => u.id !== id);
    dispatch({ type: 'SAVE_USERS', users: updatedUsers });
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{ uri }} style={styles.image} />
      <Text style={styles.text}>
        {username}, {age}
      </Text>
      <Text style={styles.remove} onPress={remove}>
        X
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    marginRight: 15,
    marginBottom: 15,
  },
  image: {
    width,
    height: height - 30,
    resizeMode: 'contain',
  },
  remove: {
    fontSize: 25,
    width: 40,
    textAlign: 'center',

    position: 'absolute',
    right: 0,
    top: 0,
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
  },
});
