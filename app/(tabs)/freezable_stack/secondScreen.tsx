import { Button, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Second Screen</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Link href="/outer_modal/modal" asChild>
        <Button title='Open the external modal next.' />
      </Link>
      <Text style={[styles.instructions, styles.bold]}>
        Then:
      </Text>
      <Text style={styles.instructions}>
        Pull to dismiss it and then <Text style={styles.bold}>quickly</Text> swipe to dismiss this screen.
      </Text>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.instructions}>
        I can't reproduce it if the modal is in the same stack though.
      </Text>
      <Link href="./inner_modal" asChild>
        <Button title='Open the modal in the same stack.' />
      </Link>
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
