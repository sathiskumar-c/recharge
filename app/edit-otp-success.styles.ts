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
};

export const S = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  marginMobile: 20,
};

export const editOtpSuccessStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: C.background,
  },

  // ── Center Content Container ──────────────────────────────────────────
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: S.marginMobile,
    paddingVertical: S.xl,
  },

  // ── Glow Background Circle ────────────────────────────────────────────
  glowCircle: {
    position: "absolute",
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: "rgba(78, 222, 163, 0.1)",
    alignSelf: "center",
  },

  // ── Main Content Wrapper ─────────────────────────────────────────────
  contentWrapper: {
    alignItems: "center",
    gap: S.xl,
    zIndex: 10,
    maxWidth: 300,
  },

  // ── Icon Container with Rings ────────────────────────────────────────
  iconContainer: {
    position: "relative",
    width: 140,
    height: 140,
    alignItems: "center",
    justifyContent: "center",
  },

  // ── Outer Ring (largest) ─────────────────────────────────────────────
  ring2: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: "rgba(78, 222, 163, 0.15)",
  },

  // ── Middle Ring ──────────────────────────────────────────────────────
  ring1: {
    position: "absolute",
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 1,
    borderColor: "rgba(78, 222, 163, 0.25)",
  },

  // ── Icon Badge (inner circle) ────────────────────────────────────────
  iconBadge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(78, 222, 163, 0.15)",
    borderWidth: 2,
    borderColor: "#4edea3",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#4edea3",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 24,
    elevation: 12,
  },

  // ── Text Content ──────────────────────────────────────────────────────
  textContainer: {
    alignItems: "center",
    gap: S.md,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: C.onSurface,
    letterSpacing: -0.64,
    textAlign: "center",
    lineHeight: 40,
  },

  description: {
    fontSize: 16,
    fontWeight: "400",
    color: C.onSurfaceVariant,
    textAlign: "center",
    lineHeight: 24,
  },

  // ── Button ────────────────────────────────────────────────────────────
  buttonContainer: {
    width: "100%",
    marginTop: S.lg,
  },

  button: {
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

  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1b2e5e",
    letterSpacing: -0.32,
  },
});
