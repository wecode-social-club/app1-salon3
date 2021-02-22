import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
export default function CoverImage() {
  return (
    <ImageBackground
      style={{
        flex: 1,
        height: 252,
      }}
      source={{
        uri:
          'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/161149944191092394.jpeg?gif=1&w=2048',
      }}
      resizeMode="cover"
    >
      <Text
        style={{
          color: '#eaebefd9',
          fontSize: 30,
          fontWeight: 'bold',
          justifyContent: 'center',
          marginTop: '20%',
          marginLeft: '5%',
          marginRight: '5%',
        }}
      >
        {' '}
        11년 된 판상형 아파트, 내추럴 우드 무드로 새롭게.
      </Text>
      <TouchableOpacity>
        <Text
          style={{
            width: 100,
            fontSize: 15,
            marginLeft: '5%',
            marginTop: '3%',
            padding: '2%',
            borderWidth: 1,
            marginTop: 16,
            paddingVertical: 8,
            borderWidth: 2,
            borderColor: '#eaebefd9',
            borderRadius: 6,
            color: '#eaebefd9',
            textAlign: 'center',
          }}
        >
          보러가기
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
