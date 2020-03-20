import React, { memo } from 'react';
import { View, Text, Button, StyleSheet } from "react-native";

export interface NameShufflingProps {
    name: any,
    clearName: Function
}

function WrappedComponent(props: NameShufflingProps) {
    console.log('Re-rendering');
    return (
        <View>
            <Text style={styles.Name} >Selected Name: {props.name ? props.name : 'None'}</Text>
            <Button
                onPress={() => { props.clearName() }}
                title='Clear'
            />
        </View>
    );
}

export const NameShuffling = memo(WrappedComponent);

export default NameShuffling;

const styles = StyleSheet.create({
    Name:{
        justifyContent:'center',
        alignItems:'center',
        fontSize: 30,
        margin:40,
        alignSelf:'center'
    }
})