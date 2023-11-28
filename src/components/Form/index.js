import React from "react";
import { Text, TextInput, View, Button } from "react-native";

export default function Form() {
  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput placeholder="Ex. 1.85" keyboardType="numeric" />

        <Text>Peso</Text>
        <TextInput placeholder="Ex. 65.5" keyboardType="numeric" />

        <Button title="Calcular IMC" />
      </View>
      <ResultImc messageResultImc={messageImc} ResultImc={Imc} />
    </View>
  );
}
