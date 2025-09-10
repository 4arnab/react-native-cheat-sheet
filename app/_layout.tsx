// import {}

import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerTintColor:"blue" }}>
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="contact" options={{ title: "Contact" }} />
    </Stack>
  );
};

export default RootLayout;
