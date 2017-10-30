/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image, 
  Button,
  Alert,
  TextInput,
  FlatList,
  ListView,
  ListItem
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// const customTextButton = (
  
// );
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu'
});
 let instructions2 = 'asdfasdf';
 this.taskArray = ['Read More'];


export default class App extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      task: taskArray,
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(taskArray),
      newTodo: '',
    };
  }

  addTodoList = () => {
    if(this.state.newTodo !== ''){
    //console.log(this.state.newTodo);
    this.setState({ taskArray: this.state.task.push(this.state.newTodo) });
    this.setState({ dataSource: this.state.dataSource.cloneWithRows(taskArray) });
    this.setState({ newTodo : '' });
    console.log(taskArray);
    }else{ Alert.alert('Enter Something'); }
  }
  removeTodoList = (taskId) =>{
    console.log(taskId);
    // var array = this.state.task.splice(taskId, 1);
    this.setState({taskArray: this.state.task.splice(taskId, 1) });
    console.log(taskArray);
    this.setState({ dataSource: this.state.dataSource.cloneWithRows(taskArray) });
  }

  renderRow(rowData, sectionId, rowId) {
    return (
      <View style={styles.itemloutline}>
        <View style={{flex: 1}}>
          <Text style= {styles.item}>{rowData}</Text>
        </View>
        <View>
          {/* <Button 
            color="#adadad"
            onPress={() => this.removeTodoList(rowId)}
            title="-"> 
          </Button> */}
          <Icon.Button name="minus" size = {20} backgroundColor="#ffe0e0" color ="#adadad" onPress={() => this.removeTodoList(rowId)}>
            
          </Icon.Button> 
        </View>
      </View> 
    );
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <Text
        style={{color: '#adadad', fontSize: 25,fontWeight: 'bold',}}
        >TODOs</Text>
      </View>
      <View>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
      </View>

      <View style={{flex: 1, flexDirection: 'row', position: 'absolute', bottom: 5,  
      padding: 15}}>
        <View style={{flex: 1}} >
        <TextInput
          multiline = {true}
          style = {{backgroundColor: 'white', padding: 15 , height: 100, 
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#adadad',
          color: 'red',
          fontWeight: 'bold',
          fontSize: 25,
          }}
          onChangeText={(text) => this.setState({newTodo: text})} 
          value={this.state.newTodo}
        />
        </View>
        <View style={{width: 60, height: 100, marginTop: 20}} >
          <View style={{flex: 1, flexDirection: 'column',}}>
            <View  style = {{marginBottom: -10, marginLeft: 10}}>
              <Icon.Button name="plus" size = {30} backgroundColor="#ffe0e0" color ="#adadad" onPress={this.addTodoList}>
              
              </Icon.Button> 
            </View>
            <View >
              <Button
                color="#adadad"
                onPress={this.addTodoList}
                title="add">
              </Button>
            </View>
          </View>

          {/* <Icon.Button name="facebook" backgroundColor="#3b5998">
            <Text style={{fontFamily: 'Arial', fontSize: 15, bottom: 0}}>               add</Text>
          </Icon.Button> */}

        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#ffe0e0',
    marginTop: 30,
  },
  item: {
    fontSize: 30,
    height: 44,
    color: 'red',
    fontWeight: 'bold',
  },
  itemloutline:{
    borderBottomWidth: 1,
    borderBottomColor: '#adadad',
    margin: 15,
    flex: 1, flexDirection: 'row',
  },

});
