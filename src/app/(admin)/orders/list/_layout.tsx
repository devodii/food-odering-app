import { withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native";

const TopTabs = withLayoutContext(createMaterialTopTabNavigator().Navigator);

export default function OrderListNavigator() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <TopTabs>
        <TopTabs.Screen name="index" options={{ title: "Open" }} />
        <TopTabs.Screen name="archive" options={{ title: "Archive" }} />
      </TopTabs>
    </SafeAreaView>
  );
}
