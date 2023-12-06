import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resultImc: {
    flex: 1,
    marginTop: 20,
    paddingTop: 15,
    alignItems: "center",
    width: "100%",
  },

  numberImc: {
    fontSize: 48,
    color: "#ff5900",
    fontWeight: "bold",
  },

  information: {
    fontSize: 18,
    color: "#ff5900",
    fontWeight: "bold",
  },

  statusImc: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },

  boxShareButton: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },

  share: {
    backgroundColor: "#1877f2",
    borderRadius: 50,
    paddingVertical: 5,
    marginTop: 10,
  },

  sharedText: {
    color: "#fff",
    fontWeight: "bold",
    paddingHorizontal: 15,
  },
});

export default styles;
