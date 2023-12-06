import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultImc(props) {
  const onshare = async () => {
    const result = await Share.share({
      message: "Meu IMC hoje é: " + props.ResultImc,
    });
  };

  return (
    <View style={styles.resultImc}>
      <View style={styles.boxShareButton}>
        <Text style={styles.information}>{props.messageResultImc}</Text>
        <Text style={styles.numberImc}>{props.ResultImc}</Text>
        <Text style={styles.statusImc}>{props.StatusImc}</Text>
        <TouchableOpacity onPress={onshare} style={styles.share}>
          <Text style={styles.sharedText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
