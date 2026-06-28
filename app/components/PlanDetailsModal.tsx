import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { labels } from "../../config/plansConfig";
import { C } from "../view-plans.styles";
import styles from "./PlanDetailsModal.styles";

// icon color map and curated labels are UI-specific logic kept in this component
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

interface Plan {
  id: string;
  price: number;
  title?: string;
  validity: string;
  data: string;
  benefits?: string[];
  benefitKeys?: string[];
  serviceIcons?: string[];
  serviceIconsMore?: number;
  label?: string;
  labelColor?: string;
  tags?: string[];
}

const getFallbackIcons = (plan: Plan): string[] => {
  if (plan.serviceIcons && plan.serviceIcons.length > 0)
    return plan.serviceIcons;
  const icons: string[] = [];
  if (plan.tags) {
    if (plan.tags.includes("ott") || plan.tags.includes("entertainment")) {
      icons.push("play_arrow", "tv");
    }
    if (plan.tags.includes("5g")) {
      icons.push("network_check", "memory");
    }
  }
  if (plan.benefits && plan.benefits.length > 0) {
    icons.push("memory");
  }
  if (icons.length === 0) {
    icons.push("memory", "network_check");
  }
  return icons.slice(0, 3);
};

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

  if (!plan) return null;

  const icons =
    plan.serviceIcons && plan.serviceIcons.length > 0
      ? plan.serviceIcons
      : getFallbackIcons(plan);

  return (
    <Modal visible={visible} transparent animationType="slide">
      <SafeAreaView style={styles.safe}>
        <Pressable style={styles.overlay} onPress={onClose} />
        <Animated.View style={[styles.sheet, { shadowRadius: glowShadow }]}>
          <View style={styles.dragHandleContainer}>
            <View style={styles.dragHandle} />
          </View>

          <View style={styles.header}>
            <Text style={styles.title}>{labels.title}</Text>
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
                    <Text style={styles.badgeText}>
                      {labels.activeMembershipBadge}
                    </Text>
                  </View>
                </View>

                <View style={styles.metricGrid}>
                  <View style={styles.vaultItem}>
                    <Text style={styles.metricLabel}>{labels.duration}</Text>
                    <Text style={styles.metricValue}>{plan.validity}</Text>
                    <View
                      style={[styles.metricAccentBar, styles.bgPrimaryBar]}
                    />
                  </View>
                  <View style={styles.vaultItem}>
                    <Text style={styles.metricLabel}>{labels.dailyLimit}</Text>
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
              <Text style={styles.sectionLabel}>{labels.curatedSuites}</Text>
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
              <Text style={styles.sectionLabel}>
                {labels.infrastructureAccess}
              </Text>
            </View>

            <View style={styles.benefitList}>
              {(() => {
                const planKeys = (plan as any).benefitKeys || [];
                const defs =
                  Array.isArray(planKeys) && planKeys.length > 0
                    ? labels.benefits
                        .filter((bb: any) => planKeys.includes(bb.key))
                        .sort(
                          (a: any, b: any) =>
                            (a.priority || 0) - (b.priority || 0),
                        )
                    : labels.benefits.slice(0, 3);
                return defs.map((b: any, i: number) => (
                  <View key={b.key || i} style={styles.benefitCard}>
                    <View style={styles.benefitIconBox}>
                      {i === 0 ? (
                        <Text style={{ color: C.secondary, fontWeight: "800" }}>
                          {b.short}
                        </Text>
                      ) : i === 1 ? (
                        <MaterialIcons
                          name="settings_phone"
                          size={24}
                          color={C.primary}
                        />
                      ) : (
                        <MaterialIcons
                          name="all_inbox"
                          size={24}
                          color={C.onSurface}
                        />
                      )}
                    </View>
                    <View style={styles.benefitContent}>
                      <Text style={styles.benefitTitle}>{b.title}</Text>
                      <Text style={styles.benefitSubtitle}>{b.subtitle}</Text>
                    </View>
                  </View>
                ));
              })()}
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
                      {labels.authorizeTransaction}
                    </Text>
                    <Text style={styles.payButtonValue}>
                      {labels.payPrefix} ₹{plan.price}.00
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
