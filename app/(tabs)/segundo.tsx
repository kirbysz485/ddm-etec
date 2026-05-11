import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.fundo}
      contentContainerStyle={styles.Container}
    >
      <Text style={styles.etec}>Etec de Itanhaém</Text>

      <View style={styles.card}>
        <Text style={styles.tituloCard}>Segundo MIN</Text>

        <Text style={styles.descricao}>
          Desenvolvedor web e mobile
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fundo: {
    backgroundColor: '#6d35b3',
  },

  etec: {
    color: '#f4d9ff',
    fontSize: 36,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 30,
  },

  card: {
    backgroundColor: '#412266',
    width: 320,
    height: 350,
    borderRadius: 30,

    justifyContent: 'space-evenly',
    alignItems: 'center',

    padding: 25,

    shadowColor: '#000000',
    shadowOpacity: 1,
    shadowRadius: 10,

    elevation: 12,
  },

  tituloCard: {
    color: '#f4d9ff',
    fontWeight: 'bold',
    fontSize: 32,
    fontStyle: 'italic',
  },

  descricao: {
    color: '#f4d9ff',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 28,
  },
});
