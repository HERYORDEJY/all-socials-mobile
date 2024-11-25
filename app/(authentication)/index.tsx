import React from "react";
import { StyleSheet } from "react-native";
import Login from "~/app/(authentication)/login";

interface Props {
    //
}

export default function Index(props: Props): React.JSX.Element {
    return (
        <>
            <Login />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        //
    },
});
