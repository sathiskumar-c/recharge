import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { C, editOtpSuccessStyles as styles } from "./edit-otp-success.styles";

export default function EditOtpSuccessScreen() {
  const router = useRouter();

  const handleReturnToDashboard = () => {
    router.dismissAll();
    router.push("/(tabs)/account");
  };

  return (
    <SafeAreaView style={styles.screen} edges={["top", "bottom"]}>
      {/* ── Glow Background Circle ── */}
      <View style={styles.glowCircle} />

      {/* ── Main Content ── */}
      <View style={styles.contentContainer}>
        <View style={styles.contentWrapper}>
          {/* ── Success Icon Section ── */}
          <View style={styles.iconContainer}>
            {/* Outer Ring */}
            <View style={styles.ring2} />

            {/* Middle Ring */}
            <View style={styles.ring1} />

            {/* Icon Badge */}
            <View style={styles.iconBadge}>
              <MaterialIcons
                name="check-circle"
                size={48}
                color={C.secondary}
                style={{ fontVariationSettings: "'FILL' 1" }}
              />
            </View>
          </View>

          {/* ── Text Content ── */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>Identity Verified</Text>
            <Text style={styles.description}>
              Your changes have been securely saved and your profile is now up
              to date.
            </Text>
          </View>

          {/* ── Button ── */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleReturnToDashboard}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={["#4b5d90", "#b3c5ff"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Return to Dashboard</Text>
                <MaterialIcons name="chevron-right" size={20} color="#1b2e5e" />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
