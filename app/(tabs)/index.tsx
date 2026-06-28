import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
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
  const router = useRouter();
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
        <TouchableOpacity
          style={styles.notificationBtn}
          activeOpacity={0.8}
          onPress={() => router.push("/notifications")}
        >
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

        {/* ── Quick Actions Grid (data-driven) ── */}
        {(() => {
          const actions = [
            {
              id: "schedule",
              icon: "calendar",
              iconBg: "rgba(179,197,255,0.1)",
              iconColor: C.primary,
              label: "Schedule Recharge",
            },
            {
              id: "recharge-now",
              icon: "bolt",
              iconBg: "rgba(78,222,163,0.1)",
              iconColor: C.secondary,
              label: "Recharge Now",
            },
            {
              id: "family",
              icon: "group",
              iconBg: "rgba(255,185,95,0.1)",
              iconColor: C.tertiary,
              label: "Family Numbers",
            },
            {
              id: "history",
              icon: "history",
              iconBg: "rgba(194,198,216,0.1)",
              iconColor: C.onSurfaceVariant,
              label: "History",
              route: "/RechargeHistory",
            },
          ];

          return (
            <View style={styles.actionsGrid}>
              {[0, 1].map((row) => (
                <View key={row} style={styles.actionsRow}>
                  {actions.slice(row * 2, row * 2 + 2).map((a) => (
                    <TouchableOpacity
                      key={a.id}
                      style={[styles.glassCard, styles.actionBtn]}
                      activeOpacity={0.8}
                      onPress={() => a.route && router.push(a.route)}
                    >
                      <View
                        style={[
                          styles.actionIconWrap,
                          { backgroundColor: a.iconBg },
                        ]}
                      >
                        <MaterialIcons
                          name={a.icon}
                          size={24}
                          color={a.iconColor}
                        />
                      </View>
                      <Text style={styles.actionLabel}>{a.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
            </View>
          );
        })()}

        {/* ── Upcoming Queue (data-driven) ── */}
        {(() => {
          const queue = [
            {
              id: "pending-1",
              icon: "wifi",
              title: "+91 73445 11280",
              meta: "Feb 24, 10:00 AM • ₹1,299",
              wrapperStyle: styles.queueItemPending,
              badge: {
                text: "PENDING",
                bg: "rgba(179,197,255,0.1)",
                border: "rgba(179,197,255,0.2)",
                color: C.primary,
              },
            },
            {
              id: "completed-1",
              icon: "smartphone",
              title: "+91 99022 55471",
              meta: "Feb 20, 04:30 PM • ₹499",
              wrapperStyle: styles.queueItemCompleted,
              badge: {
                text: "COMPLETED",
                bg: "rgba(78,222,163,0.1)",
                border: "rgba(78,222,163,0.2)",
                color: C.secondary,
              },
            },
            {
              id: "failed-1",
              icon: "router",
              title: "Gifi Router-X821",
              meta: "Feb 18, 09:15 AM • ₹999",
              wrapperStyle: styles.queueItemFailed,
              badge: {
                text: "FAILED",
                bg: "rgba(255,180,171,0.1)",
                border: "rgba(255,180,171,0.2)",
                color: C.error,
              },
            },
          ];

          return (
            <View>
              <View style={styles.queueHeader}>
                <Text style={styles.queueTitle}>Upcoming Queue</Text>
                <TouchableOpacity>
                  <Text style={styles.queueViewAll}>View All</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.queueItems}>
                {queue.map((q) => (
                  <View key={q.id} style={[styles.queueItem, q.wrapperStyle]}>
                    <View style={styles.queueItemLeft}>
                      <View style={styles.queueIconWrap}>
                        <MaterialIcons
                          name={q.icon}
                          size={20}
                          color={C.outline}
                        />
                      </View>
                      <View>
                        <Text style={styles.queueItemName}>{q.title}</Text>
                        <Text style={styles.queueItemMeta}>{q.meta}</Text>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.statusBadge,
                        {
                          backgroundColor: q.badge.bg,
                          borderColor: q.badge.border,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.statusBadgeText,
                          { color: q.badge.color },
                        ]}
                      >
                        {q.badge.text}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          );
        })()}
      </ScrollView>
    </SafeAreaView>
  );
}
