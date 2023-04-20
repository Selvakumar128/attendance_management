import React, { useState } from "react";
import { FlatList,StyleSheet,Text,View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/LIstItemDeleteAction";
const Messages = [
    {
      id: 1,
      title: "Title1",
      description: "Description1",
      image: require("../assets/download.jpeg"),
    },
    {
      id: 2,
      title: "Title2",
      description: "Description2",
      image: require("../assets/download.jpeg"),
    },
  ];
  
const MessagesScreen = () => {
  const [message,setMessage]=useState(Message)
  const [refreshing,setRefreshing]=useState(false)

  function handleDelete(item) {
    console.log('clicked',item);
  setMessage(Messages.filter(i=>item.id==i.id)) }
  return <FlatList data={Messages}
                   keyExtractor={(message)=>message.id.toString()}
                   renderItem={({item})=>(
                   <ListItem
                    image={item.image} 
                    title={item.title} 
                    subTitle={item.description}
                    onPress={()=>console.log('selected item',item)}
                    renderLeftActions={()=>(<ListItemDeleteAction 
                                        onPress={()=>handleDelete(item)}/>)}
        
                    />
                    
                   )}
          ItemSeparatorComponent={ListItemSeparator}
               refreshing={refreshing}
               onRefresh={setRefreshing({
                id: 2,
                title: "Title2",
                description: "Description2",
                image: require("../assets/download.jpeg"),
              })
              

               }
           
  ></FlatList>;
};
 
const styles = StyleSheet.create({});
export default MessagesScreen;
 
