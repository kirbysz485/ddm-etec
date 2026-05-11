import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.fundo}
      contentContainerStyle={styles.Container}
    >
      <Text style={styles.etec}>Etec de Itanhaém</Text>

      <View style={styles.card}>
        <Text style={styles.tituloCard}>Terceiro MIN</Text>

        <Text style={styles.descricao}>
          Técnico de informatica para internet
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
    backgroundColor: '#582596',
  },

  etec: {
    color: '#d3ace2',
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

    shadowColor: '#190427',
    shadowOpacity: 1,
    shadowRadius: 10,

    elevation: 12,
  },

  tituloCard: {
    color: '#d3ace2',
    fontWeight: 'bold',
    fontSize: 32,
    fontStyle: 'italic',
  },

  descricao: {
    color: '#d3ace2',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 28,
  },
});
