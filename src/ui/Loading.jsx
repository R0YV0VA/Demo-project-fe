import React from "react";
import { View, StyleSheet } from "react-native";
import ReactLoading from "react-loading";

const Loading = () => {
    return (
        <View style={styles.container}>
            <ReactLoading type="bars" color="#000" height={100} width={100} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        zIndex: 9999,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default Loading;