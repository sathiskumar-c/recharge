import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import { View } from "react-native";
import tabConfig from "../../config/tabConfig";
import tabStyles from "./layout.styles";

export default function TabLayout() {
  const screens = tabConfig.screens;

  return (
    <Tabs screenOptions={tabStyles.screenOptions}>
      {screens.map((s) => (
        <Tabs.Screen
          key={s.name}
          name={s.name}
          options={{
            title: s.title,
            tabBarIcon: ({ color, focused }) => (
              <View style={focused ? tabStyles.focusedShadow : {}}>
                <MaterialIcons name={s.icon} size={24} color={color} />
              </View>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
