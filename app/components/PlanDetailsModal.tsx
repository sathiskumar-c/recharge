import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { C } from "../view-plans.styles";

interface Plan {
  id: string;
  price: number;
  title?: string;
  validity: string;
  data: string;
  benefits?: string[];
  serviceIcons?: string[];
  serviceIconsMore?: number;
  label?: string;
  labelColor?: string;
  tags?: string[];
}

export default function PlanDetailsModal({
  visible,
  plan,
  onClose,
  onRecharge,
}: {
  visible: boolean;
  plan: Plan | null;
  onClose: () => void;
  onRecharge: (plan: Plan) => void;
}) {
  if (!plan) return null;

  const pulse = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const anim = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: false,
        }),
        Animated.timing(pulse, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: false,
        }),
      ]),
    );
    anim.start();
    return () => anim.stop();
  }, [pulse]);

  const glowShadow = pulse.interpolate({
    inputRange: [0, 1],
    outputRange: [6, 24],
  });

  const colorMap: Record<string, string> = {
    sports_esports: "#00b47d",
    movie: C.error,
    star: "#b3c5ff",
    play_arrow: C.error,
    shopping_cart: C.primary,
    tv: "#ffb95f",
    call: C.secondary,
    mail: "#ffb95f",
    public: "#00b47d",
    data_saver: C.tertiary,
    network_check: C.secondary,
    memory: C.primary,
    verified: "#b3c5ff",
    cloud_done: "#b3c5ff",
    movie_filter: C.error,
    music_note: "#b3c5ff",
    play_circle: C.primary,
  };

  const getIconColor = (icon: string) => colorMap[icon] || C.primary;

  function getFallbackIcons(p: Plan) {
    const out: string[] = [];
    if (p.tags) {
      if (p.tags.includes("ott") || p.tags.includes("entertainment"))
        out.push("play_arrow", "tv");
      if (p.tags.includes("5g")) out.push("network_check");
    }
    if (p.benefits && p.benefits.length > 0) out.push("memory");
    if (out.length === 0) out.push("memory", "network_check");
    return out.slice(0, 4);
  }

  const icons =
    plan.serviceIcons && plan.serviceIcons.length > 0
      ? plan.serviceIcons
      : getFallbackIcons(plan);

  const curatedLabelMap: Record<string, string> = {
    play_arrow: "JioTV",
    cloud_done: "Cloud",
    movie: "Cinema",
    movie_filter: "Cinema",
    music_note: "Saavn",
    sports_esports: "Games",
    shopping_cart: "Shopping",
    tv: "TV",
    play_circle: "JioTV",
  };

  const getCuratedLabel = (icon: string) => curatedLabelMap[icon] || "Service";

  return (
    <Modal visible={visible} transparent animationType="slide">
      <SafeAreaView style={styles.safe}>
        <Pressable style={styles.overlay} onPress={onClose} />
        <Animated.View style={[styles.sheet, { shadowRadius: glowShadow }]}>
          <View style={styles.dragHandleContainer}>
            <View style={styles.dragHandle} />
          </View>

          <View style={styles.header}>
            <Text style={styles.title}>Plan Details</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <MaterialIcons name="close" size={20} color={C.onSurface} />
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.obsidianCard}>
              <View style={styles.pricingHero}>
                <View>
                  <View style={styles.priceDisplay}>
                    <Text style={styles.priceAmount}>₹{plan.price}</Text>
                    <Text style={styles.pricePeriod}>
                      / {plan.validity.replace(" Days", "d")}
                    </Text>
                  </View>
                  <View style={styles.badgeActive}>
                    <MaterialIcons
                      name="verified"
                      size={14}
                      color={getIconColor("verified") as any}
                    />
                    <Text style={styles.badgeText}>Active Membership</Text>
                  </View>
                </View>

                <View style={styles.metricGrid}>
                  <View style={styles.vaultItem}>
                    <Text style={styles.metricLabel}>Duration</Text>
                    <Text style={styles.metricValue}>{plan.validity}</Text>
                    <View
                      style={[styles.metricAccentBar, styles.bgPrimaryBar]}
                    />
                  </View>
                  <View style={styles.vaultItem}>
                    <Text style={styles.metricLabel}>Daily Limit</Text>
                    <Text style={styles.metricValue}>{plan.data}</Text>
                    <View
                      style={[styles.metricAccentBar, styles.bgSecondaryBar]}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.sectionDividerArea}>
              <View style={styles.dividerLine} />
              <Text style={styles.sectionLabel}>Curated Suites</Text>
              <View style={styles.dividerLine} />
            </View>

            <View style={styles.iconGrid}>
              {icons.slice(0, 4).map((icon, i) => (
                <View key={i} style={styles.iconUnit}>
                  <View style={styles.iconContainer}>
                    <MaterialIcons
                      name={icon as any}
                      size={28}
                      color={getIconColor(icon)}
                    />
                  </View>
                  <Text style={styles.iconText}>{getCuratedLabel(icon)}</Text>
                </View>
              ))}
            </View>

            <View style={styles.sectionDividerAreaSingle}>
              <Text style={styles.sectionLabel}>Infrastructure Access</Text>
            </View>

            <View style={styles.benefitList}>
              <View style={styles.benefitCard}>
                <View style={styles.benefitIconBox}>
                  <Text style={{ color: C.secondary, fontWeight: "800" }}>
                    5G
                  </Text>
                </View>
                <View style={styles.benefitContent}>
                  <Text style={styles.benefitTitle}>Unlimited True 5G</Text>
                  <Text style={styles.benefitSubtitle}>
                    Premier low-latency bandwidth
                  </Text>
                </View>
              </View>

              <View style={styles.benefitCard}>
                <View style={styles.benefitIconBox}>
                  <MaterialIcons
                    name="settings_phone"
                    size={24}
                    color={C.primary}
                  />
                </View>
                <View style={styles.benefitContent}>
                  <Text style={styles.benefitTitle}>HD Voice Calls</Text>
                  <Text style={styles.benefitSubtitle}>
                    Unlimited nationwide crystal-clear calling
                  </Text>
                </View>
              </View>

              <View style={styles.benefitCard}>
                <View style={styles.benefitIconBox}>
                  <MaterialIcons
                    name="all_inbox"
                    size={24}
                    color={C.onSurface}
                  />
                </View>
                <View style={styles.benefitContent}>
                  <Text style={styles.benefitTitle}>Digital Messaging</Text>
                  <Text style={styles.benefitSubtitle}>
                    100 SMS quota per cycle
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.finePrintCard}>
              <MaterialIcons name="info" size={16} color={C.onSurfaceVariant} />
              <View style={styles.finePrintTextWrap}>
                <Text style={styles.finePrintText}>
                  • FUP applies: Data speed resets to 64 Kbps after daily quota.
                </Text>
                <Text style={styles.finePrintText}>
                  • 5G availability is subject to network coverage and
                  compatible devices.
                </Text>
                <Text style={styles.finePrintText}>
                  • All plans include regulatory taxes and standard service
                  agreements.
                </Text>
              </View>
            </View>
          </ScrollView>

          <View style={styles.footerAction}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                onRecharge(plan);
                onClose();
              }}
            >
              <Animated.View
                style={[styles.payButton, { shadowRadius: glowShadow }]}
              >
                <LinearGradient
                  colors={["#334576", "#1b2e5e"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.payButtonInner}
                >
                  <View>
                    <Text style={styles.payButtonLabel}>
                      Authorize Transaction
                    </Text>
                    <Text style={styles.payButtonValue}>
                      Pay ₹{plan.price}.00
                    </Text>
                  </View>
                  <View style={styles.payButtonIcon}>
                    <MaterialIcons
                      name="arrow-forward-ios"
                      size={24}
                      color="white"
                    />
                  </View>
                </LinearGradient>
              </Animated.View>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, justifyContent: "flex-end" },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 40,
  },
  sheet: {
    zIndex: 50,
    backgroundColor: C.surfaceContainer || "#0e0e0e",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    maxHeight: "92%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -12 },
    shadowOpacity: 0.6,
    elevation: 20,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.06)",
  },
  dragHandleContainer: {
    display: "flex",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 4,
  },
  dragHandle: {
    width: 40,
    height: 6,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.04)",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.06)",
  },
  title: { fontSize: 24, fontWeight: "800", color: C.onSurface },
  closeBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: C.surfaceContainerHigh || "rgba(255,255,255,0.02)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
  },
  content: { paddingHorizontal: 20, paddingBottom: 160, paddingTop: 8 },
  obsidianCard: {
    backgroundColor: C.surfaceContainerLow || "#1c1b1b",
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    marginBottom: 24,
  },
  pricingHero: { display: "flex", gap: 24 },
  priceDisplay: { flexDirection: "row", alignItems: "baseline", gap: 6 },
  priceAmount: {
    fontSize: 48,
    fontWeight: "800",
    color: C.primary,
    lineHeight: 48,
  },
  pricePeriod: {
    fontSize: 14,
    fontWeight: "500",
    color: C.onSurfaceVariant,
    marginLeft: 6,
  },
  badgeActive: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgba(179,197,255,0.06)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "rgba(179,197,255,0.2)",
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "rgba(179,197,255,0.9)",
  },
  metricGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  vaultItem: {
    flex: 1,
    backgroundColor: C.surface || "#131313",
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.04)",
    marginRight: 12,
  },
  metricLabel: {
    fontSize: 10,
    textTransform: "uppercase",
    fontWeight: "800",
    color: C.onSurfaceVariant,
  },
  metricValue: {
    fontSize: 18,
    fontWeight: "800",
    color: C.onSurface,
    marginTop: 6,
  },
  metricAccentBar: { height: 2, width: 32, marginTop: 8, borderRadius: 999 },
  bgPrimaryBar: { backgroundColor: "rgba(219,226,255,0.4)" },
  bgSecondaryBar: { backgroundColor: "rgba(78,222,163,0.4)" },
  sectionDividerArea: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  sectionDividerAreaSingle: { marginTop: 12, marginBottom: 12 },
  dividerLine: { flex: 1, height: 1, backgroundColor: "rgba(69,70,79,0.5)" },
  sectionLabel: {
    fontSize: 10,
    fontWeight: "800",
    color: C.onSurfaceVariant,
    textTransform: "uppercase",
    letterSpacing: 2,
    textAlign: "center",
  },
  iconGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    marginBottom: 24,
  },
  iconUnit: { alignItems: "center" },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: C.surface || "#131313",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  iconText: {
    fontSize: 11,
    fontWeight: "700",
    marginTop: 8,
    color: C.onSurface,
  },
  benefitList: { marginTop: 8, marginBottom: 8 },
  benefitCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    backgroundColor: C.surfaceContainerLow || "#1c1b1b",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    marginBottom: 12,
  },
  benefitIconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: C.surfaceContainerHighest || "#353534",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  benefitContent: { flex: 1 },
  benefitTitle: { fontSize: 14, fontWeight: "700", color: C.onSurface },
  benefitSubtitle: { fontSize: 12, color: C.onSurfaceVariant, marginTop: 4 },
  finePrintCard: {
    flexDirection: "row",
    gap: 8,
    backgroundColor: C.surfaceContainerLow || "#1c1b1b",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    marginTop: 16,
    marginBottom: 28,
  },
  finePrintTextWrap: { marginLeft: 6 },
  finePrintText: {
    color: C.onSurfaceVariant,
    fontSize: 11,
    lineHeight: 18,
    marginBottom: 6,
  },
  footerAction: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    backgroundColor: C.surfaceContainer || "#0e0e0e",
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.06)",
    zIndex: 60,
  },
  payButton: {
    width: "100%",
    height: 64,
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#0055d5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    elevation: 8,
  },
  payButtonInner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  payButtonLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "rgba(255,255,255,0.9)",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  payButtonValue: { fontSize: 20, fontWeight: "800", color: "white" },
  payButtonIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.05)",
    alignItems: "center",
    justifyContent: "center",
  },
});
