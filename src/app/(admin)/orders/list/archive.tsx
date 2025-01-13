import orders from "@/assets/data/orders";
import { FlatList } from "react-native";
import OrderListItem from "@/src/components/OrderListItem";

export default function ArchiveList() {
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item} />}
    />
  );
}
