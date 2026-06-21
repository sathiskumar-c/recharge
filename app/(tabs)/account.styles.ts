import { StyleSheet } from "react-native";
import { C, S } from "./index.styles";

export const accountStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: C.background,
  },

  // ── Header ──────────────────────────────────────────────────────────────
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: S.marginMobile,
    paddingVertical: S.md,
    backgroundColor: "rgba(26, 26, 26, 0.7)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.08)",
    height: 64,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: S.md,
  },
  appLogo: {
    fontSize: 20,
    fontWeight: "700",
    color: C.primary,
    letterSpacing: -0.4,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(179, 197, 255, 0.2)",
    overflow: "hidden",
  },

  // ── Scroll Content ───────────────────────────────────────────────────────
  scrollContent: {
    paddingHorizontal: S.marginMobile,
    paddingTop: S.xl,
    paddingBottom: 120,
    gap: S.xl,
  },

  // ── Profile Header ───────────────────────────────────────────────────────
  profileSection: {
    alignItems: "center",
    gap: S.md,
  },
  profileAvatarWrap: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  profileGlow: {
    position: "absolute",
    width: 108,
    height: 108,
    borderRadius: 54,
    backgroundColor: "rgba(78, 222, 163, 0.1)",
  },
  profileAvatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 2,
    borderColor: C.secondary,
    overflow: "hidden",
  },
  editButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: C.secondary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: C.background,
  },
  profileName: {
    fontSize: 28,
    fontWeight: "700",
    color: C.onSurface,
    lineHeight: 36,
    letterSpacing: -0.28,
  },
  profilePhone: {
    fontSize: 14,
    fontWeight: "500",
    color: C.outline,
    marginTop: 2,
  },

  // ── Wallet Card ──────────────────────────────────────────────────────────
  walletCard: {
    backgroundColor: "rgba(26, 26, 26, 0.7)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
    borderTopWidth: 1,
    borderTopColor: "rgba(179, 197, 255, 0.15)",
    borderRadius: 12,
    padding: S.lg,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
  walletGlow: {
    position: "absolute",
    right: -40,
    top: -40,
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: "rgba(78, 222, 163, 0.1)",
  },
  walletLeft: {
    gap: S.sm,
    zIndex: 1,
  },
  walletLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: C.outline,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  walletBalance: {
    fontSize: 32,
    fontWeight: "700",
    color: C.secondary,
    lineHeight: 40,
    letterSpacing: -0.32,
  },
  topUpButton: {
    backgroundColor: C.secondary,
    paddingHorizontal: S.lg,
    paddingVertical: S.sm,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: S.sm,
    zIndex: 1,
  },
  topUpText: {
    fontSize: 14,
    fontWeight: "600",
    color: C.background,
  },

  // ── Section Headers ──────────────────────────────────────────────────────
  sectionTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: C.outline,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    paddingHorizontal: S.sm,
    marginBottom: S.sm,
  },

  // ── Menu Card ────────────────────────────────────────────────────────────
  menuCard: {
    backgroundColor: "rgba(26, 26, 26, 0.7)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: 12,
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: S.md,
    paddingVertical: S.md,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.08)",
  },
  menuItemLast: {
    borderBottomWidth: 0,
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: S.md,
    flex: 1,
  },
  menuItemIcon: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  menuItemContent: {
    flex: 1,
  },
  menuItemTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: C.onSurface,
  },
  menuItemSubtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: C.outline,
    marginTop: 2,
  },
  menuItemBadge: {
    fontSize: 12,
    fontWeight: "600",
    color: C.secondary,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },

  // ── Toggle Switch ────────────────────────────────────────────────────────
  toggleSwitch: {
    width: 40,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 2,
    justifyContent: "center",
  },
  toggleSwitchOn: {
    backgroundColor: "rgba(78, 222, 163, 0.2)",
    borderColor: "rgba(78, 222, 163, 0.3)",
  },
  toggleSwitchOff: {
    backgroundColor: "rgba(143, 144, 154, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.08)",
  },
  toggleThumb: {
    width: 16,
    height: 16,
    borderRadius: 8,
    shadowColor: "rgba(78, 222, 163, 0.8)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 5,
  },
  toggleThumbOn: {
    backgroundColor: C.secondary,
    alignSelf: "flex-end",
  },
  toggleThumbOff: {
    backgroundColor: C.outline,
    alignSelf: "flex-start",
  },

  // ── Add Button ───────────────────────────────────────────────────────────
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: S.sm,
    paddingHorizontal: S.md,
    paddingVertical: S.md,
    color: C.primary,
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: C.primary,
  },

  // ── Logout Section ───────────────────────────────────────────────────────
  logoutSection: {
    alignItems: "center",
    paddingVertical: S.xl,
    gap: S.md,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: S.sm,
  },
  logoutText: {
    fontSize: 14,
    fontWeight: "500",
    color: C.error,
  },
  versionText: {
    fontSize: 12,
    fontWeight: "400",
    color: C.outline,
  },
});
