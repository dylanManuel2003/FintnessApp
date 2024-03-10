import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

const FoodListItem = ({ label, cal, brand }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }} >
        <Text style={{fontWeight: 'bold' }} >{label}</Text>
        <Text style={{color: 'dimgray' }} >{cal} cal, {brand}</Text>
      </View>
      <AntDesign name="pluscircle" size={24} color="royalblue" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gainsboro', 
        padding: 10, 
        borderRadius: 5, 
        width: '100%', 
        marginHorizontal: 'auto', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
  });

export default FoodListItem
