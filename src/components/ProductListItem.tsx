import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Colors from "@/src/constants/Colors";
import { Product } from "../types";
import { Link, useSegments } from "expo-router";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us.east-2.amazonaws.com/food/default.png";

export const ProductListItem = ({ product }: { product: Product }) => {
  const segments = useSegments();

  return (
    <Link href={`/${segments[0]}/menu/${product.id}` as any} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image ?? defaultPizzaImage }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    maxWidth: "50%",
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
