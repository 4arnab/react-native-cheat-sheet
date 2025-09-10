import { Stack } from "expo-router";
import { StatusBar, useColorScheme } from "react-native";
import { Colors } from '../constants/Colors';

const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.white
  return (
    <>
    <StatusBar animated={true} networkActivityIndicatorVisible={false} translucent={true} barStyle="dark-content" />
    <Stack screenOptions={{
         headerTintColor:theme.title,
         headerStyle:{
            backgroundColor:theme.background
         }
         }}>
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="contact" options={{ title: "Contact" }} />
    </Stack>

        </>

  );
};

export default RootLayout;
