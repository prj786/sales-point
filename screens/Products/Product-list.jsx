import React, {useState} from 'react';
import {Searchbar, SegmentedButtons, Snackbar, Text} from "react-native-paper";
import Wrapper from "../../components/Wrapper";
import {View} from "react-native";
import ChipGroups from "../../components/ChipGroups";
import CardGroup from "../../components/CardGroup";
import Toast from "react-native-toast-message";
import {useNavigation} from "@react-navigation/native";

const ProductList = () => {
    const navigation = useNavigation();

    const [searchQuery, setSearchQuery] = useState('');
    const [value, setValue] = React.useState(0);

    const [chips, setChips] = useState(
        [
            {text: '#chip1', selected: false, index: 1},
            {text: '#chip2', selected: false, index: 2},
            {text: '#chip3', selected: false, index: 3},
            {text: '#chip4', selected: false, index: 4},
            {text: '#chip5', selected: false, index: 5},
            {text: '#chip4', selected: false, index: 6},
            {text: '#chip2', selected: false, index: 7},
        ]
    )

    const allProducts =         [
        {subtitle: 'კარაქი', title: 'ორი ნაბიჯი', isFav: false, shopType: 1, index: 1},
        {subtitle: 'ზეთი', title: 'მაგნიტი', isFav: false, shopType: 1, index: 2},
        {subtitle: 'ცოცხი', title: 'კარფური', isFav: true, shopType: 1, index: 3},
        {subtitle: 'ვაშლი', title: 'ორი ნაბიჯი', isFav: false, shopType: 1, index: 4},
        {subtitle: 'შაურმა', title: 'მაკშაურმა', isFav: true, shopType: 2, index: 5},
        {subtitle: 'ზეთი', title: 'ორი ნაბიჯი', isFav: false, shopType: 1, index: 6},
        {subtitle: 'ღვეზელი', title: 'მადარტი', isFav: false, shopType: 2, index: 7},
        {subtitle: 'ხინკალი', title: 'ხინკლის სახლი', isFav: false, shopType: 2, index: 8},
        {subtitle: 'ქაბაბი', title: 'ჭაშნაგირი', isFav: false, shopType: 2, index: 9},
    ]

    const [products, setProducts] = useState(allProducts);

    const onToggleChip = (chip) => {
        const newData = chips.map((item) => {
            return item.index === chip.index ? {...item, selected: !chip.selected} : item;
        })
        setChips(newData);
    }

    const onToggleCard = (card) => {
        if (card.isFav) {
            Toast.show({
                type: 'success',
                text1: 'Removed from favourites',
                position: 'bottom',
            });
        } else {
            Toast.show({
                type: 'success',
                text1: 'Add to favourites',
                position: 'bottom'
            });
        }

        const newData = products.map((item) => {
            return item.index === card.index ? {...card, isFav: !card.isFav} : item;
        })
        setProducts(newData);
    }

    const filterShops = (val) => {
        setValue(val);

        setProducts((prev) => {
            if (!val) {
                return allProducts;
            }
            return allProducts.filter((product) => product.shopType === val)
        })
    }

    const goTo = (product) => {
        navigation.navigate('Product', {...product});
    }

    return <Wrapper>
        <Searchbar
            placeholder="Search"
            mode="view"
            style={{
                backgroundColor: "transparent",
                marginBottom: 10
            }}
            onChangeText={setSearchQuery}
            value={searchQuery}
        />
        <View style={{
            marginBottom: 10
        }}>
            <ChipGroups data={chips} type="outlined" onPress={onToggleChip} />
        </View>
        <SegmentedButtons
            value={value}
            onValueChange={filterShops}
            density="small"
            buttons={[
                {
                    value: 2,
                    label: 'Food',
                    icon: 'food',
                    style: {
                        borderRadius: 7
                    }
                },
                {
                    value: 1,
                    label: 'Store',
                    icon: 'store'
                },
                {
                    value: 0,
                    label: 'Everything',
                    icon: 'sale',
                    style: {
                        borderRadius: 7
                    }
                }
            ]}
        />
        <View style={{
            marginBottom: 10
        }}>
        <CardGroup data={products} onPress={goTo} onSelect={onToggleCard} />
        </View>
    </Wrapper>
};

export default ProductList;