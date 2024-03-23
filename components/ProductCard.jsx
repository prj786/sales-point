import React from 'react';
import {Text, Badge, Card, Button, Divider} from "react-native-paper";
import {View, StyleSheet, Linking, Pressable, Platform, ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from "@react-navigation/native";

const ProductCard = () => {
    const addressUrl = Platform.select({
        ios: `maps:0,0?q=tbilisi`,
        android: `geo:0,0?q=tbilisi`,
    });

    const navigation = useNavigation();

    return <ScrollView>
        <Card mode="outlined">
            <Card.Cover source={{ uri: 'https://picsum.photos/700?grayscale' }} />
            <Card.Content>
                <View style={styles.InlineContainer}>
                    <Text variant="titleLarge">Card</Text>
                    <Badge size={20}>
                        -20%
                    </Badge>
                </View>
                <Text variant="bodyMedium">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur debitis ducimus esse, eveniet fuga illum impedit incidunt iusto, laborum nam nobis nulla praesentium quam quia quis vero! Ad, magnam.
                </Text>
            </Card.Content>
            <Card.Actions>
                <Button>Save for later</Button>
                <Button>Add to favourites</Button>
            </Card.Actions>
        </Card>
        <View style={styles.InlineContainer}>
            <Text style={styles.BoldText}>Price:</Text>
            <View style={styles.TextContainer}>
                <Text style={styles.TextOldPrice}>$20</Text>
                <Text style={styles.TextPrice}>$16</Text>
            </View>
        </View>
        <View style={styles.InlineContainer}>
            <Text style={styles.BoldText}>Rating:</Text>
            <Text style={styles.Text}>4.5</Text>
        </View>
        <View style={styles.InlineContainer}>
            <Text style={styles.BoldText}>Shop:</Text>
            <Pressable onPress={() => {
                navigation.navigate('Company', {title: 'Marge'})
            }}>
                <Text style={styles.Link}>Marge</Text>
            </Pressable>
        </View>
        <View style={styles.InlineContainer}>
            <Text style={styles.BoldText}>Phone:</Text>
            <Pressable onPress={() => {
                Linking.openURL(`tel:595806801`)
            }}>
                <Text style={styles.Link}>(995) 595 806 801</Text>
            </Pressable>
        </View>
        <View style={styles.InlineContainer}>
            <Text style={styles.BoldText}>Address:</Text>
            <Pressable onPress={() => {
                Linking.openURL(addressUrl)
            }}>
                <Text style={styles.Link}>See on Map</Text>
            </Pressable>
        </View>
        <View style={styles.InlineContainer}>
            <Text style={styles.BoldText}>Social:</Text>
            <View style={styles.TextContainer}>
                <Pressable onPress={() => {
                    Linking.openURL('fb://user?username=psychedirect')
                }}>
                    <Icon name="facebook" size={24} />
                </Pressable>
                <Pressable onPress={() => {
                    Linking.openURL('instagram://user?username=psychedirect')
                }}>
                    <Icon name="instagram" size={24} />
                </Pressable>
            </View>
        </View>
    </ScrollView>
};

const styles = StyleSheet.create({
    InlineContainer: {
        flexDirection: "row",
        gap: 10,
        marginTop: 14,
        alignItems: "center",
        justifyContent: "space-between"
    },
    BoldText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    Text: {
        fontSize: 20,
    },
    Link: {
        fontSize: 20,
        color: "blue",
        textDecorationLine: "underline"
    },
    TextPrice: {
        color: "red",
        fontSize: 20,
        fontWeight: "bold"
    },
    TextOldPrice: {
        textDecorationLine: "line-through",
        fontSize: 20,
        opacity: 0.4
    },
    TextContainer: {
        alignItems: "center",
        flexDirection: "row",
        gap: 10
    }
})

export default ProductCard;