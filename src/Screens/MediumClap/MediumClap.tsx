import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import ClapButton from './ClapButton'

export interface MediumClapProps {
}

export interface MediumClapState {
}

export default class MediumClapComponent extends React.Component<MediumClapProps, MediumClapState> {
  constructor(props: MediumClapProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
        <View style={styles.container}>
        <ClapButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "orange"
    }
  });
