import { darkThemeColors, lightThemeColors } from "~/constants/Colors";

export type ThemeModeType = "light" | "dark";

export type ThemeStoreType = {
    mode: ThemeModeType;
    colors: typeof lightThemeColors & typeof darkThemeColors;
    setMode: (mode: ThemeModeType) => void;
};
