import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Circle, Svg } from "react-native-svg";
import { C, styles } from "./index.styles";

function PulseDot() {
  const opacity = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.2,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [opacity]);
  return <Animated.View style={[styles.expiryDot, { opacity }]} />;
}

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      {/* ── Header ── */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkKnGd74NdWKV_mSmAC1kvW3Ee_r93owXkDuWNdibeyQrcDQc7tMFbOaoyK74i3Ix9FlIu-i5ehYW1FzdIMiIP7JPxboDZKPCCSgSguQyxTF4KYJ9L_GCTX21jxt0KF3_Og7Dx489vBKfzpeACdMPkBojQ951gRpjpiofFqxVjMoUymZPmvueC4ME-HjorNd7AoCAgJg7USle_5S51BQeVxeG6Oan8dJP4u9ziLjS8h_SqlK-RlLVNJ0aXX1beSBLx6m458DVC_Zg",
            }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.greeting}>Good evening,</Text>
            <Text style={styles.userName}>Alex</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationBtn} activeOpacity={0.8}>
          <MaterialIcons name="notifications" size={24} color={C.primary} />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Smart Insight Banner ── */}
        <View style={styles.insightBanner}>
          <View style={styles.insightIconWrap}>
            <MaterialIcons name="psychology" size={24} color={C.primary} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.insightTitle}>Smart Insight</Text>
            <Text style={styles.insightBody}>
              Your current plan may expire tonight at 11:59 PM. Auto-recharge is
              ready.
            </Text>
          </View>
        </View>

        {/* ── Hero Card: Ultra Plan ── */}
        <View style={styles.heroCard}>
          <View style={styles.heroGlow} />
          <View style={styles.heroTopRow}>
            <View style={styles.heroLeft}>
              <View style={styles.expiryBadge}>
                <PulseDot />
                <Text style={styles.expiryText}>Expires in 2h 14m</Text>
              </View>
              <Text style={styles.phoneNumber}>+91 98765 43210</Text>
              <View style={styles.planRow}>
                <View style={styles.planDot} />
                <Text style={styles.planName}>
                  Airtel AirFiber • Ultra Plan
                </Text>
              </View>
            </View>

            {/* Circular Progress Ring */}
            <View style={styles.progressRingWrap}>
              <Svg width={128} height={128} viewBox="0 0 100 100">
                <Circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke={C.surfaceContainerHighest}
                  strokeWidth={6}
                />
                <Circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke={C.tertiary}
                  strokeWidth={6}
                  strokeDasharray="251.2"
                  strokeDashoffset="200.96"
                  strokeLinecap="round"
                  transform="rotate(-90, 50, 50)"
                />
              </Svg>
              <View style={styles.progressCenter}>
                <Text style={styles.progressPercent}>20%</Text>
                <Text style={styles.progressLabel}>Left</Text>
              </View>
            </View>
          </View>

          {/* Stats grid */}
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Data Left</Text>
              <Text style={styles.statValue}>4.2 GB</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Pack Value</Text>
              <Text style={styles.statValue}>₹599.00</Text>
            </View>
          </View>

          {/* Schedule Recharge button */}
          <TouchableOpacity activeOpacity={0.92} style={styles.ctaWrapper}>
            <LinearGradient
              colors={["#0055d5", "#5e8bff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.ctaButton}
            >
              <MaterialIcons name="bolt" size={20} color="white" />
              <Text style={styles.ctaButtonText}>Schedule Recharge</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* ── Quick Actions Grid ── */}
        <View style={styles.actionsGrid}>
          <View style={styles.actionsRow}>
            <TouchableOpacity
              style={[styles.glassCard, styles.actionBtn]}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.actionIconWrap,
                  { backgroundColor: "rgba(179,197,255,0.1)" },
                ]}
              >
                <MaterialIcons name="calendar" size={24} color={C.primary} />
              </View>
              <Text style={styles.actionLabel}>Schedule Recharge</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.glassCard, styles.actionBtn]}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.actionIconWrap,
                  { backgroundColor: "rgba(78,222,163,0.1)" },
                ]}
              >
                <MaterialIcons name="bolt" size={24} color={C.secondary} />
              </View>
              <Text style={styles.actionLabel}>Recharge Now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.actionsRow}>
            <TouchableOpacity
              style={[styles.glassCard, styles.actionBtn]}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.actionIconWrap,
                  { backgroundColor: "rgba(255,185,95,0.1)" },
                ]}
              >
                <MaterialIcons name="group" size={24} color={C.tertiary} />
              </View>
              <Text style={styles.actionLabel}>Family Numbers</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.glassCard, styles.actionBtn]}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.actionIconWrap,
                  { backgroundColor: "rgba(194,198,216,0.1)" },
                ]}
              >
                <MaterialIcons
                  name="history"
                  size={24}
                  color={C.onSurfaceVariant}
                />
              </View>
              <Text style={styles.actionLabel}>History</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Upcoming Queue ── */}
        <View>
          <View style={styles.queueHeader}>
            <Text style={styles.queueTitle}>Upcoming Queue</Text>
            <TouchableOpacity>
              <Text style={styles.queueViewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.queueItems}>
            {/* Pending */}
            <View style={[styles.queueItem, styles.queueItemPending]}>
              <View style={styles.queueItemLeft}>
                <View style={styles.queueIconWrap}>
                  <MaterialIcons name="wifi" size={20} color={C.outline} />
                </View>
                <View>
                  <Text style={styles.queueItemName}>+91 73445 11280</Text>
                  <Text style={styles.queueItemMeta}>
                    Feb 24, 10:00 AM • ₹1,299
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.statusBadge,
                  {
                    backgroundColor: "rgba(179,197,255,0.1)",
                    borderColor: "rgba(179,197,255,0.2)",
                  },
                ]}
              >
                <Text style={[styles.statusBadgeText, { color: C.primary }]}>
                  PENDING
                </Text>
              </View>
            </View>

            {/* Completed */}
            <View style={[styles.queueItem, styles.queueItemCompleted]}>
              <View style={styles.queueItemLeft}>
                <View style={styles.queueIconWrap}>
                  <MaterialIcons
                    name="smartphone"
                    size={20}
                    color={C.outline}
                  />
                </View>
                <View>
                  <Text style={styles.queueItemName}>+91 99022 55471</Text>
                  <Text style={styles.queueItemMeta}>
                    Feb 20, 04:30 PM • ₹499
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.statusBadge,
                  {
                    backgroundColor: "rgba(78,222,163,0.1)",
                    borderColor: "rgba(78,222,163,0.2)",
                  },
                ]}
              >
                <Text style={[styles.statusBadgeText, { color: C.secondary }]}>
                  COMPLETED
                </Text>
              </View>
            </View>

            {/* Failed */}
            <View style={[styles.queueItem, styles.queueItemFailed]}>
              <View style={styles.queueItemLeft}>
                <View style={styles.queueIconWrap}>
                  <MaterialIcons name="router" size={20} color={C.outline} />
                </View>
                <View>
                  <Text style={styles.queueItemName}>Gifi Router-X821</Text>
                  <Text style={styles.queueItemMeta}>
                    Feb 18, 09:15 AM • ₹999
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.statusBadge,
                  {
                    backgroundColor: "rgba(255,180,171,0.1)",
                    borderColor: "rgba(255,180,171,0.2)",
                  },
                ]}
              >
                <Text style={[styles.statusBadgeText, { color: C.error }]}>
                  FAILED
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
