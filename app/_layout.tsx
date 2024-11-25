import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, TextInput } from "react-native";
import setDefaultProps from "react-native-simple-default-props";
import { FontFamily } from "~/constants/FontFamily";
import { useThemeColors } from "~/hooks/useThemeColors";

export default function RootLayout() {
    const themeColors = useThemeColors();

    const [loaded, error] = useFonts({
        "Georama-Regular": require("../assets/fonts/Georama/Georama-Regular.ttf"),
        "Georama-Medium": require("../assets/fonts/Georama/Georama-Medium.ttf"),
        "Georama-SemiBold": require("../assets/fonts/Georama/Georama-SemiBold.ttf"),
        "Georama-Bold": require("../assets/fonts/Georama/Georama-Bold.ttf"),
    });

    setDefaultProps(Text, {
        style: {
            fontFamily: FontFamily.regular,
            color: themeColors.text.primaryColor,
        },
        allowFontScaling: false,
    });
    setDefaultProps(TextInput, {
        underlineColorAndroid: "transparent",
        style: {
            fontFamily: FontFamily.regular,
            color: themeColors.text.primaryColor,
        },
        allowFontScaling: false,
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="+not-found" />
                <Stack.Screen name={"(authentication)"} />
            </Stack>
        </SafeAreaProvider>
    );
}
