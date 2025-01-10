import { StatusBar } from "expo-status-bar";
import { View, Text, Platform } from "react-native";

export default function CartScreen() {
  return (
    <View>
      <Text>Cart</Text>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
