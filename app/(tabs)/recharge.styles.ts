import { StyleSheet } from "react-native";

const C = {
  background: "#131313",
  surface: "#131313",
  onSurface: "#e5e2e1",
  primary: "#dbe2ff",
  secondary: "#4edea3",
  outline: "#8f909a",
  outlineVariant: "#45464f",
  surfaceContainer: "#201f1f",
  surfaceContainerHigh: "#2a2a2a",
  surfaceContainerLow: "#1c1b1b",
  error: "#ffb4ab",
  border: "rgba(255, 255, 255, 0.08)",
  tertiary: "#ffddb8",
};

const S = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  marginMobile: 20,
};

export const scheduleStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: C.background,
  },
  scrollContent: {
    paddingHorizontal: S.marginMobile,
    paddingTop: S.lg,
    paddingBottom: 120,
  },

  // ── Header ──────────────────────────────────────────────────────────────
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 56,
    paddingHorizontal: S.marginMobile,
    backgroundColor: "rgba(26, 26, 26, 0.7)",
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: C.primary,
    letterSpacing: -0.24,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerPlaceholder: {
    width: 40,
  },

  // ── Search Section ──────────────────────────────────────────────────────
  searchSection: {
    alignItems: "center",
    gap: S.md,
    marginVertical: S.lg,
  },
  searchContainer: {
    width: "100%",
    maxWidth: 320,
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    backgroundColor: "rgba(28, 27, 27, 0.6)",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: C.border,
    paddingHorizontal: S.md,
    gap: S.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: C.onSurface,
    fontWeight: "400",
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: C.border,
  },
  searchHelper: {
    fontSize: 10,
    fontWeight: "700",
    color: C.outline,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },

  // ── Recent Recharges ────────────────────────────────────────────────────
  sectionTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: C.outline,
    letterSpacing: 0.14,
    marginHorizontal: S.sm,
    marginBottom: S.md,
    flexDirection: "row",
    alignItems: "center",
    gap: S.xs,
  },
  recentScroll: {
    gap: S.md,
    paddingHorizontal: S.sm,
    marginBottom: S.lg,
  },
  recentItem: {
    width: 140,
    backgroundColor: "rgba(26, 26, 26, 0.7)",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: C.border,
    padding: S.md,
    alignItems: "center",
    gap: S.sm,
    overflow: "hidden",
  },
  recentItemGlow: {
    position: "absolute",
    width: 64,
    height: 64,
    borderRadius: 32,
    top: 0,
    right: 0,
    opacity: 0.1,
    filter: "blur(24px)",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: C.border,
    backgroundColor: C.surfaceContainerHigh,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: S.xs,
  },
  avatarText: {
    fontSize: 18,
    fontWeight: "700",
    color: C.primary,
  },
  recentName: {
    fontSize: 12,
    fontWeight: "500",
    color: C.onSurface,
    textAlign: "center",
  },
  recentSubtitle: {
    fontSize: 12,
    fontWeight: "400",
    color: C.outline,
  },

  // ── My Number Section ───────────────────────────────────────────────────
  myNumberContainer: {
    backgroundColor: "rgba(26, 26, 26, 0.7)",
    borderRadius: 12,
    borderWidth: 1,
    borderTopWidth: 1,
    borderTopColor: "rgba(219, 226, 255, 0.2)",
    borderColor: C.border,
    padding: S.md,
    marginBottom: S.lg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  myNumberContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: S.md,
    flex: 1,
  },
  myNumberAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: C.border,
    backgroundColor: C.surfaceContainerHigh,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  myNumberText: {
    fontSize: 16,
    fontWeight: "500",
    color: C.onSurface,
  },
  myNumberPhone: {
    fontSize: 12,
    fontWeight: "400",
    color: C.outline,
  },
  myNumberBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: "rgba(78, 222, 163, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(78, 222, 163, 0.2)",
  },
  myNumberBadgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: C.secondary,
    letterSpacing: 0.5,
  },

  // ── Contacts Section ────────────────────────────────────────────────────
  contactsContainer: {
    backgroundColor: "rgba(26, 26, 26, 0.7)",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: C.border,
    overflow: "hidden",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: S.md,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  contactItemLast: {
    borderBottomWidth: 0,
  },
  contactLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: S.md,
    flex: 1,
  },
  contactAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: C.surfaceContainerHigh,
    borderWidth: 1,
    borderColor: C.border,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  contactAvatarText: {
    fontSize: 16,
    fontWeight: "700",
    color: C.primary,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: "500",
    color: C.onSurface,
  },
  contactPhone: {
    fontSize: 12,
    fontWeight: "400",
    color: C.outline,
  },
});

export { C, S };

