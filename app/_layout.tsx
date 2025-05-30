import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>
    {/* <Stack.Screen
        name="screens/CameraScreen"
        options={{ headerShown: false, title: "Camera" }}
      /> */}
    <Stack.Screen
        name="screens/testScreen"
        options={{ headerShown: false, title: "Test Screen" }}
      />
  </Stack>);
}
