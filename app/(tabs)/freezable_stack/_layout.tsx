import { Stack } from "expo-router";

export default () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index"/>
      <Stack.Screen name="secondScreen" />
      <Stack.Screen name="inner_modal" options={{ presentation: 'modal' }} />
    </Stack>
  );
}
