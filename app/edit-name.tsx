import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { C, editNameStyles as styles } from "./edit-name.styles";

export default function EditNameScreen() {
  const router = useRouter();
  const [name, setName] = useState("Alex Henderson");
  const [inputFocused, setInputFocused] = useState(false);
  const [error, setError] = useState("");

  const getNameValidationError = (value: string): string => {
    // Check if empty or only whitespace
    if (!value || !value.trim()) {
      return "Name cannot be empty";
    }

    // Check for numbers
    if (/\d/.test(value)) {
      return "Numbers are not allowed";
    }

    // Check for special characters and symbols (anything that's not letter, space, or dash/apostrophe)
    if (!/^[a-zA-Z\s'-]*$/.test(value)) {
      return "Special characters and symbols are not allowed";
    }

    return "";
  };

  const isValidName = (value: string) => {
    return getNameValidationError(value) === "";
  };

  const handleNameChange = (value: string) => {
    setName(value);
    const validationError = getNameValidationError(value);
    setError(validationError);
  };

  const handleSave = () => {
    if (isValidName(name)) {
      // Navigate to OTP screen
      router.push("/edit-otp");
    }
  };

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      {/* ── Header ── */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.8}
        >
          <MaterialIcons name="arrow-back" size={24} color={C.onSurface} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Name</Text>
        <Image
          source={{
            uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoYrCIoQN_lPwhAsDs1JfW9lMxdL4rSREkdLMYoO85Ddin654--5MPxCfg38q16Lx5doYqxKz1pq2YE0Fl1218LUxyF1-M7s591DngRAgmlVmGVxiD0xSSKQcO4Mg-iCKFRMq0VA0MspA2tq6ORYxpbCxDV6f26gCbl6FduBMxXO53Lzk0X5g3c3jtgRUqJWjfoJ1HxV-jvANNkrKdWnY1gqCtHXt6XfsmgC30yt28u4dIzS4rHKi3zGP5E6F0diLrQGceu2FoGQM",
          }}
          style={styles.headerAvatar}
        />
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Form Section ── */}
        <View style={styles.formSection}>
          <Text style={styles.label}>Full Name</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={[styles.input, inputFocused && styles.inputFocused]}
              placeholder="Enter your name"
              placeholderTextColor="rgba(255, 255, 255, 0.4)"
              value={name}
              onChangeText={handleNameChange}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
            />
            <View style={styles.inputIcon}>
              <MaterialIcons name="person" size={20} color={C.outlineVariant} />
            </View>
          </View>
          {error ? (
            <Text style={styles.errorText}>{error}</Text>
          ) : (
            <Text style={styles.helperText}>
              This is how your name will appear across the AutoCharge ecosystem.
            </Text>
          )}
        </View>

        {/* ── Security Insight Banner ── */}
        <View style={styles.insightBanner}>
          <View style={styles.insightIconWrap}>
            <MaterialIcons name="security" size={20} color={C.secondary} />
          </View>
          <View style={styles.insightContent}>
            <Text style={styles.insightTitle}>Identity Protection</Text>
            <Text style={styles.insightBody}>
              Your current session is secured. Changing your name requires a
              one-time verification step for your protection.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* ── Save Button Footer ── */}
      <View style={styles.footerContainer}>
        <TouchableOpacity
          onPress={handleSave}
          activeOpacity={0.8}
          disabled={!isValidName(name)}
        >
          <LinearGradient
            colors={["#4b5d90", "#b3c5ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[
              styles.saveButton,
              !isValidName(name) && styles.saveButtonDisabled,
            ]}
          >
            <Text
              style={[
                styles.saveButtonText,
                !isValidName(name) && styles.saveButtonTextDisabled,
              ]}
            >
              Save Changes
            </Text>
            <MaterialIcons
              name="chevron-right"
              size={20}
              color={!isValidName(name) ? "#8c90a1" : "#1b2e5e"}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
