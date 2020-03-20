import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface VeganAnimationProps {
}

export interface VeganAnimationState {
}

export default class VeganAnimationComponent extends React.Component<VeganAnimationProps, VeganAnimationState> {
  constructor(props: VeganAnimationProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View>
         <Text>VeganAnimation Component</Text>
      </View>
    );
  }
}
