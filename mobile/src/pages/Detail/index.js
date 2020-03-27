import React from 'react';
import { View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Detail() {
  const navigation = useNavigation();

  function navigateBack() {
    navigation.navigate('Incidents');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" color="#e82041" size={28} />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProps, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>APAD</Text>

        <Text style={styles.incidentProps}>CASO:</Text>
        <Text style={styles.incidentValue}>Cadeia de rodas</Text>

        <Text style={styles.incidentProps}>VALOR:</Text>
        <Text style={styles.incidentValue}>R$120,00</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <View style={styles.action}>
            <TouchableOpacity>
              <Text style={styles.actionText}>WhatsApp</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.action}>
            <TouchableOpacity>
              <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
