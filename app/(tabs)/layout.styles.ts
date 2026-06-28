import { C } from "./index.styles";

export const tabStyles = {
  screenOptions: {
    headerShown: false,
    tabBarActiveTintColor: C.secondary,
    tabBarInactiveTintColor: C.outline,
    sceneContainerStyle: {
      paddingBottom: 120,
    },
    tabBarStyle: {
      position: "absolute",
      bottom: 60,
      left: 20,
      right: 20,
      height: 64,
      backgroundColor: "rgba(32, 31, 31, 0.6)",
      borderWidth: 1,
      borderColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: 32,
      paddingBottom: 8,
      paddingTop: 8,
      paddingHorizontal: 12,
      marginHorizontal: 0,
    },
    tabBarLabelStyle: {
      fontSize: 10,
      fontWeight: "500",
      marginTop: 4,
      marginBottom: 4,
    },
    tabBarItemStyle: {
      paddingVertical: 8,
    },
  },
  focusedShadow: {
    shadowColor: "#4edea3",
    shadowOpacity: 0.8,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  },
};

export default tabStyles;
