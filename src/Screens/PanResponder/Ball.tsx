import * as React from 'react';
import { View, StyleSheet, PanResponder, Animated } from 'react-native';

export interface BallProps {
}

export interface BallState {
    panResponder: any
    position: any
}

export default class BallComponent extends React.Component<BallProps, BallState> {
    constructor(props: BallProps) {
        super(props);
        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy });
            }
        });
        this.state = {
            panResponder,
            position
        };
    }

    public render() {
        let handles = this.state.panResponder.panHandlers;
        return (
            <Animated.View
                style={[styles.ball, this.state.position.getLayout()]}
                {...handles}
            />
        );
    }
}
const styles = StyleSheet.create({
    ball: {
        height: 80,
        width: 80,
        borderColor: 'black',
        borderRadius: 40,
        borderWidth: 40
    },
});
