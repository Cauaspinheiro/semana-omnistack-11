import React, { useEffect, useState } from 'react';
import { View, Image, Text, Alert, ActivityIndicator } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }

  async function loadIncidents() {
    if (isLoading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await api.get('/incidents', {
        params: {
          page,
        },
      });

      setIncidents([...incidents, ...response.data]);
      setTotal(response.headers['x-total-count']);
      setIsLoading(false);
      setPage(page + 1);
    } catch (error) {
      Alert.alert(
        'Erro!',
        'Algo deu errado ao tentar se conectar ao servidor, tente novamente'
      );
    }
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de
          <Text style={styles.headerTextBold}> {total} casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem-Vindo(a)!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>
      {incidents.length === 0 ? (
        <ActivityIndicator
          size="30%"
          style={{ marginTop: 80 }}
          color="#E02041"
        />
      ) : (
        <FlatList
          style={styles.incidentsList}
          data={incidents}
          keyExtractor={(incident) => String(incident.id)}
          showsVerticalScrollIndicator={false}
          onEndReached={loadIncidents}
          onEndReachedThreshold={0.1}
          renderItem={({ item: incident }) => {
            return (
              <View style={styles.incident}>
                <Text style={styles.incidentProps}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name}</Text>

                <Text style={styles.incidentProps}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProps}>VALOR:</Text>
                <Text style={styles.incidentValue}>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(incident.value)}
                </Text>

                <TouchableOpacity
                  style={styles.detailsButton}
                  onPress={() => navigateToDetail(incident)}
                >
                  <Text style={styles.detailsButtonText}>
                    Ver mais detalhes
                  </Text>
                  <Feather name="arrow-right" size={16} color="#E02041" />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      )}
    </View>
  );
}
