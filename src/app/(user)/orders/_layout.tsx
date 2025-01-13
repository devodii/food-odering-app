import { FontAwesome } from "@expo/vector-icons";
import { Stack, Link } from "expo-router";

export default function OrdersLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Orders" }} />
    </Stack>
  );
}
