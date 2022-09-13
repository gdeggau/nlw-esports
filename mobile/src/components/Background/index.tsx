import React from "react";
import { ImageBackground, View } from "react-native";
import backgroundImg from "../../assets/background-galaxy.png";
import { styles } from "./styles";

type BackgroundProps = {
  children?: React.ReactNode;
};

export function Background({ children }: BackgroundProps) {
  return (
    <ImageBackground
      source={backgroundImg}
      defaultSource={backgroundImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}
