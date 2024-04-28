import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList,ScrollView } from 'react-native';
import Cita from './componentes/Cita.js';
import Formulario from './componentes/Formulario.js';
export default function App() {

  //definir citas
  const [citas, setCitas] = useState([
    {id:"1",paciente:"Matriz", propietario:"Alex", sintomas:"No estudia"},
    {id:"2",paciente:"Sede", propietario:"Mario", sintomas:"No camina"},
    {id:"3",paciente:"Local", propietario:"Billie", sintomas:"No ve"},
    {id:"4",paciente:"Matriz", propietario:"Lina", sintomas:"No dio examen"}
  ]);

  //Elimina cita y acepta cita useState
  const   Aceptada = () => {
    setAccepted(true);
    Alert.alert('Cita Aceptada', '¡La cita ha sido aceptada correctamente!');
    console.log("Se ha rechazado la cita");

  };

  const citaRechazada = (id) => {
  //   setCitas (citas.filter((cita)=> cita.id != id));
  //   Alert.alert('Cita Rechazada','La cita ha sido rechazada correctamente');
     setCitas ((citasActuales)=>{
             return citasActuales.filter(cita=> cita.id !== id)
     });
     
  };


  return (
    <ScrollView>

    <View style={styles.container}>
      <Text style={styles.titulo}>Administrador citas</Text>
      <Formulario/>

      <Text style={styles.titulo}>{citas.length > 0 ? 'Administra sus citas' : 'Ya no hay citas'}</Text>
       <FlatList
       data={citas}
       renderItem={({item})  => <Cita item={item} citaRechazada={citaRechazada}/> }
       keyExtractor={citas => citas.id}
       />

      {/* <StatusBar style="auto" />
      {citas.map(citas=>(
        <View>
        <Text>{citas.paciente}</Text>
        </View>
      ))} */}
    </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff5733',
   
  },
  titulo:{
   color:"white",
   fontSize:28,
   marginTop:50,
   marginBottom:40,
   fontWeight: "bold",
   textAlign: "center"
  }
});
