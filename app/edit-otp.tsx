import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { C, editOtpStyles as styles } from "./edit-otp.styles";

const VALID_OTP = "1234";

export default function EditOtpScreen() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleOtpChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError("");

      // Move to next input if filled
      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleOtpKeyDown = (index: number, nativeEvent: any) => {
    if (nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const otpString = otp.join("");

    if (otpString.length !== 4) {
      return;
    }

    setVerifying(true);

    setTimeout(() => {
      if (otpString === VALID_OTP) {
        setVerified(true);
        setVerifying(false);
        // Navigate to OTP success screen after 1.5 seconds
        setTimeout(() => {
          router.dismissAll();
          router.push("/edit-otp-success");
        }, 1500);
      } else {
        setVerifying(false);
        setError("Invalid OTP");
        setOtp(["", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
    }, 1200);
  };

  const handleResendOtp = () => {
    setOtp(["", "", "", ""]);
    setError("");
    inputRefs.current[0]?.focus();
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
        <Text style={styles.headerTitle}>AutoCharge</Text>
        <Image
          source={{
            uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoYrCIoQN_lPwhAsDs1JfW9lMxdL4rSREkdLMYoO85Ddin654--5MPxCfg38q16Lx5doYqxKz1pq2YE0Fl1218LUxyF1-M7s591DngRAgmlVmGVxiD0xSSKQcO4Mg-iCKFRMq0VA0MspA2tq6ORYxpbCxDV6f26gCbl6FduBMxXO53Lzk0X5g3c3jtgRUqJWjfoJ1HxV-jvANNkrKdWnY1gqCtHXt6XfsmgC30yt28u4dIzS4rHKi3zGP5E6F0diLrQGceu2FoGQM",
          }}
          style={styles.headerAvatar}
        />
      </View>

      {/* ── Center Content with Glass Panel ── */}
      <View style={styles.centerContent}>
        <View style={styles.glassPanel}>
          {/* ── Header Section ── */}
          <View style={styles.headerSection}>
            <View style={styles.iconBadge}>
              <MaterialIcons
                name="verified-user"
                size={36}
                color={C.primary}
                style={{ fontVariationSettings: "'FILL' 1" }}
              />
            </View>
            <Text style={styles.title}>Verify Your Identity</Text>
            <Text style={styles.description}>
              We&apos;ve sent a 4-digit code to{"\n"}
              <Text style={{ color: C.primary, fontWeight: "600" }}>
                a***.h@autocharge.pro
              </Text>
            </Text>
          </View>

          {/* ── OTP Input Boxes ── */}
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={[
                  styles.otpBox,
                  focusedIndex === index && styles.otpBoxFocused,
                ]}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(value) => handleOtpChange(index, value)}
                onKeyPress={({ nativeEvent }) =>
                  handleOtpKeyDown(index, nativeEvent)
                }
                onFocus={() => setFocusedIndex(index)}
                onBlur={() => setFocusedIndex(-1)}
                editable={!verifying && !verified}
              />
            ))}
          </View>

          {/* ── Action Section ── */}
          <View style={styles.actionSection}>
            {error && <Text style={styles.errorMessage}>{error}</Text>}
            <TouchableOpacity
              onPress={handleVerify}
              activeOpacity={0.8}
              disabled={otp.join("").length !== 4 || verifying || verified}
            >
              <LinearGradient
                colors={
                  verified ? ["#4edea3", "#00b47d"] : ["#0055d5", "#b3c5ff"]
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.verifyButton}
              >
                {verifying || verified ? (
                  <>
                    <MaterialIcons
                      name={verified ? "check-circle" : "autorenew"}
                      size={20}
                      color={verified ? C.background : "#1b2e5e"}
                      style={verifying ? { animationName: "spin" } : {}}
                    />
                    <Text
                      style={[
                        styles.verifyButtonText,
                        { color: verified ? C.background : "#1b2e5e" },
                      ]}
                    >
                      {verified ? "Verified" : "Verifying..."}
                    </Text>
                  </>
                ) : (
                  <>
                    <Text style={styles.verifyButtonText}>Verify</Text>
                    <MaterialIcons
                      name="chevron-right"
                      size={18}
                      color="#1b2e5e"
                    />
                  </>
                )}
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.resendContainer}>
              <Text style={styles.resendText}>
                Didn&apos;t receive the code?
              </Text>
              <TouchableOpacity onPress={handleResendOtp} disabled={verifying}>
                <Text style={styles.resendButton}>Resend OTP</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* ── Security Tip Banner ── */}
          <View style={styles.securityBanner}>
            <View style={styles.securityIconWrap}>
              <MaterialIcons name="info" size={16} color={C.secondary} />
            </View>
            <Text style={styles.securityText}>
              Security Tip: Ensure you&apos;re on a secure network. AutoCharge
              will never ask for your password via email.
            </Text>
          </View>
        </View>
      </View>

      {/* ── Footer Text ── */}
      <Text style={styles.footerText}>SECURE ENCRYPTION PROTOCOL V4.2.0</Text>
    </SafeAreaView>
  );
}
