import * as React from 'react';
import { View, StyleSheet, Text, Animated, Easing, Image } from 'react-native';

export interface AnimationsProps {
}

export interface AnimationsState {
    spinValue: any
}

export default class AnimationsComponent extends React.Component<AnimationsProps, AnimationsState> {
    constructor(props: AnimationsProps) {
        super(props);
        this.state = {
            spinValue: new Animated.Value(0)
        };
    }

    componentDidMount() {
        this.spin()
    }
    spin() {
        this.state.spinValue.setValue(0)
        Animated.timing(
            this.state.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }

    public render() {
        const spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        return (
            <View style={styles.container} >
                <Animated.Image
                    style={{ width: 227, height: 200, transform: [{ rotate: spin }] }}
                    source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
