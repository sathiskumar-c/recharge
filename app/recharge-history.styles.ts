import { Dimensions, Platform, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const stylesVars = {
  background: "#131313",
  onBackground: "#e5e2e1",
  primary: "#dbe2ff",
  primaryFixed: "#dbe1ff",
  primaryContainer: "#b3c5ff",
  onPrimaryContainer: "#3f5183",
  surfaceGlass: "rgba(26,26,26,0.7)",
  borderWhiteLow: "rgba(255,255,255,0.08)",
  surfaceContainerHigh: "#2a2a2a",
  onSurfaceVariant: "#c5c6d0",
  surfaceContainerLowest: "#0e0e0e",
  surfaceVariant: "#353534",
  surfaceContainerHighest: "#353534",
  secondary: "#4edea3",
  tertiary: "#ffddb8",
  error: "#ffb4ab",
  glowPrimary: "rgba(179,197,255,0.4)",
  glowSuccess: "rgba(78,222,163,0.2)",
  glowPending: "rgba(255,185,95,0.2)",
  glowFailed: "rgba(255,180,171,0.2)",
  spacingXs: 4,
  spacingSm: 8,
  spacingMd: 16,
  spacingLg: 24,
  spacingXl: 32,
  marginMobile: 20,
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: stylesVars.background,
  },
  topAppBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: stylesVars.surfaceGlass,
    borderBottomWidth: 1,
    borderBottomColor: stylesVars.borderWhiteLow,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1 },
      },
      android: { elevation: 2 },
    }),
  },
  topAppBarInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: stylesVars.spacingSm,
    paddingHorizontal: stylesVars.marginMobile,
  },
  appTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
    color: stylesVars.primary,
    marginRight: stylesVars.spacingSm,
  },
  iconFill: {
    fontSize: 20,
    color: stylesVars.secondary,
    marginRight: stylesVars.spacingSm,
  },

  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 999,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: stylesVars.borderWhiteLow,
    backgroundColor: stylesVars.surfaceContainerHigh,
    alignItems: "center",
    justifyContent: "center",
  },

  // (removed helper for external dynamic classes — styles should be applied where classes are used)

  mainContent: {
    // reduce top padding to better match design spacing above the section
    paddingTop: 56,
    paddingBottom: 100,
    paddingHorizontal: stylesVars.marginMobile,
    maxWidth: 896,
    alignSelf: "center",
    width: "100%",
    // use explicit spacing between major sections
  },

  /* Typography */
  fontHeadlineMd: {
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: -0.01,
    fontWeight: "600",
    color: stylesVars.onBackground,
  },
  fontHeadlineLgMobile: {
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: -0.02,
    fontWeight: "700",
    color: stylesVars.onBackground,
  },
  fontLabelMd: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.01,
    fontWeight: "500",
    color: stylesVars.onBackground,
  },
  fontLabelSm: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.02,
    fontWeight: "500",
    color: stylesVars.onBackground,
  },
  fontDataBold: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "700",
    color: stylesVars.onBackground,
  },
  fontCaptionXs: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: "700",
    color: stylesVars.onSurfaceVariant,
  },

  sectionHeader: {
    flexDirection: "column",
    paddingTop: stylesVars.spacingMd,
    paddingBottom: stylesVars.spacingMd,
  },
  sectionSubtitle: {
    color: stylesVars.onSurfaceVariant,
    marginTop: stylesVars.spacingSm,
  },

  /* Search */
  searchContainer: {
    position: "relative",
    width: "100%",
    marginBottom: stylesVars.spacingSm,
  },
  searchIconWrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    paddingLeft: stylesVars.spacingMd,
    justifyContent: "center",
  },
  searchIcon: {
    color: stylesVars.onSurfaceVariant,
  },
  glassInput: {
    width: "100%",
    backgroundColor: stylesVars.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: stylesVars.borderWhiteLow,
    borderRadius: 8,
    paddingVertical: stylesVars.spacingMd,
    paddingHorizontal: stylesVars.spacingMd,
    paddingLeft: 48,
    color: stylesVars.onBackground,
    fontSize: 16,
  },

  filterChips: {
    flexDirection: "row",
    paddingTop: stylesVars.spacingSm,
    paddingBottom: stylesVars.spacingSm,
    // make chips scroll horizontally; add spacing via margin on chip
  },
  chip: {
    paddingVertical: stylesVars.spacingSm,
    paddingHorizontal: stylesVars.spacingMd,
    borderRadius: 999,
    // match design: smaller gap between chips (5px)
    marginRight: 5,
  },
  // Helper for external dynamic view class found in inspector (.css-view-g5y9jx)
  // React Native doesn't support '!important' but this provides the same padding
  cssViewG5y9jx: {
    paddingBottom: 5,
  },
  chipActive: {
    backgroundColor: stylesVars.primaryContainer,
    borderWidth: 1,
    borderColor: stylesVars.primaryContainer,
    shadowColor: stylesVars.glowPrimary,
  },
  chipActiveText: {
    color: "#000",
  },
  // fallback for web inspector dynamic class if needed elsewhere
  cssViewG5y9jxWeb: {
    paddingBottom: 5,
  },
  chipInactive: {
    backgroundColor: stylesVars.surfaceGlass,
    borderWidth: 1,
    borderColor: stylesVars.borderWhiteLow,
  },

  transactionListSection: {
    flexDirection: "column",
    // spacing handled per-card using marginBottom on cards
  },
  dateHeader: {
    color: stylesVars.onSurfaceVariant,
    textTransform: "uppercase" as any,
    letterSpacing: 0.05,
    marginTop: stylesVars.spacingSm,
    marginBottom: stylesVars.spacingSm,
  },
  mtMd: {
    marginTop: stylesVars.spacingMd,
  },

  glassCard: {
    backgroundColor: stylesVars.surfaceGlass,
    borderWidth: 1,
    borderColor: stylesVars.borderWhiteLow,
    borderRadius: 12,
    padding: stylesVars.spacingMd,
    flexDirection: "column",
    marginBottom: stylesVars.spacingMd,
    position: "relative",
    overflow: "hidden",
  },
  glassCardHover: {},
  cardHighlightTop: {
    borderTopWidth: 1,
    borderTopColor: "rgba(179,197,255,0.2)",
  },
  cardBorderLTertiary: {
    borderLeftWidth: 2,
    borderLeftColor: stylesVars.tertiary,
  },
  cardBorderLError: {
    borderLeftWidth: 2,
    borderLeftColor: stylesVars.error,
  },

  cardBgGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
  },
  bgGradientSuccess: {
    backgroundColor: "rgba(0,180,125,0.05)",
    opacity: 1,
  },
  bgGradientPending: {
    backgroundColor: "rgba(255,185,95,0.05)",
    opacity: 1,
  },

  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    position: "relative",
  },
  cardRowOpacity75: { opacity: 0.75 },
  cardRowCenter: { alignItems: "center" },
  cardRowPtSm: {
    // increase space between top row and divider to match design
    paddingTop: stylesVars.spacingMd,
    borderTopWidth: 1,
    borderTopColor: stylesVars.borderWhiteLow,
  },

  entityInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
  },
  entityLogo: {
    width: 48,
    height: 48,
    borderRadius: 999,
    backgroundColor: stylesVars.surfaceContainerHighest,
    borderWidth: 1,
    borderColor: stylesVars.borderWhiteLow,
    alignItems: "center",
    justifyContent: "center",
    marginRight: stylesVars.spacingMd,
  },
  logoShadow: {
    ...Platform.select({
      ios: { shadowColor: "#fff", shadowOpacity: 0.05, shadowRadius: 15 },
      android: { elevation: 1 },
    }),
  },
  entityText: { flexDirection: "column" },
  entityName: { fontWeight: "500", color: stylesVars.onBackground },
  entitySub: { color: stylesVars.onSurfaceVariant },

  amountInfo: { flexDirection: "column", alignItems: "flex-end" },
  amountTime: {
    color: stylesVars.onSurfaceVariant,
    marginTop: stylesVars.spacingXs,
  },
  lineThrough: {
    textDecorationLine: "line-through",
    color: stylesVars.onSurfaceVariant,
  },

  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: stylesVars.spacingXs,
    paddingHorizontal: stylesVars.spacingSm,
    borderRadius: 999,
    textTransform: "uppercase" as any,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 999,
    backgroundColor: stylesVars.secondary,
    // design requires a slightly smaller gap between dot and text
    marginRight: 5,
  },
  statusDotSuccess: { backgroundColor: stylesVars.secondary },
  statusDotPending: { backgroundColor: "#ffb95f" },
  statusDotFailed: { backgroundColor: stylesVars.error },

  statusTextSuccess: { color: stylesVars.secondary },
  statusTextPending: { color: "#ffb95f" },
  statusTextFailed: { color: stylesVars.error },
  statusSuccess: {
    backgroundColor: "rgba(0,180,125,0.1)",
    borderWidth: 1,
    borderColor: "rgba(78,222,163,0.2)",
    shadowColor: stylesVars.glowSuccess,
  },
  statusPending: {
    backgroundColor: "rgba(255,185,95,0.1)",
    borderWidth: 1,
    borderColor: "rgba(255,221,184,0.2)",
    shadowColor: stylesVars.glowPending,
  },
  statusFailed: {
    backgroundColor: "rgba(147,0,10,0.1)",
    borderWidth: 1,
    borderColor: "rgba(255,180,171,0.2)",
    shadowColor: stylesVars.glowFailed,
  },

  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    color: stylesVars.primary,
  },
  actionBtnIcon: {
    marginLeft: stylesVars.spacingXs,
  },
  actionIcon: {
    fontSize: 16,
    color: stylesVars.primary,
    marginLeft: stylesVars.spacingXs,
  },

  loadMoreContainer: { alignItems: "center", marginTop: stylesVars.spacingMd },
  btnLoadMore: {
    paddingVertical: stylesVars.spacingSm,
    paddingHorizontal: stylesVars.spacingLg,
    borderRadius: 999,
    backgroundColor: stylesVars.surfaceGlass,
    borderWidth: 1,
    borderColor: stylesVars.borderWhiteLow,
  },

  bottomNav: {
    position: "absolute",
    bottom: stylesVars.spacingLg,
    left: "50%",
    transform: [{ translateX: -(width - 40) / 2 }],
    width: width - 40,
    maxWidth: 448,
    borderRadius: 999,
    zIndex: 50,
    backgroundColor: stylesVars.surfaceGlass,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.4,
        shadowRadius: 32,
        shadowOffset: { width: 0, height: 8 },
      },
      android: { elevation: 8 },
    }),
  },
  bottomNavInner: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: stylesVars.spacingMd,
    paddingHorizontal: stylesVars.spacingLg,
  },

  navItem: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  navItemInactive: { color: stylesVars.onSurfaceVariant, opacity: 0.6 },
  navItemActive: { color: stylesVars.secondary },
  navLabel: { marginTop: stylesVars.spacingXs },
});

export default styles;
