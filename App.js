import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigation/MainNavigation/MainNavigation";
import AuthNav from "./src/navigation/AuthNavigation/AuthNav";

import UserContext from "./src/context/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
export default function App() {
  const queryClient = new QueryClient();
  const [authenticated, setAuthenticated] = useState(false);

  const checkToken = async () => {
    const token = await getToken();
    if (token) setAuthenticated(true);
  };

  useEffect(() => {
    checkToken();
  });
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={[authenticated, setAuthenticated]}>
          {authenticated ? <MainNavigation /> : <AuthNav />}
        </UserContext.Provider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
