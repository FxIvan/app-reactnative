import { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginContent() {
  
  const [userInfo, setUserInfo] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "7731921851574-qnou0mctckf1ijnk8169qbk4s5qhgg6l.apps.googleusercontent.com",
    expoClientId: "cfb6f231-18ad-4360-9977-bc8ea21711ef",
  });

  useEffect(() => {
    console.log("RESPUESTA -->", response);
    if (response?.type === "success") {
      const { authentication } = response;
      // Aquí puedes obtener el token de acceso y otras informaciones si es necesario
      console.log(authentication);
      setUserInfo(authentication);
    }
  }, [response]);

  const handleGoogleSignIn = async () => {
    console.log("handleGoogleSignIn");
    try {
      // Verificar si la solicitud ya ha terminado de cargar antes de mostrar la ventana de autenticación
      console.log("Llego hasta la request");
      console.log("REQUEST --->", request);
      /*if (!request) {
          return;
        }*/

      // Mostrar la ventana de autenticación de Google
      const result = await promptAsync();
      console.log("RESULT -->", result);
    } catch (error) {
      console.error("Error al autenticar con Google:", error);
    }
  };

  return (
    <SafeAreaView className="w-[100%] h-screen justify-around">
      <View className="w-full">
        <Text className="text-cyan-700 text-4xl text-center w-full">
          COACH AI
        </Text>
      </View>
      <View>
        <Button
          title="Sign in with Google"
          disabled={!request}
          onPress={handleGoogleSignIn}
        />
      </View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
    </SafeAreaView>
  );
}
