import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 25,
  },
  option: {
    width: 100,
    height: 100,
    backgroundColor: "#F2B807",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#1A5173",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  optionText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1A5173",
  },
});
