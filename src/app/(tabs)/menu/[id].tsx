import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import products from "@/assets/data/products";
import { defaultPizzaImage } from "@components/ProductListItem";
import { useState } from "react";
import { Button } from "@components/Button";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const [size, setSize] = useState("M");

  const addToCart = () => {
    console.warn("Adding to cart..");
  };

  const product = products.find((it) => it.id.toString() == id);

  if (!product) return <Text>Not found</Text>;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        style={styles.image}
        source={{ uri: product.image ?? defaultPizzaImage }}
      />

      <Text>Select size</Text>

      <View style={styles.sizes}>
        {sizes.map((el) => (
          <Pressable
            onPress={() => setSize(el)}
            key={el}
            style={[
              styles.size,
              size === el && { backgroundColor: "gainsboro" },
            ]}
          >
            <Text
              style={[styles.stylesText, size === el && { color: "black" }]}
            >
              {el}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>${product.price}</Text>
      <Button text="Add to cart" onPress={addToCart} />
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
  sizes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "white",
    width: 50,
    aspectRatio: 1,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    color: "gray",
  },
  stylesText: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default ProductDetailScreen;
