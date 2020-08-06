import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import styles from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title='Proffys disponíveis' />
    </View>
  );
}

export default TeacherList;
