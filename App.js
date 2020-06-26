import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Navbar} from "./src/navbar";

export default function App() {
  return (
    <View style={styles.container}>
     <Navbar title='Todo App'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
  }
  
});
