import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

const initialImageGridData = [
  { id: 1, frontImage: 'https://picsum.photos/id/101/200', backImage: 'https://picsum.photos/id/102/200', flipped: false, scaleValue: 1 },
  { id: 2, frontImage: 'https://picsum.photos/id/103/200', backImage: 'https://picsum.photos/id/104/200', flipped: false, scaleValue: 1 },
  { id: 3, frontImage: 'https://picsum.photos/id/105/200', backImage: 'https://picsum.photos/id/106/200', flipped: false, scaleValue: 1 },
  { id: 4, frontImage: 'https://picsum.photos/id/107/200', backImage: 'https://picsum.photos/id/108/200', flipped: false, scaleValue: 1 },
  { id: 5, frontImage: 'https://picsum.photos/id/109/200', backImage: 'https://picsum.photos/id/110/200', flipped: false, scaleValue: 1 },
  { id: 6, frontImage: 'https://picsum.photos/id/111/200', backImage: 'https://picsum.photos/id/112/200', flipped: false, scaleValue: 1 },
  { id: 7, frontImage: 'https://picsum.photos/id/113/200', backImage: 'https://picsum.photos/id/114/200', flipped: false, scaleValue: 1 },
  { id: 8, frontImage: 'https://picsum.photos/id/115/200', backImage: 'https://picsum.photos/id/116/200', flipped: false, scaleValue: 1 },
  { id: 9, frontImage: 'https://picsum.photos/id/117/200', backImage: 'https://picsum.photos/id/118/200', flipped: false, scaleValue: 1 },
];

export default function Index() {
  const [imageGridData, setImageGridData] = useState(initialImageGridData);

  const onImagePress = (imageId: number) => {
    setImageGridData(currentGrid =>
      currentGrid.map(image => {
        if (image.id === imageId) {
          const updatedScale = Math.min(image.scaleValue * 1.2, 2);
          return {
            ...image,
            flipped: !image.flipped,
            scaleValue: updatedScale,
          };
        }
        return image;
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.gridWrapper}>
        {imageGridData.map(image => (
          <TouchableOpacity
            key={image.id}
            onPress={() => onImagePress(image.id)}
            style={styles.gridItem}
            activeOpacity={0.8}
          >
            <Image
              source={{ uri: image.flipped ? image.backImage : image.frontImage }}
              style={[
                styles.gridImage,
                { transform: [{ scale: image.scaleValue }] }
              ]}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 60,
    backgroundColor: "#fff"
  },
  gridWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 330,
  },
  gridItem: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridImage: {
    width: 100,
    height: 100,
  }
});
