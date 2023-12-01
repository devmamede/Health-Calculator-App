import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc/index";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Informe o seu peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é igual a:");
      setTextButton("Calcular novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Por favor, informe seu peso e sua altura");
    setTextButton("Calcular novamente");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.85"
          keyboardType="numeric"
          style={styles.input}
        />

        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 65.5"
          keyboardType="numeric"
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => validationImc()}
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} ResultImc={imc} />
    </View>
  );
}
