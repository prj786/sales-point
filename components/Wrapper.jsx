import React from 'react';
import {SafeAreaView, ScrollView, View} from "react-native";

const Wrapper = ({children}) => {
    return <View style={{
        paddingVertical: 20,
        marginHorizontal: 10,
    }}>
        {children}
    </View>
};

export default Wrapper;