import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Vibration,
  Keyboard,
  Pressable,
} from "react-native";
import ResultImc from "./ResultImc/index";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Informe o seu peso e altura");
  const [imc, setImc] = useState(null);
  const [statusImc, setStatusImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [heightErrorMessage, setHeightErrorMessage] = useState(null);
  const [weightErrorMessage, setWeightErrorMessage] = useState(null);

  function imcCalculator() {
    let heightFormat = height.replace(",", ".");
    let weightFormat = weight.replace(",", ".");
    let calculatedImc = (weightFormat / (heightFormat * heightFormat)).toFixed(
      2
    );
    setImc(calculatedImc);

    if (calculatedImc >= 18.5 && calculatedImc <= 25) {
      setStatusImc("Parabéns! Seu IMC está bom.");
    } else if (calculatedImc > 25) {
      setStatusImc("Seu IMC está alto. Procure um médico!");
    } else {
      setStatusImc("Seu IMC está baixo. Procure um médico!");
    }
    return imc;
  }

  function verifyHeight() {
    if (height == null || height == "") {
      setHeightErrorMessage("Campo altura obrigatório*");
    }
  }

  function verifyWeight() {
    if (weight == null || weight == "") {
      setWeightErrorMessage("Campo peso é obrigatório*");
      Vibration.vibrate();
    }
  }

  function validationImc() {
    verifyHeight();
    verifyWeight();
    if (weight != null && height != null) {
      Keyboard.dismiss();
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu IMC é igual a:");
      setTextButton("Calcular novamente");
      setHeightErrorMessage(null);
      setWeightErrorMessage(null);
      return;
    } else if (weight != null && height == null) {
      setWeightErrorMessage(null);
    } else if (weight == null && height != null) {
      setHeightErrorMessage(null);
    }
    setImc(null);
    setStatusImc(null);
    setTextButton("Calcular");
    setMessageImc("Por favor, informe seu peso e sua altura");
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.errorMessage}>{heightErrorMessage}</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.85"
          keyboardType="numeric"
          style={styles.input}
        />

        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.errorMessage}>{weightErrorMessage}</Text>
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
      <ResultImc
        messageResultImc={messageImc}
        ResultImc={imc}
        StatusImc={statusImc}
      />
    </Pressable>
  );
}
