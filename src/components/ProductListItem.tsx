import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "@/src/constants/Colors";
import { Product } from "../types";

const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us.east-2.amazonaws.com/food/default.png";

export const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image ?? defaultPizzaImage }}
        style={styles.image}
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontWeight: 600,
    color: Colors.light.tint,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
