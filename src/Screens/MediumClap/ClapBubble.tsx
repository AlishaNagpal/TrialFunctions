import * as React from 'react';
import {
    Text,
    StyleSheet,
    Animated
} from "react-native";

export interface ClapBubbleProps {
    count: number,
    animationComplete: Function
}

export interface ClapBubbleState {
    yPosition: any,
    opacity: any,
    count: number,
    claps: Array<any>
}

export default class ClapBubbleComponent extends React.Component<ClapBubbleProps, ClapBubbleState> {
    constructor(props: ClapBubbleProps) {
        super(props);
        this.state = {
            yPosition: new Animated.Value(0),
            opacity: new Animated.Value(0),
            count: 0,
            claps: []
        };
    }

    componentDidMount() {
        Animated.parallel([
            Animated.timing(this.state.yPosition, {
                toValue: -150,
                duration: 500
            }),
            Animated.timing(this.state.opacity, {
                toValue: 1,
                duration: 500
            })
        ]).start(
            () => {
                setTimeout(() => {
                    this.props.animationComplete(this.props.count);
                }, 500);
            }
        );
    }

    public render() {
        let animationStyle = {
            transform: [{ translateY: this.state.yPosition }],
            opacity: this.state.opacity
        };
        return (
            <Animated.View style={[animationStyle, styles.clapbubble]}>
                <Text style={styles.clapText}> + {this.props.count}</Text>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    clapbubble: {
        elevation: 4,
        backgroundColor: "#55BE6F",
        position: "absolute",
        height: 60,
        width: 60,
        borderRadius: 30,
        bottom: 40,
        left: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    clapText: {
        color: "white",
        fontSize: 20
    }
});
