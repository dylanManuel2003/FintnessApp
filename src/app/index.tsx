import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import FoodListItem from '../components/FoodListItem';

const FoodList =[
  { 
    label: 'Pizza', 
    cal: 75, 
    brand: 'Dominos' 
  },
  { 
    label: 'Hamburgesa', 
    cal: 100, 
    brand: 'McDonalds' 
  },
  { 
    label: 'Hamburgesa', 
    cal: 125, 
    brand: 'Burger King' 
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Search...' style={styles.searcher} />
      <View>
        <FlatList 
          data={FoodList}
          renderItem={({ item }) => <FoodListItem label={item.label} cal={item.cal} brand={item.brand} />}
          contentContainerStyle={{ gap: 5 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f8',
    padding: 20,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searcher: {
    width: '100%',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 20,
  }
});
