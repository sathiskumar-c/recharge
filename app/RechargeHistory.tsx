import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  getStatusKeys,
  RECHARGE_DATA,
  RechargeEntry,
} from "./data/rechargeHistory";
import { styles, stylesVars } from "./recharge-history.styles";

function isSameDay(d1: Date, d2: Date) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

function getGroupLabel(dateStr: string) {
  const d = new Date(dateStr);
  const now = new Date();
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
  if (isSameDay(d, now)) return "Today";
  if (isSameDay(d, yesterday)) return "Yesterday";
  return d.toLocaleDateString();
}

const statusLabelMap: Record<string, string> = {
  success: "Successful",
  pending: "Pending",
  failed: "Failed",
};

const RechargeHistory: React.FC = () => {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const statusKeys = useMemo(() => getStatusKeys(), []);

  const groups = useMemo(() => {
    const filtered = RECHARGE_DATA.filter((r: RechargeEntry) => {
      if (activeFilter !== "all" && r.status !== (activeFilter as any))
        return false;
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        r.operator.toLowerCase().includes(q) ||
        r.number.toLowerCase().includes(q) ||
        (r.plan || "").toLowerCase().includes(q)
      );
    });

    const map = new Map<string, RechargeEntry[]>();
    filtered.forEach((r) => {
      const label = getGroupLabel(r.date);
      const arr = map.get(label) || [];
      arr.push(r);
      map.set(label, arr);
    });
    return Array.from(map.entries());
  }, [query, activeFilter]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topAppBar}>
        <View style={styles.topAppBarInner}>
          <View style={styles.appTitleContainer}>
            <Text style={styles.icon}>⚡</Text>
            <Text style={styles.fontHeadlineMd}>AutoCharge</Text>
          </View>
          <View style={styles.userAvatar}>
            <Text style={styles.icon}>👤</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.mainContent}>
        <View style={[styles.sectionHeader, { paddingBottom: 5 }]}>
          <View>
            <Text style={styles.fontHeadlineLgMobile}>Transaction History</Text>
            <Text style={[styles.fontLabelMd, styles.sectionSubtitle]}>
              Review your past recharges and bill payments.
            </Text>
          </View>

          <View style={styles.searchContainer}>
            <View style={styles.searchIconWrapper}>
              <Text style={styles.searchIcon}>🔍</Text>
            </View>
            <TextInput
              style={styles.glassInput}
              placeholder="Search by number or name..."
              placeholderTextColor={stylesVars.onSurfaceVariant}
              value={query}
              onChangeText={setQuery}
            />
          </View>

          <View style={styles.filterChips}>
            <TouchableOpacity
              style={[
                styles.chip,
                activeFilter === "all"
                  ? styles.chipActive
                  : styles.chipInactive,
              ]}
              onPress={() => setActiveFilter("all")}
            >
              <Text
                style={[
                  styles.fontLabelMd,
                  activeFilter === "all" ? styles.chipActiveText : null,
                ]}
              >
                All Transactions
              </Text>
            </TouchableOpacity>
            {statusKeys.map((key) => (
              <TouchableOpacity
                key={key}
                style={[
                  styles.chip,
                  activeFilter === key
                    ? styles.chipActive
                    : styles.chipInactive,
                ]}
                onPress={() => setActiveFilter(key)}
              >
                <Text
                  style={[
                    styles.fontLabelMd,
                    activeFilter === key ? styles.chipActiveText : null,
                  ]}
                >
                  {statusLabelMap[key] || key}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.transactionListSection}>
          {groups.map(([groupName, items]) => (
            <View key={groupName}>
              <Text style={[styles.fontLabelMd, styles.dateHeader]}>
                {groupName}
              </Text>
              {items.map((r) => (
                <View
                  key={r.id}
                  style={[
                    styles.glassCard,
                    r.status === "success"
                      ? styles.cardHighlightTop
                      : r.status === "pending"
                        ? styles.cardBorderLTertiary
                        : styles.cardBorderLError,
                  ]}
                >
                  {r.status === "success" && (
                    <View
                      style={[styles.cardBgGradient, styles.bgGradientSuccess]}
                    />
                  )}
                  {r.status === "pending" && (
                    <View
                      style={[styles.cardBgGradient, styles.bgGradientPending]}
                    />
                  )}

                  <View style={styles.cardRow}>
                    <View style={styles.entityInfo}>
                      <View style={[styles.entityLogo, styles.logoShadow]}>
                        <Text style={styles.fontDataBold}>
                          {r.operator.substring(0, 2)}
                        </Text>
                      </View>
                      <View style={styles.entityText}>
                        <Text style={[styles.fontLabelMd, styles.entityName]}>
                          {r.operator}
                        </Text>
                        <Text style={[styles.fontLabelSm, styles.entitySub]}>
                          {r.number}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.amountInfo}>
                      <Text style={styles.fontDataBold}>{r.amount}</Text>
                      <Text style={styles.fontCaptionXs}>
                        {new Date(r.date).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={[
                      styles.cardRow,
                      styles.cardRowCenter,
                      styles.cardRowPtSm,
                    ]}
                  >
                    <View
                      style={[
                        styles.statusBadge,
                        r.status === "success"
                          ? styles.statusSuccess
                          : r.status === "pending"
                            ? styles.statusPending
                            : styles.statusFailed,
                      ]}
                    >
                      <View
                        style={[
                          styles.statusDot,
                          r.status === "success"
                            ? styles.statusDotSuccess
                            : r.status === "pending"
                              ? styles.statusDotPending
                              : styles.statusDotFailed,
                        ]}
                      />
                      <Text
                        style={[
                          styles.fontCaptionXs,
                          r.status === "success"
                            ? styles.statusTextSuccess
                            : r.status === "pending"
                              ? styles.statusTextPending
                              : styles.statusTextFailed,
                        ]}
                      >
                        {r.status === "pending"
                          ? "Processing"
                          : statusLabelMap[r.status] || r.status}
                      </Text>
                    </View>
                    <TouchableOpacity style={styles.actionBtn}>
                      <Text style={styles.fontLabelSm}>
                        {r.status === "failed" ? "Retry" : "Details"}
                      </Text>
                      <Text style={styles.actionIcon}>
                        {r.status === "failed" ? "↻" : "›"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          ))}

          <View style={styles.loadMoreContainer}>
            <TouchableOpacity style={styles.btnLoadMore}>
              <Text style={styles.fontLabelMd}>Load More Transactions</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RechargeHistory;
