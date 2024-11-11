import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

// styles
import { styles } from "@/src/styles/perfil/styles";

import EditScreenInfo from "@/src/components/EditScreenInfo";
import { Text, View } from "@/src/components/Themed";
import { FormsPerfil } from "@/src/components/pages/perfil/formsPerfil";

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <FormsPerfil />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
