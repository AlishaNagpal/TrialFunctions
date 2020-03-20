import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Ball from './Ball'

export interface CallBallProps {
}

export interface CallBallState {
}

export default class CallBallComponent extends React.Component<CallBallProps, CallBallState> {
    constructor(props: CallBallProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <View style={styles.container}>
                <Ball />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
