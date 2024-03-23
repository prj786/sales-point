import React from 'react';
import {View} from "react-native";
import {Text} from "react-native-paper";
import ProductCard from "../../components/ProductCard";

const ProductItem = ({route}) => {
    const {...product} = route.params;

    return <View style={{
        padding: 10
    }}>
        <ProductCard/>
    </View>
};

export default ProductItem;