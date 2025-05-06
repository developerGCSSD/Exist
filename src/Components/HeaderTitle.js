/* eslint-disable react/prop-types */
import { View, Text } from 'react-native';
import React from 'react';

export default function HeaderTitle({ text, fontSize, fontColor, fontWeight }) {
  return (
    <View>
      <Text style={{ fontSize, fontWeight, color: fontColor }}>{text || ""}</Text>
    </View>
  );
}
