import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="recharge" options={{ title: "Recharge" }} />
        <Stack.Screen name="payment" options={{ title: "Payment" }} />
        <Stack.Screen name="edit-name" options={{ headerShown: false }} />
        <Stack.Screen name="edit-email" options={{ headerShown: false }} />
        <Stack.Screen name="edit-otp" options={{ headerShown: false }} />
        <Stack.Screen
          name="edit-otp-success"
          options={{ headerShown: false }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
