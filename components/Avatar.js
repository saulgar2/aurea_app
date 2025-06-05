import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Avatar() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.imgur.com/6VBx3io.png' }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
  image: { width: 120, height: 120, borderRadius: 60 }
});
