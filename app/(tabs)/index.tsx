import { styles } from "@/src/styles/index/styles";

import EditScreenInfo from "@/src/components/EditScreenInfo";
import { View } from "@/src/components/Themed";

// components
import { OpcoesTelaInicial } from "@/src/components/pages/inicial/opcoesTelaInicial";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      /> */}

      <OpcoesTelaInicial />

      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}
