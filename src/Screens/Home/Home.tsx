import * as React from 'react';
import { View, Text, Button, InteractionManager } from 'react-native';
import NameShuffling from "./NameShuffling";

export interface HomeProps {
  navigation:any
}

export interface HomeState {
  name: any
}

export default class HomeComponent extends React.Component<HomeProps, HomeState> {
  names = [
    'Alice',
    'Bob'
  ];

  state = {
    name: ''
  }

  getName = () => {
    const index = Math.floor(Math.random() * (this.names.length));
    return (this.names[index]);
  }

  clearName = () => {
    this.setState({ name: null });
  }


  constructor(props: HomeProps) {
    super(props);
    this.state.name = this.getName();
  }


  componentDidMount() {
    console.log('in component did mount of Home');

    InteractionManager.runAfterInteractions(() => {
      // Navigation is done animating
      // Synchronous function

      console.log('in component did mount of InteractionManager Home');
    })

    // navigation.addListener('didFocus', () => {
    //   console.log("Through Did Focus HOME");

    // })

    // function Profile({ navigation }) {
    //   React.useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //       // Screen was focused
    //       // Do something
    //     });
    
    //     return unsubscribe;
    //   }, [navigation]);
    
    //   return <ProfileContent />;
    // }
  }

  public render() {
    console.log("in render of Home")
    return (
      <View>
        <NameShuffling
          name={this.state.name}
          clearName={this.clearName}
        />

        <Button
          onPress={() => {
            this.setState({
              name: this.getName()
            });
          }}
          title='Shuffle'
        />
      </View>
    );
  }
}
