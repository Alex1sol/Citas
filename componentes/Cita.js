import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';

export default function Cita(props) {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);

  const   Aceptada = () => {
    setAccepted(true);
    Alert.alert('Cita Aceptada', '¡La cita ha sido aceptada correctamente!');
    console.log("Se ha aceptada la cita");

  };

  const Rechazada = (id) => {
    setRejected(true);
    Alert.alert('Cita Rechazada', '¡La cita ha sido rechazada!');
    console.log("Se ha rechazado la cita", id);
    props.citaRechazada(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.value}>{props.item.propietario}</Text>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.label}>Propietarios:</Text>
        <Text style={styles.value}>{props.item.paciente}</Text>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.label}>Síntomas:</Text>
        <Text style={styles.value}>{props.item.sintomas}</Text>
      </View>

      {/* Botón nativo de React Native */}
      <Button title="Aceptar Cita" onPress={Aceptada}  />

      {/* Botón personalizado */}
      <TouchableOpacity style={[styles.customButton, accepted || rejected && styles.disabledButton]} onPress={()=> Rechazada(props.item.id)}>
        <Text style={styles.customButtonText}>Rechazar Cita</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  itemContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#666',
  },
  customButton: {
    backgroundColor: '#ff6b6b',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  customButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
});
