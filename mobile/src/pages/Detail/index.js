import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const { incident } = route.params;

  const formatedValue = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(incident.value);

  const message =
    `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso` +
    ` "${incident.title}" com o valor de ${formatedValue}`;

  function navigateBack() {
    navigation.navigate('Incidents');
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    );
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
        <Text style={styles.incidentValue}>
          {incident.name} de {incident.city}, {incident.uf}
        </Text>

        <Text style={styles.incidentProps}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProps}>VALOR:</Text>
        <Text style={styles.incidentValue}>{formatedValue}</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <View style={styles.action}>
            <TouchableOpacity onPress={sendWhatsapp}>
              <Text style={styles.actionText}>WhatsApp</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.action}>
            <TouchableOpacity onPress={sendMail}>
              <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
