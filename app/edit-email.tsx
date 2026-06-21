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
import { C, S, editEmailStyles as styles } from "./edit-email.styles";

export default function EditEmailScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("alex.h@autocharge.pro");
  const [inputFocused, setInputFocused] = useState(false);
  const [error, setError] = useState("");

  // RFC 5322 simplified email regex that matches most real-world email patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const getEmailValidationError = (value: string): string => {
    // Check if empty or only whitespace
    if (!value || !value.trim()) {
      return "Email cannot be empty";
    }

    // Check if email format is valid
    if (!emailRegex.test(value)) {
      return "Please enter a valid email address";
    }

    return "";
  };

  const isValidEmail = (value: string) => {
    return getEmailValidationError(value) === "";
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    const validationError = getEmailValidationError(value);
    setError(validationError);
  };

  const handleSave = () => {
    if (isValidEmail(email)) {
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
        <Text style={styles.headerTitle}>Edit Email</Text>
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
        {/* ── Instructions ── */}
        <Text style={styles.instructions}>
          Update your primary account email. A verification code will be sent to
          the new address.
        </Text>

        {/* ── Form Section ── */}
        <View style={styles.formSection}>
          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={[styles.input, inputFocused && styles.inputFocused]}
              placeholder="Enter your new email"
              placeholderTextColor="rgba(255, 255, 255, 0.4)"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={handleEmailChange}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
            />
            <View style={styles.inputIcon}>
              <MaterialIcons name="mail" size={20} color={C.outlineVariant} />
            </View>
          </View>
          {error ? (
            <Text style={styles.errorText}>{error}</Text>
          ) : (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: S.sm,
                paddingHorizontal: S.sm,
              }}
            >
              <MaterialIcons name="info" size={12} color={C.outline} />
              <Text style={[styles.helperText, { marginLeft: 0 }]}>
                We use this for important security alerts.
              </Text>
            </View>
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
              Your current session is secured. Changing your email requires a
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
          disabled={!isValidEmail(email)}
        >
          <LinearGradient
            colors={["#4b5d90", "#b3c5ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[
              styles.saveButton,
              !isValidEmail(email) && styles.saveButtonDisabled,
            ]}
          >
            <Text
              style={[
                styles.saveButtonText,
                !isValidEmail(email) && styles.saveButtonTextDisabled,
              ]}
            >
              Save Changes
            </Text>
            <MaterialIcons
              name="chevron-right"
              size={20}
              color={!isValidEmail(email) ? "#8c90a1" : "#1b2e5e"}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
