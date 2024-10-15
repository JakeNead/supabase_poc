import { Button, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Button
        title="Profile"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
};
