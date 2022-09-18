import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  Pressable,
} from "react-native";
import Colors from "../constants/Colors";
import { MonoText } from "../components/StyledText";
import { View, Text } from "../components/Themed";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import Search from "../components/Search";
import { workouts } from "../db";
import { HeadingText } from "../components/Headings";
import { WorkoutsDb } from "../components/SingleCards";
import { useRoute } from "@react-navigation/native";
import { nutritions } from "../nutritionsDb";

export default function ModalNutritionsScreen() {
  return (
    <ScrollView style={styles.cardContainer}>
      <Search placeholder="Search Nutrition" />
      {nutritions.map((nutrition) => (
        <View key={nutrition.id} style={styles.container}>
          <Image
            style={{ width: 100, height: 100, borderRadius: 150 }}
            source={{
              uri: nutrition.imageLink,
            }}
          />
          <View style={styles.card}>
            <Text style={styles.title}>{nutrition.title}</Text>
            <View style={styles.values}>
              <Text>
                Fat:
                {` ${nutrition.nutrition.nutrients[0].amount} ${nutrition.nutrition.nutrients[0].unit}, `}
              </Text>
              <Text>
                Protein:
                {` ${nutrition.nutrition.nutrients[1].amount} ${nutrition.nutrition.nutrients[1].unit}, `}
              </Text>
              <Text>
                Carbohydrates:
                {` ${nutrition.nutrition.nutrients[3].amount} ${nutrition.nutrition.nutrients[3].unit} `}
              </Text>
            </View>
          </View>
          <Pressable style={styles.button}>
            <Ionicons
              style={styles.iconText}
              name="ios-add-circle-outline"
              size={24}
              color="black"
            />
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: { flex: 1 },
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 5,
    marginTop: 10,
  },
  card: { justifyContent: "center" },
  values: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 200,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: "bold",
  },
  button: {
    width: 30,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  iconText: {},
  buttonText: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: "bold",
  },
});
