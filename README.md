# react-native-according-smashup

 This is React native javaScript component which is used to expand the list hide/show the list etc...

## Installation

    npm install react-native-according-smashup

    yarn add react-native-according-smashup
    
    
## Usage

    import {SmashUp,Head, Body, ClickToExpand} from 'react-native-according-smashup';

    //Simple collapsable
    <SmashUp>
	    <Head>
	      <View>
	        <Text>Click here</Text>
	      </View>
	    </Head>
	    <Body>
	      <Text>Ta daa!</Text>
	    </Body>
	</SmashUp>
    
    //click to Expand  
    <ClickToExpand
            list={this.state.list}
            header={this._head}
            body={this._body}
            keyExtractor={item => item.key}
          />

SmashUp Components are considered as View , so you can use all the props of the View Component like style.
## Demo 



***Simple Collapse***

    import {  View,Text } from 'react-native';
    import { SmashUp, Head, Body } from "react-native-according-smashup";
    import { Thumbnail, List, ListItem, Separator } from 'native-base';
    
    <View>
        <SmashUp>
          <Head>
            <Separator bordered>
              <Text>FORWARD</Text>
            </Separator>
          </Head>
          <Body>
            <ListItem >
              <Text>Aaron Bennet</Text>
            </ListItem>
            <ListItem>
              <Text>Claire Barclay</Text>
            </ListItem>
            <ListItem last>
              <Text>Kelso Brittany</Text>
            </ListItem>
          </Body>
        </SmashUp>
        <SmashUp>
          <Head>
            <Separator bordered>
              <Text>FORWARD</Text>
            </Separator>
          </Head>
          <Body>
            <ListItem >
              <Text>Aaron Bennet</Text>
            </ListItem>
            <ListItem>
              <Text>Claire Barclay</Text>
            </ListItem>
            <ListItem last>
              <Text>Kelso Brittany</Text>
            </ListItem>
          </Body>
        </SmashUp>
      </View>




***Click To Expand List***
    
    import {ClickToExpand} from "react-native-according-smashup";
    import { Separator } from 'native-base';
    import { View, Text} from 'react-native';
    
    this.state={
      list:[
          {
            id:1,
            title: 'Getting Started',
            body: 'React native according?smashUp component, very good to use in toggles & show/hide content'
          },
          {
            id:2,
            title: 'Components',
            body: 'ClickToExpand,SmashUp,Head & Body'
          }
          ],
    }
    
    _head(item){
	    return(
	        <Separator bordered style={{alignItems:'center'}}>
	          <Text>{item.title}</Text>
	        </Separator>
	    );
    }
    
    _body(item){
	    return (
	        <View style={{padding:10}}>
	          <Text style={{textAlign:'center'}}>{item.body}</Text>
	        </View>
	    );
    }
    
    render() {
	    return (
	          <ClickToExpand
	            list={this.state.list}
	            header={this._head}
	            body={this._body}
                keyExtractor={item => `${item.id}`}
	          />
	    );
    }


## Components

**Head & Body**
you can use Head and Body as a view and you can styule it as per your prefences when you touched the header it will SmashUp(that means it will expand) the body will be appear 

**Collapse**
yopu need to use SmashUp to wrap your Head and body 

| Props Name | Default | Type | Description |
| :--: | :--: | :--: | :------------------------- |
| isExpanded | false | boolean | show the Body if true |
| disabled | false | boolean | disable the click on the collapse header if true |
| onToggle | ()=> boolean | Function(isExpanded:boolean) | this function take a input in boolean |
| handleLongPress | void() | Function() | it handless the longPress if user longPress on header at that time this function calls |
| touchableOpacityProps | {} | Object | you can pass extra props to yopu touch events

if you want to change the state of parent then you can use the onToggle or isExoanded as an input and output to syncronise the parenr srare and child state

**ClickToExpand**

ClickToExpand components allow you to show an accordion with list of sections (head&body)

It's based on FlatList. Which means all the props related to FlatList are supported.

| Props Name | Default | Type | Description |
| :--: | :----- | :--: | :------------------------- |
| list or data | [] | Array |  |
| header | (item, index, isExpanded)=>function | Function | this function takes an array as an input and render the array into header |
| body | (item, index, isExpanded)=>function | Function | this function takes an array as an input and render the array into body  |
| onToggle | (keyExtractor(item, index) or index, index, isExpanded) => undefined | Function ||
| expandedKey | undefined | Any | |
| expandedIndex | undefined | number | |
| isDisabled | (item, index) => undefined | Function | this function will allow boolean value and it will disable the List |
