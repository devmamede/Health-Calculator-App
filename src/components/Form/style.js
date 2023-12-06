import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 10,
    alignItems: "center",
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  form: {
    width: "100%",
  },

  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },

  input: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },

  buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#ff5900",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },

  textButtonCalculator: {
    fontSize: 20,
    color: "#fff",
  },

  errorMessage: {
    fontSize: 12,
    color: "#ff5900",
    fontWeight: "bold",
    paddingLeft: 20,
  },

  exhibitionResultImc: {
    width: "100%",
    height: "50%",
  },
});

export default styles;
