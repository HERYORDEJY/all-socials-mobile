/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

type ColorsType = {
    light: Record<string, string | Record<string, string>>;
    dark: Record<string, string | Record<string, string>>;
};

const primaryColors = { teal: "#0a7ea4" },
    activityIndicatorColor = "#37474F";

export const lightThemeColors = {
    white: "#FFFFFF",
    black: "#000000",
    borderColor: "#E4E7EC",
    screenBackgroundColor: "#F8F8F8",
    logoutColor: "#DB371F",
    primaryColors,
    activityIndicatorColor,

    input: {
        textColor: "#000000",
        backgroundColor: "#FFFFFF",
        borderColor: "#CCCCCC",
        labelColor: "#333333",
        hintColor: "#CCCCCC",
        errorColor: "#FF0000",
        placeholderColor: "#CCCCCC",
        successColor: "#008000",
        errorTextColor: "#FF0000",
        infoColor: "#1E90FF",
        warningColor: "#FFA500",
        iconColor: "#000000",
        cursorColor: "#000000",
    },
    input_disabled: {
        textColor: "#999999",
        backgroundColor: "#F0F0F0",
        borderColor: "#CCCCCC",
        labelColor: "#999999",
        hintColor: "#CCCCCC",
        errorColor: "#FF0000",
        placeholderColor: "#CCCCCC",
        successColor: "#008000",
        errorTextColor: "#FF0000",
        infoColor: "#1E90FF",
        warningColor: "#FFA500",
        iconColor: "#666666",
    },
    dropdown: {
        dropdownBackgroundColor: "#FFFFFF",
        itemColor: "#000000",
        selectedItemColor: "#FFFFFF",
        selectedItemBackgroundColor: "#3366FF",
    },
    dropdown_disabled: {
        dropdownBackgroundColor: "#F0F0F0",
        itemColor: "#A0A0A0",
        selectedItemColor: "#707070",
        selectedItemBackgroundColor: "#D9D9D9",
    },
    button: {
        primary: {
            backgroundColor: primaryColors.teal,
            borderColor: primaryColors.teal,
            titleColor: "#FFFFFF",
            iconColor: "#FFFFFF",
            loadingIndicatorColor: activityIndicatorColor,
        },
        secondary: {
            backgroundColor: "transparent",
            borderColor: primaryColors.teal,
            titleColor: primaryColors.teal,
            iconColor: primaryColors.teal,
            loadingIndicatorColor: activityIndicatorColor,
        },
        tertiary: {
            backgroundColor: "transparent",
            borderColor: "transparent",
            titleColor: primaryColors.teal,
            iconColor: primaryColors.teal,
            loadingIndicatorColor: activityIndicatorColor,
        },
    },
    button_disabled: {
        primary: {
            backgroundColor: "#ffccaa",
            borderColor: "#ffccaa",
            titleColor: "#FFFFFF",
            iconColor: "#FFFFFF",
            loadingIndicatorColor: "#FFFFFF",
        },
        secondary: {
            backgroundColor: "#99BBFF",
            borderColor: "#99BBFF",
            titleColor: "#FFFFFF",
            iconColor: "#FFFFFF",
            loadingIndicatorColor: "#FFFFFF",
        },
        tertiary: {
            backgroundColor: "#88DDAA",
            borderColor: "#88DDAA",
            titleColor: "#FFFFFF",
            iconColor: "#FFFFFF",
            loadingIndicatorColor: "#FFFFFF",
        },
    },
    main: {
        backgroundColor: "#FFFFFF",
    },
    modal: {
        backgroundColor: "#F0F0F0",
        backdropColor: "rgba(0, 0, 0, 0.5)",
    },
    list: {
        container: {
            backgroundColor: "#F5F5F5",
        },
        item: {
            backgroundColor: {
                default: "#FFFFFF",
                selected: "#ECEFF1",
                inactive: "#E0E0E0",
            },
            borderColor: {
                default: "#CCCCCC",
                disabled: "#DDDDDD",
            },
            titleColor: "#333333",
        },
        header: {
            backgroundColor: "#E0E0E0",
            borderColor: "#999999",
            titleColor: "#333333",
        },
    },
    text: {
        primaryColor: "#333333",
        secondaryColor: "#666666",
        tertiaryColor: "#999999",
    },
    tabBar: {
        backgroundColor: "#F5F5F5",
        activeIconColor: "#0a7ea4", // "#007AFF",
        inactiveIconColor: "#687076",
        activeLabelColor: "#0a7ea4", // "#007AFF",
        inactiveLabelColor: "#687076",
        badgeColor: "#FF3B30",
        badgeValueColor: "#FFFFFF",
        borderColor: "#CCCCCC",
    },
    section: {
        container: {
            backgroundColor: "#FFFFFF",
            borderColor: "#E5E5E5",
        },
        header: {
            backgroundColor: "#F5F5F5",
            titleColor: "#333333",
            subtitleColor: "#666666",
            borderColor: "#CCCCCC",
        },
        content: {
            backgroundColor: "#FAFAFA",
        },
        footer: {
            backgroundColor: "#F0F0F0",
        },
    },
    tag: {
        container: {
            backgroundColor: {
                default: "#ECECEC",
                selected: "#007AFF",
            },
            borderColor: "#CCCCCC",
        },
        titleColor: { default: "#333333", selected: "#FFFFFF" },
    },
    tag_disabled: {
        container: {
            backgroundColor: {
                default: "#F2F2F2",
                selected: "#007AFF",
            },
            borderColor: "#CCCCCC",
        },
        titleColor: { default: "#999999", selected: "#FFFFFF" },
    },
    icon: {
        defaultColor: "#333333",
        activeColor: "#007AFF",
        inactiveColor: "#999999",
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderColor: "#E0E0E0",
        titleColor: "#333333",
        textColor: "#666666",
        buttonBackgroundColor: "#007AFF",
        buttonTextColor: "#FFFFFF",
    },
    divider: "#E0E0E0",
};

export const darkThemeColors = {
    ...lightThemeColors,
};

export const Colors = {
    light: lightThemeColors,
    dark: darkThemeColors,
};
