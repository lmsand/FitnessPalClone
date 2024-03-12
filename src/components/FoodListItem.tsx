import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";


const FoodListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.food.label}</Text>
        <Text style={{ color: "dimgray" }}>
          {item.food.nutrients.ENERC_KCAL} cal, {item.food.brand}
        </Text>
      </View>
      <AntDesign name="pluscircleo" size={24} color="royalblue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f6f8",
    padding: 10,
    gap: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
  },
});

export default FoodListItem;
