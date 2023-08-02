import { StyleSheet, View, ImageBackground, Text } from "react-native";
export default function LoginScreen() {
  const image = {
    uri: "https://images.unsplash.com/photo-1565214975484-3cfa9e56f914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
  };
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={image} />
      <Text className="text-4xl text-center text-white dark:text-white">
        Holaaaa
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
