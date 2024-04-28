import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function Formulario() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setSelectedDate(date);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    console.warn("A time has been picked: ", time);
    setSelectedTime(time);
    hideTimePicker();
  };

  return (
    <>
      <View style={styles.formulario}>
        <Text style={styles.label}>Paciente</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
        />
      </View>

      <View style={styles.formulario}>
        <Text style={styles.label}>Dueño</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
        />
      </View>

      <View style={styles.formulario}>
        <Text style={styles.label}>Teléfono</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
        />
      </View>

      <View style={styles.formulario}>
        <Text style={styles.label}>Formulario</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
        />
      </View>

      <View>
        <Button title="Seleccionar Fecha" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
          cancelTextAndroid='Cancelar operación'

        //   locale='es_ES'
        />
      </View>

      <View>
        <Button title="Seleccionar Hora" onPress={showTimePicker} />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  formulario: {
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  }
});
