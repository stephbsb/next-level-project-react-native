import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import styles from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={giveClassesBgImage}
        style={styles.content}
        resizeMode='contain'
      >
        <Text style={styles.title}>Quer ser um Poffy?</Text>
        <Text style={styles.description}>
          Para começar você precisa de cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>
      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo Bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
