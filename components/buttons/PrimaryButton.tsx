import React from "react";
import {
    GestureResponderEvent,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
} from "react-native";
import * as Haptics from "expo-haptics";
import { FontFamily } from "~/constants/FontFamily";
import { useThemeColors } from "~/hooks/useThemeColors";

interface Props extends TouchableOpacityProps {
    /*
     * Title of button
     * */
    title: string;
    /*
     * React element  to left of title
     * */
    leftElement?: React.ReactNode;
    /*
     * React element  to right of title
     * */
    rightElement?: React.ReactNode;
}

export default function PrimaryButton(props: Props): React.JSX.Element {
    const themeColors = useThemeColors(),
        primaryButtonColors = themeColors.button.primary;

    const _onPressIn = (event?: GestureResponderEvent) => {
        if (process.env.EXPO_OS === "ios") {
            // Add a soft haptic feedback when pressing down on the tabs.
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }

        if (event) {
            props.onPressIn?.(event);
        }
    };

    return (
        <TouchableOpacity
            {...props}
            onPressIn={_onPressIn}
            style={[
                styles.container,
                {
                    backgroundColor: primaryButtonColors.backgroundColor,
                    borderColor: primaryButtonColors.borderColor,
                },
                props.style,
            ]}
        >
            {props.leftElement}
            <Text
                style={[
                    styles.title,
                    { color: primaryButtonColors.titleColor },
                ]}
            >
                {props.title}
            </Text>
            {props.rightElement}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 48,
        borderRadius: 8,
        borderWidth: 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
    },

    title: {
        fontSize: 20,
        fontFamily: FontFamily.medium,
    },
});
