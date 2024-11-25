import { create } from "zustand";
import { ThemeModeType, ThemeStoreType } from "~/store/theme/type";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { darkThemeColors, lightThemeColors } from "~/constants/Colors";
import { zustandStorage } from "~/store/storage";

export const useThemeStore = create<ThemeStoreType>()(
    devtools(
        persist(
            (set) => ({
                mode: "light",
                colors: lightThemeColors,
                setMode: (mode: ThemeModeType) => {
                    const colors =
                        mode === "light" ? lightThemeColors : darkThemeColors;
                    return set({ colors });
                },
            }),
            {
                name: `#${process.env.EXPO_PUBLIC_THEME_STORAGE_KEY}#`,
                storage: createJSONStorage(() => zustandStorage),
                partialize: (state) =>
                    Object.fromEntries(
                        Object.entries(state).filter(
                            ([key]) => !["colors"].includes(key),
                        ),
                    ),
            },
        ),
    ),
);
