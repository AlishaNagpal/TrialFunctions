import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ListItem from './ListItem';
import listData from './Data'

export default class SwipeableList extends Component {
  constructor(props) {
    super(props);
    this.success = this.success.bind(this);
    this.setScrollEnabled = this.setScrollEnabled.bind(this);

    this.state = {
      enable: true,
      data: listData,
    };
  }

  renderSeparator() {
    return (
      <View style={styles.separatorViewStyle}>
        <View style={styles.separatorStyle} />
      </View>
    );
  }

  success(key) {
    const data = this.state.data.filter(item => item.key !== key);
    this.setState({
      data,
    });
  }

  setScrollEnabled(enable) {
    this.setState({
      enable,
    });
  }

  renderItem(item) {
    return (
      <ListItem
        text={item.key}
        success={this.success}
        setScrollEnabled={enable => this.setScrollEnabled(enable)}
      />
    );
  }

  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.state.data}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={({item}) => this.renderItem(item)}
        scrollEnabled={this.state.enable}
      />
    );
  }
}

const styles = StyleSheet.create({
  separatorViewStyle: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  separatorStyle: {
    backgroundColor: '#000',
    margin:10
  },
  list: {
    flex: 1,
    marginTop: 32,
  },
});