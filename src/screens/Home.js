import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { AuthContext } from "../contexts/auth";

export function Home(){

  const {user, logout} = useContext(AuthContext);

  function sair(){
    logout();
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Olá, {user.email}!</Text>
      
      <TouchableOpacity style={styles.btSair} onPress={()=>sair()}>
        <Text style={[{color: "#324e7b", fontSize: 16}]}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 32
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: "#000000"
  },
  btSair: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    backgroundColor: "#86a6df",
  },
});
