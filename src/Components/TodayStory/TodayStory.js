import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function TodayStory() {
  return (
    <View
      style={{
        borderTopWidth: 10,
        borderBottomWidth: 10,
        borderColor: '#eee',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,

            fontWeight: 'bold',
          }}
        >
          오늘의 스토리
        </Text>
        <TouchableOpacity
          style={{
            width: 120,
            height: 30,
            borderWidth: 1,
            borderColor: '#35c5f0',
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              lineHeight: 28,
            }}
          >
            맞춤정보 설정
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
