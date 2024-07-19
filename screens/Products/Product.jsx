import React from 'react';
import {View} from "react-native";
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