import React from 'react';
import {ScrollView} from "react-native";
import {Chip} from "react-native-paper";

const ChipGroups = ({data, type, onPress}) => {
    return <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((chip, index) => {
            return <Chip style={{marginRight: 10}} showSelectedOverlay showSelectedCheck={false} id={index} selected={chip.selected} key={index} mode={type || 'outlined'} onPress={() => onPress(chip)}>
                {chip.text}
            </Chip>
        })}
    </ScrollView>
};

export default ChipGroups;