import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { FontFamily } from "~/constants/FontFamily";
import { useThemeColors } from "~/hooks/useThemeColors";
import TwitterLoginButton from "~/components/buttons/TwitterLoginButton";
import ThreadsLoginButton from "~/components/buttons/ThreadsLoginButton";
import BlueskyLoginButton from "~/components/buttons/BlueskyLoginButton";

export default function Login(): React.JSX.Element | null {
    const safeAreaInset = useSafeAreaInsets();
    const themeColors = useThemeColors();

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: themeColors.primaryColors.teal + "30" },
            ]}
        >
            <StatusBar style={"dark"} />
            <View
                style={[
                    styles.contentContainer,
                    {
                        paddingTop: safeAreaInset.top,
                        paddingBottom: safeAreaInset.bottom,
                    },
                ]}
            >
                <View style={styles.welcomeTextWrapper}>
                    <Text
                        style={[
                            styles.welcomeText,
                            { color: themeColors.primaryColors.teal },
                        ]}
                    >
                        Welcome{"\n"}to
                    </Text>
                    <Text
                        style={[
                            styles.welcomeText,
                            { color: themeColors.primaryColors.teal },
                        ]}
                    >
                        All Socials
                    </Text>
                    <Text style={styles.welcomeDescText}>
                        Effortlessly share your content across all your
                        favourite social media platforms in one go. Simplify
                        your posting process and save time!
                    </Text>
                </View>

                <View style={styles.buttonsWrapper}>
                    <TwitterLoginButton />
                    <ThreadsLoginButton />
                    <BlueskyLoginButton />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: 16,
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    welcomeTextWrapper: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        paddingHorizontal: 26,
    },
    welcomeText: {
        fontSize: 28,
        fontFamily: FontFamily.semibold,
        textAlign: "center",
    },
    welcomeDescText: {
        textAlign: "center",
        fontSize: 12,
        lineHeight: 16,
    },
    buttonsWrapper: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-start",
        // alignItems: "center",
        gap: 16,
    },
});
