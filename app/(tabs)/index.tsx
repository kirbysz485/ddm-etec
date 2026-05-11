import { ScrollView, StyleSheet, Text, Image, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.fundo}
      contentContainerStyle={styles.container}
    >
      
      <Text style={styles.etec}>Etec Itanhaém</Text>

      <Image
        source={{
          uri: 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2022/08/cps-logo-identidade.jpg'
        }}
        style={styles.cps}
      />

      <View style={styles.card}>
        <Text style={styles.textinho}>
          Informática p/ Internet
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },

  fundo: {
    backgroundColor: '#ffffff',
  },

  etec: {
    color: '#801818',
    fontSize: 38,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 25,
  },

  cps: {
    width: 300,
    height: 180,
    borderRadius: 20,
    marginBottom: 30,
  },

  card: {
    backgroundColor: '#801818',
    width: 220,
    padding: 20,
    borderRadius: 25,

    alignItems: 'center',
    justifyContent: 'center',

    elevation: 10,
  },

  textinho: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
    fontStyle: 'italic',
  },
});