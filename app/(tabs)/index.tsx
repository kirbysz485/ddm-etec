import { ScrollView, StyleSheet, Text, Image, View, } from 'react-native';

export default function HomeScreen() {
  return (
    
    <ScrollView
      style={styles.fundo}
      contentContainerStyle={styles.Container}
    >
      
      <Text style={[styles.etec]}> Etec itanhaém </Text>
      <Image
        source={{ uri: 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2022/08/cps-logo-identidade.jpg' }}
        style={[styles.cps]}
      />
      <View style={styles.card} />
       <Text style={styles.textinho}>informatica p/ internet</Text>
       <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_PPl0k51ZjgSnJul4NeilAq2oxY9eIGZAkw&s' }}
        style={[styles.cps]}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
   fundo: {
    backgroundColor: '#ffffff'
  },
    etec: {
    color: '#6b0a0a',
    fontSize: 34,
    justifyContent: 'flex-start',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  
  cps: {
   width: 300,
   height: 200,

  },
   card: {
    backgroundColor: '#510a72',
    width: 160,
   height: 90,
   borderRadius: 20,
  },

  textinho: {
   position: 'absolute',
   color: '#f3b7ff',
   fontWeight: 'bold',
   fontStyle: 'italic',
   marginTop: 40,
  },

  gatobobo: {
  width: 300,
  height: 200,
  },
});