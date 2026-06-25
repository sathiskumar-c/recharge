import { StyleSheet } from "react-native";

const C = {
  background: "#131313",
  surface: "#131313",
  onSurface: "#e5e2e1",
  onSurfaceVariant: "#c5c6d0",
  primary: "#dbe2ff",
  primaryFixed: "#dbe1ff",
  secondary: "#4edea3",
  secondaryFixed: "#6ffbbe",
  secondaryFixedDim: "#4edea3",
  tertiary: "#ffddb8",
  tertiaryFixedDim: "#ffb95f",
  outline: "#8f909a",
  outlineVariant: "#45464f",
  surfaceContainer: "#201f1f",
  surfaceContainerHigh: "#2a2a2a",
  surfaceContainerLowest: "#0e0e0e",
  error: "#ffb4ab",
  border: "rgba(255, 255, 255, 0.08)",
  glowButton: "rgba(0, 85, 213, 0.4)",
  glowPrimary: "rgba(179, 197, 255, 0.4)",
};

const S = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  marginMobile: 20,
};

export const viewPlansStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: C.surfaceContainerLowest,
  },

  // ── Fixed Header ────────────────────────────────────────────────────────
  headerContainer: {
    backgroundColor: "rgba(14, 14, 14, 0.9)",
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    paddingHorizontal: S.marginMobile,
    paddingTop: S.md,
    paddingBottom: S.md,
  },
  topAppBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 56,
    marginBottom: S.sm,
  },
  appBarLeft: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  appBarTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: C.primary,
    letterSpacing: -0.24,
  },
  appBarRight: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: C.surfaceContainer,
    borderWidth: 1,
    borderColor: C.border,
    alignItems: "center",
    justifyContent: "center",
  },

  // ── Context Section ─────────────────────────────────────────────────────
  contextContainer: {
    flexDirection: "column",
    gap: S.sm,
    marginBottom: S.sm,
  },
  numberDisplay: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  numberDisplayLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: S.xs,
  },
  numberDisplayText: {
    fontSize: 14,
    fontWeight: "500",
    color: C.onSurfaceVariant,
  },
  changeButton: {
    fontSize: 14,
    fontWeight: "500",
    color: C.primary,
  },

  // ── Search Field ────────────────────────────────────────────────────────
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: C.surfaceContainer,
    borderWidth: 1,
    borderColor: C.outlineVariant,
    borderRadius: 24,
    paddingHorizontal: S.md,
    height: 40,
    gap: S.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: C.onSurface,
    fontWeight: "400",
  },

  // ── Navigation Tabs ─────────────────────────────────────────────────────
  tabsContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: S.lg,
    paddingHorizontal: 0,
    paddingVertical: S.sm,
    borderBottomWidth: 1,
    borderBottomColor: C.surfaceContainer,
    marginTop: S.sm,
  },
  tab: {
    paddingBottom: S.sm,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
    flexShrink: 0,
  },
  tabActive: {
    borderBottomColor: C.primary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    color: C.onSurfaceVariant,
  },
  tabTextActive: {
    color: C.primary,
  },

  // ── Filter Chips ────────────────────────────────────────────────────────
  chipsContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: S.sm,
    paddingHorizontal: 0,
    paddingVertical: S.md,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: C.outlineVariant,
    backgroundColor: C.surfaceContainer,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    flexShrink: 0,
  },
  chipActive: {
    borderColor: C.primary,
    backgroundColor: "rgba(219, 226, 255, 0.1)",
  },
  chipText: {
    fontSize: 12,
    fontWeight: "500",
    color: C.onSurface,
  },
  chipTextActive: {
    color: C.primary,
  },

  // ── Content Section ─────────────────────────────────────────────────────
  contentContainer: {
    paddingHorizontal: S.marginMobile,
    paddingVertical: S.md,
    paddingBottom: 120,
  },
  plansHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: S.md,
  },
  plansTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: C.onSurface,
    letterSpacing: -0.18,
  },

  // ── Plan Cards ──────────────────────────────────────────────────────────
  planCard: {
    backgroundColor: "rgba(26, 26, 26, 0.7)",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: C.border,
    borderTopWidth: 3,
    borderTopColor: "rgba(219, 226, 255, 0.3)",
    padding: S.lg,
    marginBottom: S.md,
    overflow: "hidden",
    position: "relative",
  },
  planCardGlow: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 128,
    height: 128,
    borderRadius: 128,
    backgroundColor: "rgba(179, 197, 255, 0.1)",
    opacity: 0.6,
  },
  planCardHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: S.md,
  },
  planCardHeaderRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: S.md,
    gap: S.sm,
  },
  planCardHeaderLeft: {
    flex: 1,
  },
  planCardHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: S.sm,
  },
  labelBox: {
    paddingHorizontal: S.sm,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "rgba(78, 222, 163, 0.15)",
    borderWidth: 1,
    borderColor: "rgba(78, 222, 163, 0.2)",
  },
  labelBoxText: {
    fontSize: 10,
    fontWeight: "700",
    color: C.onSurfaceVariant,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  true5gTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: "rgba(78, 222, 163, 0.2)",
    borderWidth: 1,
    borderColor: "rgba(78, 222, 163, 0.3)",
  },
  true5gTagText: {
    fontSize: 10,
    fontWeight: "700",
    color: C.secondary,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  recommendedBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: "rgba(78, 222, 163, 0.2)",
    borderWidth: 1,
    borderColor: "rgba(78, 222, 163, 0.3)",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  recommendedBadgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: C.secondary,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  recommendedDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: C.secondary,
  },

  // ── Plan Price & Details ───────────────────────────────────────────────
  planPriceSection: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: S.md,
  },
  priceContainer: {
    flexDirection: "column",
  },
  price: {
    fontSize: 28,
    fontWeight: "700",
    color: C.primary,
    letterSpacing: -0.28,
  },
  priceDescription: {
    fontSize: 16,
    fontWeight: "400",
    color: C.onSurfaceVariant,
  },
  detailsGrid: {
    flexDirection: "row",
    gap: S.sm,
    marginBottom: S.md,
  },
  detailColumn: {
    flex: 1,
    paddingVertical: S.sm,
  },
  detailColumnWithBorder: {
    borderLeftWidth: 1,
    borderLeftColor: C.border,
    paddingLeft: S.sm,
  },
  detailLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: C.onSurfaceVariant,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    marginBottom: 2,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: "700",
    color: C.onSurface,
  },
  detailValueHighlight: {
    color: C.secondary,
  },

  // ── Benefits Section ────────────────────────────────────────────────────
  benefitsContainer: {
    flexDirection: "column",
    gap: S.sm,
    marginBottom: S.md,
  },
  benefitsLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: C.onSurfaceVariant,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  benefitsIcons: {
    flexDirection: "row",
    gap: S.sm,
    alignItems: "center",
  },
  benefitIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: C.surfaceContainerHigh,
    borderWidth: 1,
    borderColor: C.border,
    alignItems: "center",
    justifyContent: "center",
  },
  benefitsMore: {
    fontSize: 10,
    fontWeight: "700",
    color: C.onSurfaceVariant,
  },

  // ── Service Icons Section ───────────────────────────────────────────────
  serviceIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: S.md,
    borderTopWidth: 1,
    borderTopColor: C.border,
    marginTop: S.md,
  },
  serviceIconsContainerWithButton: {
    justifyContent: "space-between",
  },
  serviceIconsGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: S.xs,
  },
  serviceIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: C.surfaceContainer,
    borderWidth: 1,
    borderColor: C.outlineVariant,
    alignItems: "center",
    justifyContent: "center",
  },
  serviceIconsMore: {
    fontSize: 10,
    fontWeight: "700",
    color: C.onSurfaceVariant,
    marginLeft: S.xs,
  },

  // ── Action Buttons ──────────────────────────────────────────────────────
  rechargeButton: {
    backgroundColor: C.primary,
    paddingVertical: 12,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: S.sm,
    marginTop: S.md,
    width: "100%",
  },
  rechargeButtonInline: {
    backgroundColor: "transparent",
    paddingVertical: 6,
    paddingHorizontal: S.sm,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    borderWidth: 1,
    borderColor: C.primary,
  },
  rechargeButtonInlineText: {
    fontSize: 12,
    fontWeight: "700",
    color: C.primary,
    textTransform: "capitalize",
  },
  rechargeBorderVariant: {
    paddingVertical: 12,
    paddingHorizontal: S.md,
    borderRadius: 5,
  },
  rechargeButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1b2e5e",
    textTransform: "capitalize",
  },
  rechargeButtonTextSmall: {
    fontSize: 12,
    fontWeight: "700",
  },

  // ── Shared ──────────────────────────────────────────────────────────────
  scrollContent: {
    paddingTop: S.md,
  },
  iconSmall: {
    fontSize: 14,
  },

  // ── New Card Design Styles ──────────────────────────────────────────────
  newCardHeaderRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: S.md,
    gap: S.sm,
    zIndex: 10,
  },
  newCardHeaderLeft: {
    // don't force full width so label boxes size to content
    flexShrink: 1,
  },
  newCardHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: S.sm,
  },

  // Price Section
  newPriceSection: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: S.md,
    zIndex: 10,
  },
  newPrice: {
    fontSize: 28,
    fontWeight: "700",
    color: C.primary,
    letterSpacing: -0.28,
  },
  newDetailsRight: {
    flexDirection: "row",
    gap: S.lg,
    alignItems: "flex-start",
  },
  newDetailLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: C.onSurfaceVariant,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    marginBottom: 2,
  },
  newDetailValue: {
    fontSize: 14,
    fontWeight: "600",
    color: C.onSurface,
  },

  // Benefits Section
  newBenefitsSection: {
    flexDirection: "column",
    gap: S.sm,
    marginBottom: S.md,
    zIndex: 10,
  },
  newBenefitsLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: C.onSurfaceVariant,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  newBenefitsIcons: {
    flexDirection: "row",
    gap: S.sm,
    alignItems: "center",
  },
  newBenefitIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: C.surfaceContainerHigh,
    borderWidth: 1,
    borderColor: C.border,
    alignItems: "center",
    justifyContent: "center",
  },
  newBenefitsMore: {
    fontSize: 10,
    fontWeight: "700",
    color: C.onSurfaceVariant,
  },

  // Service Icons Row
  newServiceIconsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: S.md,
    borderTopWidth: 1,
    borderTopColor: C.border,
    marginTop: S.md,
    zIndex: 10,
  },
  newServiceIconsGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: S.xs,
  },
  newServiceIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: C.surfaceContainer,
    borderWidth: 1,
    borderColor: C.outlineVariant,
    alignItems: "center",
    justifyContent: "center",
  },
  newServiceIconsMore: {
    fontSize: 10,
    fontWeight: "700",
    color: C.onSurfaceVariant,
    marginLeft: S.xs,
  },

  // Recharge Buttons
  newRechargeButtonInline: {
    backgroundColor: C.primary,
    paddingVertical: 8,
    paddingHorizontal: S.md,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  newRechargeButtonInlineText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#1b2e5e",
    textTransform: "capitalize",
  },
  newRechargeButtonFull: {
    backgroundColor: C.primary,
    paddingVertical: 12,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: S.sm,
    marginTop: S.md,
    width: "100%",
    zIndex: 10,
  },

  newRechargeButtonFullText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1b2e5e",
    textTransform: "capitalize",
  },
});

export { C, S };

