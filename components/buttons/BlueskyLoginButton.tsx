import React from "react";
import { StyleSheet } from "react-native";
import PrimaryButton from "~/components/buttons/PrimaryButton";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useThemeColors } from "~/hooks/useThemeColors";

interface Props {
    onPress?: () => void;
    disabled?: boolean;
}

export default function BlueskyLoginButton(props: Props): React.JSX.Element {
    const themeColors = useThemeColors(),
        primaryButtonColors = themeColors.button.primary;

    const _onPress = () => {
        props.onPress?.();
    };

    return (
        <PrimaryButton
            onPress={_onPress}
            title={"Continue with"}
            rightElement={
                <FontAwesome6
                    name="bluesky"
                    size={24}
                    color={primaryButtonColors.iconColor}
                />
            }
            disabled={props.disabled}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        //
    },
});
