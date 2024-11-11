import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

// icons
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export function OpcoesTelaInicial() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.option}>
          <FontAwesome5 name="child" size={43} color="#1A5173" />
          <Text style={styles.optionText}>Kids</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <FontAwesome6 name="hands-holding-child" size={38} color="#1A5173" />
          <Text style={styles.optionText}>Células</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <MaterialIcons name="church" size={43} color="#1A5173" />
          <Text style={styles.optionText}>Cultos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.option}>
          <MaterialIcons name="groups" size={43} color="#1A5173" />
          <Text style={styles.optionText}>Líderes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <MaterialIcons name="groups" size={43} color="#1A5173" />
          <Text style={styles.optionText}>Discipulado</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons
            name="file-document-edit"
            size={43}
            color="#1A5173"
          />
          <Text style={styles.optionText}>Relatórios</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.option}>
          <FontAwesome name="gear" size={43} color="#1A5173" />
          <Text style={styles.optionText}>Configurações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <MaterialCommunityIcons
            name="newspaper-variant"
            size={43}
            color="#1A5173"
          />
          <Text style={styles.optionText}>Cadastros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <FontAwesome name="sign-out" size={43} color="#1A5173" />
          <Text style={styles.optionText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
