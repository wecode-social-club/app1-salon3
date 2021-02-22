import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import LogoCategory from './src/Components/LogoCategory/LogoCategory';
import CoverImage from './src/Components/CoverImage/CoverImage';
import DetailCategory from './src/Components/DetailCategory/DetailCategory';
import TodayStory from './src/Components/TodayStory/TodayStory';
import CategorySearch from './src/Components/CategorySearch/CategorySearch';
import TodayHotPhoto from './src/Components/TodayHotPhoto/TodayHotPhoto';
import TodayExhibition from './src/Components/TodayExhibition/TodayExhibition';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <LogoCategory />
        <CoverImage />
        <DetailCategory />
        <TodayStory />
        <CategorySearch />
        <TodayHotPhoto />
        <TodayExhibition />
      </ScrollView>
    </SafeAreaView>
  );
}
