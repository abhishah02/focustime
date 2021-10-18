import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import { RoundedButton } from "../../components/RoundedButton";

export const Timing = ({ChangeTime}) => {
    return(
        <>
        <View style={styles.timingButton}>
            <RoundedButton size={75} title="10" onPress={() => ChangeTime(10)} />
        </View>
        <View style={styles.timingButton}>
            <RoundedButton size={75} title="15" onPress={() => ChangeTime(15)} />
        </View>
        <View style={styles.timingButton}>
            <RoundedButton size={75} title="20" onPress={() => ChangeTime(20)} />
        </View>
        </>

    )
};

const styles = StyleSheet.create({
    timingButton: {
        flex: 1,
        alignItems: 'center'
    }
})