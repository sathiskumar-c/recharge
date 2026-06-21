import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WalletScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <Text style={styles.title}>Wallet</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A0A0A",
  },
  title: { fontSize: 24, fontWeight: "bold", color: "#e5e2e1" },
});
