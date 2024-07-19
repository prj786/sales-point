import React, { useState } from "react";
import { Avatar, Badge, Card, IconButton } from "react-native-paper";
import {
  Dimensions,
  Pressable,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

const getCorrectIcon = (type) => {
  if (type === 1) {
    return "store";
  }

  if (type === 2) {
    return "food";
  }

  return "washing-machine";
};

const getCorrectColor = (type) => {
  if (type === 1) {
    return "#F72798";
  }

  if (type === 2) {
    return "#eeb407";
  }

  return "#50C878";
};
const CardGroup = ({ data, onPress, onSelect }) => {
  return (
    <ScrollView
      style={{ height: Dimensions.get("window").height - 380 }}
      showsVerticalScrollIndicator={false}
    >
      {data.map((card, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => onPress(card)}>
            <Card.Title
              title={card.title}
              subtitle={card.subtitle}
              left={(props) => {
                return (
                  <View>
                    <Badge
                      style={{
                        position: "absolute",
                        top: -8,
                        right: -8,
                        zIndex: 10,
                      }}
                    >
                      -{data.index}%
                    </Badge>
                    <Avatar.Icon
                      {...props}
                      style={{ borderRadius: 0, backgroundColor: "#000" }}
                      color={getCorrectColor(card.shopType)}
                      icon={getCorrectIcon(card.shopType)}
                    />
                  </View>
                );
              }}
              right={(props) => (
                <IconButton
                  {...props}
                  onPress={() => onSelect(card)}
                  icon={card.isFav ? "heart" : "heart-outline"}
                />
              )}
            />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
export default CardGroup;
