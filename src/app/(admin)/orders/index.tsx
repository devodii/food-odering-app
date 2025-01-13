import { Text, View } from "@/src/components/Themed";
import orders from "@/assets/data/orders";
import { FlatList } from "react-native";
import OrderListItem from "@/src/components/OrderListItem";

export default function OrdersPage() {
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item} />}
    />
  );
}
