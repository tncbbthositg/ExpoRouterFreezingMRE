import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.instructions}>
        Pull to dismiss this modal.
      </Text>
      <Text style={styles.instructions}>
        Then <Text style={styles.bold}>quickly</Text> swipe to dismiss the screen below it.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  instructions: {
    width: '80%',
    fontSize: 16,
    paddingVertical: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
});
