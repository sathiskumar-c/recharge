import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="view-plans" />
        <Stack.Screen name="recharge" options={{ title: "Recharge" }} />
        <Stack.Screen name="payment" options={{ title: "Payment" }} />
        <Stack.Screen name="edit-name" />
        <Stack.Screen name="edit-email" />
        <Stack.Screen name="edit-otp" />
        <Stack.Screen name="edit-otp-success" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
