import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import CounterApp from './CounterApp';
import ProfileCard from './ProfileCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <CounterApp />
        <ProfileCard name="Ali" age={21} profession="Student" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
