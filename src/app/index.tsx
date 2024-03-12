import { StyleSheet, View, FlatList, TextInput, Button, ActivityIndicator } from "react-native";
import FoodListItem from "../components/FoodListItem";
import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const query = gql`
  query search($ingr: String) {
    search(ingr: $ingr) {
      text
      hints {
        food {
          label
          brand
          foodId
          nutrients {
            ENERC_KCAL
          }
        }
      }
    }
  }
`;

const foodItems = [
  { label: "Pizza", cal: 75, brand: "Dominos" },
  { label: "Apple", cal: 50, brand: "Generic" },
  { label: "Coffee", cal: 100, brand: "Americano" },
];

export default function SearchScreen() {
  const [search, setSearch] = useState("");

  const [runSearch, {data, loading, error}] = useLazyQuery(query, { variables: { ingr: 'Pizza' } })

  const performSearch = () => {
    runSearch({ variables: {ingr: search }})
    setSearch("");
  };

  if (error) {
    return <Text>Failed to search</Text>
  }

  const items = data?.search?.hints || []

  return (
    <View style={styles.container}>
      <TextInput
        value={search}
        placeholder="Search..."
        style={styles.input}
        onChangeText={setSearch}
      />

      {search && <Button title="Search" onPress={performSearch} />}

      {/* Food item view */}
      {/* <FoodListItem item={{label: "Pizza", cal: 75, brand: 'Dominos'}} /> */}
      {loading && <ActivityIndicator />}
      <FlatList
        data={items}
        renderItem={({ item }) => <FoodListItem item={item} />}
        //ListEmptyComponent={() => <Text>Search a food</Text>}
        contentContainerStyle={{ gap: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    gap: 10,
  },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 20,
  },
});
