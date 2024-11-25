import React from "react";
import { Stack } from "expo-router";

interface Props {
    //
}

export default function AuthenticationLayout(props: Props): React.JSX.Element {
    return (
        <Stack>
            <Stack.Screen name={"index"} options={{ headerShown: false }} />
        </Stack>
    );
}
