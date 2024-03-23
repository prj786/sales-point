import React, {useState} from 'react';
import {Card, SegmentedButtons, Text} from "react-native-paper";
import {StyleSheet, SafeAreaView, View} from "react-native";

const Company = ({route}) => {
    const {params: company} = route;

    const [selectedFilter, setSelectedFilter] = useState('0');

    return <SafeAreaView>
        <View style={styles.Container}>
            <Card.Cover style={{borderRadius: 0}} source={{ uri: 'https://picsum.photos/800?grayscale' }} />
            <View style={styles.TextContainer}>
                <Text style={styles.Text} variant="titleLarge">Overall Rating: 4.5</Text>
                <Text style={styles.Text} variant="titleLarge">Sales Per Week: 6</Text>
            </View>
        </View>
        <SegmentedButtons
            value={selectedFilter}
            onValueChange={setSelectedFilter}
            density="small"
            buttons={[
                {
                    value: '0',
                    label: 'Active Sales',
                    icon: 'sale',
                    style: {
                        borderRadius: 0
                    }
                },
                {
                    value: '1',
                    label: 'Past Sales',
                    icon: 'store',
                    style: {
                        borderRadius: 0
                    }
                }
            ]}
        />
    </SafeAreaView>
};

const styles = StyleSheet.create({
    Container: {
        position: "relative",
    },
    TextContainer: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        justifyContent: 'center', alignItems: 'center'
    },
    Text: {
        color: '#fff',
        fontWeight: 'bold'
    }
})

export default Company;