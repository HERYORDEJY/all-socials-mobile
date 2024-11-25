/**
 * Custom hook to retrieve the appropriate theme colour palette based on the current theme mode.
 *
 * This hook utilises the application's theme store to determine whether the active theme mode
 * is "light" or "dark" and returns the corresponding set of colours.
 *
 * @returns {typeof lightThemeColors | typeof darkThemeColors} The colour palette for the active theme mode.
 */

import { darkThemeColors, lightThemeColors } from "~/constants/Colors";
import { useThemeStore } from "~/store/theme";

export function useThemeColors(): typeof lightThemeColors {
    const themeStore = useThemeStore((state) => state);

    if (themeStore.mode === "light") {
        return lightThemeColors;
    }

    return darkThemeColors;
}
