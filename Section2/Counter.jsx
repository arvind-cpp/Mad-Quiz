import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={() => setCount(count + 1)} />
        <View style={{ width: 10 }} /> 
        <Button
          title="Decrement"
          onPress={() => setCount(count - 1)}
          disabled={count === 0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default CounterApp;
