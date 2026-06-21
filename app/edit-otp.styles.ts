import { StyleSheet } from "react-native";

export const C = {
  background: "#0A0A0A",
  surface: "#131313",
  surfaceContainer: "#201f1f",
  onSurface: "#e5e2e1",
  onSurfaceVariant: "#c2c6d8",
  primary: "#b3c5ff",
  secondary: "#4edea3",
  outline: "#8c90a1",
  outlineVariant: "#45464f",
  error: "#ffb4ab",
};

export const S = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  marginMobile: 20,
};

export const editOtpStyles = StyleSheet.create({
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
    paddingVertical: S.sm,
    backgroundColor: "rgba(20, 20, 20, 0.8)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
    height: 64,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: C.onSurface,
    letterSpacing: -0.36,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(179, 197, 255, 0.2)",
    overflow: "hidden",
  },

  // ── Center Modal Container ──────────────────────────────────────────────
  centerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: S.marginMobile,
    paddingBottom: S.xl,
  },

  // ── Glass Panel ──────────────────────────────────────────────────────────
  glassPanel: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "rgba(26, 26, 26, 0.7)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
    borderTopColor: "rgba(179, 197, 255, 0.2)",
    borderRadius: 32,
    padding: S.xl,
    gap: S.xl,
  },

  // ── Header Section ───────────────────────────────────────────────────────
  headerSection: {
    alignItems: "center",
    gap: S.md,
  },
  iconBadge: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: "rgba(179, 197, 255, 0.2)",
    borderWidth: 1,
    borderColor: "rgba(179, 197, 255, 0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: C.onSurface,
    lineHeight: 36,
    letterSpacing: -0.56,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: C.onSurfaceVariant,
    lineHeight: 24,
    textAlign: "center",
  },

  // ── OTP Input Container ──────────────────────────────────────────────────
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    width: "100%",
  },
  otpBox: {
    flex: 1,
    height: 56,
    borderRadius: 12,
    backgroundColor: C.background,
    borderWidth: 1,
    borderColor: C.outlineVariant,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    fontWeight: "700",
    color: C.primary,
    textAlign: "center",
  },
  otpBoxFocused: {
    borderColor: C.primary,
    shadowColor: C.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 5,
  },

  // ── Action Section ───────────────────────────────────────────────────────
  actionSection: {
    gap: S.md,
  },
  errorMessage: {
    fontSize: 12,
    fontWeight: "600",
    color: C.error,
    textAlign: "center",
  },
  verifyButton: {
    height: 56,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: S.sm,
    shadowColor: "rgba(0, 85, 213, 0.4)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 8,
  },
  verifyButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1b2e5e",
    letterSpacing: -0.32,
    textTransform: "uppercase",
  },
  resendContainer: {
    alignItems: "center",
    gap: S.xs,
  },
  resendText: {
    fontSize: 14,
    fontWeight: "400",
    color: C.onSurfaceVariant,
  },
  resendButton: {
    fontSize: 14,
    fontWeight: "700",
    color: C.secondary,
  },

  // ── Security Tip Banner ──────────────────────────────────────────────────
  securityBanner: {
    backgroundColor: "rgba(78, 222, 163, 0.05)",
    borderLeftWidth: 2,
    borderLeftColor: C.secondary,
    borderRadius: 12,
    padding: S.md,
    flexDirection: "row",
    gap: S.md,
  },
  securityIconWrap: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  securityText: {
    fontSize: 12,
    fontWeight: "400",
    color: C.onSurfaceVariant,
    lineHeight: 18,
    flex: 1,
  },

  // ── Footer Text ──────────────────────────────────────────────────────────
  footerText: {
    fontSize: 10,
    fontWeight: "700",
    color: C.outline,
    letterSpacing: 0.2,
    textTransform: "uppercase",
    textAlign: "center",
    opacity: 0.5,
    position: "absolute",
    bottom: S.lg,
    left: 0,
    right: 0,
  },
});
