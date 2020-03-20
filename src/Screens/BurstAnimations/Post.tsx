import * as React from 'react';
import {
    Animated,
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

export interface PostProps {
    height: number,
    title: string,
    comment: string,
    index: number
}

export interface PostState {
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const CARD_GUTTER_VERTICAL = 16;
const CARD_GUTTER_HORIZONTAL = 8;
const CARD_WIDTH = DEVICE_WIDTH - 32;
const SCROLL_INTERVAL = CARD_WIDTH + CARD_GUTTER_HORIZONTAL;

export default class PostComponent extends React.Component<PostProps, PostState> {
    scrollValue = new Animated.Value(0)

    /*
     * Then we create the onScroll function referenced earlier.
     * There’s a crazy chain of stuff going on in there, 
     * but all you need to know is that it passes the x-position of our ScrollView
     * to our new scrollValue variable.
    */

    onScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: this.scrollValue } } }],
        { useNativeDriver: true }
    )

    fadeIn = () => {
        const FULL_OPACITY = 1;

        return {
            opacity: this.scrollValue.interpolate({
                inputRange: [
                    0,
                    SCROLL_INTERVAL,
                ],
                outputRange: [0, FULL_OPACITY],
                extrapolate: 'clamp'
            })
        };
    }

    elevate = () => {
        return {
            zIndex: this.scrollValue.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 2],
                extrapolate: 'clamp'
            })
        };
    }

    verticallyAlignComment = () => {
        const ACTIVE_POSITION = -this.props.index * (this.props.height + CARD_GUTTER_VERTICAL)
        // console.log(ACTIVE_POSITION);
        
        return {
            transform: [{
                translateY: this.scrollValue.interpolate({
                    inputRange: [
                        0,
                        SCROLL_INTERVAL,
                    ],
                    outputRange: [0, ACTIVE_POSITION],
                    extrapolate: 'clamp'
                }),
            }],
        };
    }


    public render() {
        return (
            //In this line we write the this.elevate(), but not working, Only works if dont use the native Driver
            <Animated.View style={[styles.container, { height: this.props.height }, this.elevate(), this.verticallyAlignComment()]}>
                <Animated.View style={[styles.overlay, this.fadeIn()]} pointerEvents="none" />
                <Animated.ScrollView
                    horizontal
                    style={styles.scrollContainer}
                    contentContainerStyle={styles.contentContainer}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={SCROLL_INTERVAL}
                    decelerationRate="fast"
                    scrollEventThrottle={1}
                    onScroll={this.onScroll}>

                    {/* This is our main title card */}
                    <View style={styles.card}>
                        <Image
                            style={styles.image}
                            width={CARD_WIDTH}
                            height={this.props.height - 52}
                            source={{ uri: 'https://picsum.photos/200/300' }}
                        />
                        <Text style={styles.text}>{this.props.title}</Text>
                    </View>

                    {/* And this is our one and only comment */}
                    <View style={styles.card}>
                        <Text style={styles.text}>{this.props.comment}</Text>
                    </View>

                </Animated.ScrollView>
            </Animated.View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginVertical: CARD_GUTTER_VERTICAL / 2,
    },

    scrollContainer: {
        overflow: 'visible'
    },

    contentContainer: {
        paddingHorizontal: 12,
    },
    overlay: {
        opacity: 0,
        backgroundColor: '#fff',
        position: 'absolute',
        width: DEVICE_WIDTH,
        height: 99999,
        top: -99999 / 2,
        left: 0,
    },
    card: {
        marginHorizontal: CARD_GUTTER_HORIZONTAL / 2,
        borderRadius: 16,
        width: CARD_WIDTH,
        backgroundColor: '#eee',
        overflow: 'hidden'
    },

    image: {
        resizeMode: 'cover',
        backgroundColor: '#ddd'
    },

    text: {
        marginVertical: 12,
        marginHorizontal: 16,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600'
    }
});