import * as React from 'react';
import { Dimensions, ScrollView } from 'react-native';

export interface BurstAnimationProps {
}

export interface BurstAnimationState {
}

const DEVICE_HEIGHT = Dimensions.get('window').height;
import Post from './Post'

export default class BurstAnimationComponent extends React.Component<BurstAnimationProps, BurstAnimationState> {
    state = {
        posts: [
            {
                title: 'Peace on earth declared',
                comment: 'Piece of cake'
            },
            {
                title: 'Cats superior to dogs, find scientists',
                comment: '*Goes back to sleep* — cats everywhere'
            },
            {
                title: 'Pineapple on pizza ruled a flavour hazard',
                comment: 'But what about beetroot on burgers?'
            },
        ]
    }

    public render() {
        return (
            <ScrollView contentInsetAdjustmentBehavior="scrollableAxes">
                {this.state.posts.map((post, i) => {
                    return <Post {...post} height={DEVICE_HEIGHT / 3.75} index={i} key={i} />
                })}
            </ScrollView>
        );
    }
}
