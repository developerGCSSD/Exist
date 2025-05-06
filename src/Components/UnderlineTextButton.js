/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Svg, { Text as SvgText, Defs, LinearGradient, Stop, Line } from 'react-native-svg';

export default function UnderlineTextButton({ fontSize = 16, text, onPress }) {
  const textWidth = text.length * fontSize * 0.6; // Approximate width calculation
  const underlineY = fontSize + 5; // Position the underline slightly below the text

  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Svg height={fontSize * 2} width={textWidth}>
          {/* Define Gradient */}
          <Defs>
            <LinearGradient id="textGradient" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0%" stopColor="#1C90E9" />
              <Stop offset="100%" stopColor="#43576E" />
            </LinearGradient>
          </Defs>

          {/* Render Gradient Text */}
          <SvgText
            x="0"
            y={fontSize}
            fontSize={fontSize}
            fontWeight="bold"
            fill="url(#textGradient)" // Apply gradient to text
          >
            {text}
          </SvgText>

          {/* Underline */}
          <Line
            x1="0"
            y1={underlineY}
            x2={textWidth-18}
            y2={underlineY}
            stroke="url(#textGradient)" // Apply gradient to underline
            strokeWidth="2"
          />
        </Svg>
      </View>
    </TouchableOpacity>
  );
}
