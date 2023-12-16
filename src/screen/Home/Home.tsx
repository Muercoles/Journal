import {Colors} from "../../constants/Colors";
import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import Lamp from "../../assets/Lamp";
import BookShel from "../../assets/BookShel";
import Plant from "../../assets/Plant";

export const Home = () => {
    return(
            <LinearGradient colors={[Colors.main, Colors.white]} style={{
                flex: 1,
                paddingBottom: 2
            }}>
                <Lamp/>
                <View style={styles.topBox}>
                    <Text style={styles.headline}>
                        lorem ipsum{'\n'}
                        ipsum lorem lorem
                    </Text>

                </View>
                    <View style={styles.bottomContainer}>
                        <></>
                            {/*<Plant />*/}
                            <BookShel />
                    </View>
            </LinearGradient>
    )
}
const styles = StyleSheet.create({
    topBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headline: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 18,
    },
    horizontalContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    contentContainer: {
        flex: 1,
        justifyContent: "space-between",
        padding: 16,
    },
    bottomContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
});
