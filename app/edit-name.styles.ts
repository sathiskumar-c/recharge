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

export const editNameStyles = StyleSheet.create({
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
    color: C.primary,
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

  // ── Scroll Content ───────────────────────────────────────────────────────
  scrollContent: {
    paddingHorizontal: S.marginMobile,
    paddingTop: S.xl,
    paddingBottom: 140,
    gap: S.xl,
  },

  // ── Form Section ─────────────────────────────────────────────────────────
  formSection: {
    gap: S.sm,
  },
  label: {
    fontSize: 12,
    fontWeight: "500",
    color: C.onSurfaceVariant,
    letterSpacing: 0.24,
    paddingHorizontal: S.sm,
  },
  inputWrapper: {
    position: "relative",
  },
  input: {
    height: 56,
    paddingHorizontal: S.md,
    paddingRight: 48,
    fontSize: 16,
    fontWeight: "400",
    color: C.onSurface,
    backgroundColor: C.background,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
    transitionDuration: 300,
  },
  inputFocused: {
    borderColor: C.primary,
    shadowColor: C.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
  },
  inputIcon: {
    position: "absolute",
    right: S.md,
    top: 0,
    bottom: 0,
    justifyContent: "center",
  },
  helperText: {
    fontSize: 10,
    fontWeight: "700",
    color: C.outline,
    letterSpacing: 0.5,
    paddingHorizontal: S.sm,
    opacity: 0.6,
  },
  errorText: {
    fontSize: 10,
    fontWeight: "700",
    color: C.error,
    letterSpacing: 0.5,
    paddingHorizontal: S.sm,
  },

  // ── Insight Banner ───────────────────────────────────────────────────────
  insightBanner: {
    backgroundColor: "rgba(26, 26, 26, 0.7)",
    borderLeftWidth: 2,
    borderLeftColor: C.secondary,
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.08)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.08)",
    borderRightWidth: 1,
    borderRightColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: 12,
    padding: S.md,
    flexDirection: "row",
    gap: S.md,
  },
  insightIconWrap: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    marginTop: S.sm,
  },
  insightContent: {
    flex: 1,
    gap: S.xs,
  },
  insightTitle: {
    fontSize: 12,
    fontWeight: "500",
    color: C.secondary,
    letterSpacing: 0.24,
  },
  insightBody: {
    fontSize: 14,
    fontWeight: "400",
    color: C.onSurfaceVariant,
    lineHeight: 20,
  },

  // ── Action Footer ────────────────────────────────────────────────────────
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: S.marginMobile,
    paddingBottom: S.xl,
    paddingTop: S.lg,
    backgroundColor: "rgba(13, 13, 13, 0.9)",
  },
  saveButton: {
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
  saveButtonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1b2e5e",
    letterSpacing: -0.36,
  },
  saveButtonDisabled: {
    opacity: 0.5,
    shadowOpacity: 0,
    elevation: 0,
  },
  saveButtonTextDisabled: {
    color: "#8c90a1",
  },
});
