import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import products from "@/assets/data/products";
import { defaultPizzaImage } from "@components/ProductListItem";
import { useCart } from "@/src/providers/cart-provider";
import { PizzaSize } from "@/src/types";

const sizes = ["S", "M", "L", "XL"] as PizzaSize[];

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();

  const product = products.find((it) => it.id.toString() == id);

  if (!product) return <Text>Not found</Text>;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        style={styles.image}
        source={{ uri: product.image ?? defaultPizzaImage }}
      />

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "auto",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ProductDetailScreen;
