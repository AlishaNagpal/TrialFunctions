import * as React from 'react';
import { View, StyleSheet, Animated, Image, TouchableOpacity, Text } from 'react-native';
import ClapBubble from './ClapBubble'
export interface ClapButtonProps {
}

export interface ClapButtonState {
    count: number,
    claps: Array<any>
}

export default class ClapButtonComponent extends React.Component<ClapButtonProps, ClapButtonState> {
    constructor(props: ClapButtonProps) {
        super(props);
        this.state = {
            count: 0,
            claps: []
        };
    }

    clap() {
        let count = this.state.count;
        let claps = this.state.claps;
        count++;
        claps.push(count);
        this.setState({ count });
    }
    renderClaps() {
        return this.state.claps.map(countNum => (
            <ClapBubble key={countNum} count={countNum} animationComplete={this.animationComplete.bind(this)} />
        ));
    }

    animationComplete(countNum: number) {
        var claps = this.state.claps;
        claps.splice(claps.indexOf(countNum), 1);
        this.setState({ claps });
    }

    keepClapping() {
        this.keepclap = setInterval(() => this.clap(), 150);
    }

    stopClapping() {
        if (this.keepclap) {
            clearInterval(this.keepclap);
        }
    }

    public render() {
        return (
            <View style={styles.container}>
                {this.renderClaps()}
                <TouchableOpacity
                    onPress={() => this.clap()}
                    onPressIn={() => this.keepClapping()}
                    onPressOut={() => this.stopClapping()}
                    activeOpacity={0.6}
                    style={styles.clapbutton}
                >
                    <Image style={styles.clap} source={require('../../Assets/clap.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    clapText: {
        color: "white",
        fontSize: 20
    },
    clapbutton: {
        position: "absolute",
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: "#ecf0f1",
        bottom: 40,
        left: 100,
        elevation: 3,
        justifyContent: "center",
        alignItems: "center"
    },
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
    clap: {
        height: 60,
        width: 50
    }
});
