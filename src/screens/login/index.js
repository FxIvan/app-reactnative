import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  SafeAreaView,
  Platform,
} from "react-native";
import LoginContent from "./content";
export default function LoginScreen() {
  const image = {
    uri: "https://images.unsplash.com/photo-1565214975484-3cfa9e56f914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
  };
  return (
    <SafeAreaView className="text-center relative bg-white">
      <View className="absolute top-0 w-full" style={styles.container}>
        <LoginContent />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
