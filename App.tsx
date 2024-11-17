import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Config from 'react-native-config';

export default function App() {
  console.log(Config)
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Your current environment = {Config.ENV}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
