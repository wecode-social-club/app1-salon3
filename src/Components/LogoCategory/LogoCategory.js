import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function LogoCategory() {
  return (
    <View
      style={{
        justifyContent: 'flex-start',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          paddingVertical: 10,
          marginTop: 40,
          borderTopWidth: 1,
          borderColor: '#eee',
          borderBottomWidth: 1,
          borderColor: '#eee',
        }}
      >
        {/* <Image
          style={{
            width: 150,
            height: 100,
          }}
          source={require('../../images/logo.png')}
        /> */}
        오늘의집
      </Text>

      <ScrollView
        horizontal={true}
        style={{
          borderBottomWidth: 1,
          borderColor: '#eee',
          flexDirection: 'row',
          paddingVertical: 10,
          paddingHorizontal: 10,
        }}
      >
        <Text style={styles.menu}>스토어홈</Text>
        <Text style={styles.menu}>카테고리</Text>
        <Text style={styles.menu}>신혼가구</Text>
        <Text style={styles.menu}>베스트</Text>
        <Text style={styles.menu}>오다페</Text>
        <Text style={styles.menu}>리퍼마켓</Text>
        <Text style={styles.menu}>리퍼마켓</Text>
        <Text style={styles.menu}>리퍼마켓</Text>
        <Text style={styles.menu}>리퍼마켓</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    color: 'black',
    marginRight: 20,
  },
});
