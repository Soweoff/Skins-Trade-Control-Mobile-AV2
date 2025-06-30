import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  image: string;
  onPress: () => void;
};

const MainCard = ({ title, image, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} accessibilityRole="button">
      <Image
        source={{ uri: image }}
        style={{ width: 100, height: 100 }}
        accessibilityRole="image"
      />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default MainCard;
