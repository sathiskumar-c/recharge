import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { C, S } from "./(tabs)/index.styles";

export default function SupportScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconBtn}>
          <MaterialIcons name="arrow-back" size={22} color={C.onSurface} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Support Center</Text>
        <TouchableOpacity style={styles.iconBtn}>
          <MaterialIcons name="more-vert" size={22} color={C.outline} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.contentArea}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.searchContainer}>
          <MaterialIcons
            name="search"
            size={20}
            color={C.outline}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search FAQs or issues..."
            placeholderTextColor={C.outline}
            style={styles.searchInput}
          />
        </View>

        <View>
          <Text style={styles.sectionTitle}>Topics</Text>
          <View style={styles.categoryList}>
            {[
              {
                key: "payments",
                title: "Payments",
                count: "12 Articles",
                icon: "payments",
              },
              {
                key: "account",
                title: "My Account",
                count: "8 Articles",
                icon: "person",
              },
              {
                key: "recharge",
                title: "Recharge Issues",
                count: "24 Articles",
                icon: "bolt",
              },
              {
                key: "tech",
                title: "Technical Help",
                count: "15 Articles",
                icon: "build",
              },
            ].map((t) => (
              <TouchableOpacity
                key={t.key}
                style={styles.catItem}
                activeOpacity={0.8}
              >
                <View style={styles.catIconWrapper}>
                  <MaterialIcons
                    name={t.icon as any}
                    size={20}
                    color={C.primary}
                  />
                </View>
                <View style={styles.catContent}>
                  <Text style={styles.catTitle}>{t.title}</Text>
                  <Text style={styles.catCount}>{t.count}</Text>
                </View>
                <MaterialIcons name="chevron-right" size={20} color="#45464f" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View>
          <Text style={styles.sectionTitle}>Top Questions</Text>
          <View style={styles.faqList}>
            {[
              "Why did my recharge fail?",
              "How to top up my wallet?",
              "Where is my transaction receipt?",
              "Can I cancel a scheduled payment?",
            ].map((q, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.faqItem}
                activeOpacity={0.8}
              >
                <Text style={styles.faqQ}>{q}</Text>
                <MaterialIcons name="expand-more" size={20} color={C.outline} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View>
          <Text style={styles.sectionTitle}>More Ways to Connect</Text>
          <View style={{ gap: S.sm }}>
            <View style={[styles.catItem, { borderRadius: 8 }]}>
              <View style={[styles.catIconWrapper, { borderRadius: 8 }]}>
                <MaterialIcons name="mail" size={20} color={C.primary} />
              </View>
              <View style={styles.catContent}>
                <Text style={styles.catTitle}>Email Us</Text>
                <Text style={[styles.catCount, { color: C.primary }]}>
                  support@autocharge.pro
                </Text>
              </View>
            </View>
            <View style={[styles.catItem, { borderRadius: 8 }]}>
              <View style={[styles.catIconWrapper, { borderRadius: 8 }]}>
                <MaterialIcons name="call" size={20} color={C.primary} />
              </View>
              <View style={styles.catContent}>
                <Text style={styles.catTitle}>Call Us</Text>
                <Text style={[styles.catCount, { color: C.primary }]}>
                  +1 (800) AUTO-CHG
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.liveChatCard}>
            <View style={styles.liveChatAccent} />
            <View style={styles.chatContentWrapper}>
              <View style={styles.chatIcon}>
                <MaterialIcons
                  name="support-agent"
                  size={20}
                  color={C.primary}
                />
              </View>
              <View style={styles.chatInfo}>
                <Text style={styles.chatTitle}>Live Chat</Text>
                <Text style={styles.chatBody}>
                  Get instant help from our premium support team, available
                  24/7.
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.chatBtn} activeOpacity={0.9}>
              <Text style={styles.chatBtnText}>Start Conversation</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.background },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: S.md,
    backgroundColor: C.background,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  iconBtn: { padding: 8 },
  headerTitle: { fontSize: 20, fontWeight: "700", color: C.onSurface },
  contentArea: { padding: 24, gap: 40 },
  searchContainer: { position: "relative" },
  searchInput: {
    width: "100%",
    paddingVertical: 14,
    paddingLeft: 48,
    paddingRight: 16,
    backgroundColor: "#1c1b1b",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: C.border,
    color: C.onSurface,
    fontSize: 16,
  },
  searchIcon: { position: "absolute", left: 16, top: 12 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: C.onSurface,
    marginBottom: 12,
  },
  categoryList: { gap: 12 },
  catItem: {
    backgroundColor: "#1c1b1b",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  catIconWrapper: {
    backgroundColor: C.background,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  catContent: { flex: 1 },
  catTitle: { fontSize: 16, fontWeight: "600", color: C.onSurface },
  catCount: { fontSize: 14, color: C.outline },
  faqList: { gap: 12 },
  faqItem: {
    backgroundColor: "#1c1b1b",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
    borderRadius: 16,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  faqQ: { fontSize: 15, fontWeight: "500", color: C.onSurface },
  liveChatCard: {
    backgroundColor: "#1c1b1b",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    borderRadius: 16,
    padding: 16,
    paddingTop: 24,
    paddingBottom: 24,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
    overflow: "hidden",
    marginBottom: 20,
  },
  liveChatAccent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: C.primary,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  chatContentWrapper: { flexDirection: "row", alignItems: "center", gap: 12 },
  chatIcon: {
    backgroundColor: "rgba(179,197,255,0.07)",
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  chatInfo: {},
  chatTitle: { fontSize: 20, fontWeight: "700", color: "#dbe2ff" },
  chatBody: { fontSize: 15, color: C.outline, marginTop: 4 },
  chatBtn: {
    backgroundColor: C.primary,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 5,
    marginTop: 12,
    width: "100%",
    alignItems: "center",
  },
  chatBtnText: { color: "#011849", fontWeight: "700", fontSize: 16 },
});
