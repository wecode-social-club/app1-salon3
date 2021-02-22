import React from 'react';
import { View, Text, Image } from 'react-native';
export default function DetailCategory() {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: -3,
      }}
    >
      <View
        style={{
          width: 75,
          height: 80,
          padding: 8,
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      >
        <View
          style={{
            padding: 8,
            backgroundColor: '#e1e1e1',
            borderRadius: 22,
            width: 60,
            height: 60,
          }}
        >
          <Image
            style={{
              height: 40,
              width: 40,
            }}
            source={require('./shopping-cart.png')}
          />
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          쇼핑하기
        </Text>
      </View>
      <View
        style={{
          width: 75,
          height: 80,
          padding: 8,
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      >
        <View
          style={{
            padding: 8,
            backgroundColor: '#e1e1e1',
            borderRadius: 22,
            width: 60,
            height: 60,
          }}
        >
          <Image
            style={{
              height: 40,
              width: 40,
            }}
            source={require('./coupon.png')}
          />
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          세일받기
        </Text>
      </View>
      <View
        style={{
          width: 75,
          height: 80,
          padding: 8,
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      >
        <View
          style={{
            padding: 8,
            backgroundColor: '#e1e1e1',
            borderRadius: 22,
            width: 60,
            height: 60,
          }}
        >
          <Image
            style={{
              height: 40,
              width: 40,
            }}
            source={require('./home.png')}
          />
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          공간별사진
        </Text>
      </View>
      <View
        style={{
          width: 75,
          height: 80,
          padding: 8,
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      >
        <View
          style={{
            padding: 8,
            backgroundColor: '#e1e1e1',
            borderRadius: 22,
            width: 60,
            height: 60,
          }}
        >
          <Image
            style={{
              height: 40,
              width: 40,
            }}
            source={require('./dining.png')}
          />
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          가구보기
        </Text>
      </View>
    </View>
  );
}
