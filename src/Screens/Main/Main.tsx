import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, InteractionManager } from 'react-native';

export interface MainProps {
  navigation: any
}

export interface MainState {
}

export default class MainComponent extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log('in component did mount of Main');

    InteractionManager.runAfterInteractions(() => {
      // Navigation is done animating
      // Synchronous function

      console.log('in component did mount of InteractionManager Main');
    })
  }

  public render() {
    return (
      <View style={styles.container} >
        <Text style={styles.text} >Main Component</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('HOME')}>
          <Text style={styles.text} >Go To Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontSize: 22,
    color: 'green',
    margin: 20
  }
})
