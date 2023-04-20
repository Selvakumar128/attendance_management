import React,{useState} from 'react';
import { View, StyleSheet,Text,Button ,TextInput} from 'react-native';
// import MainScreen from './screens/MainScreen';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SelectList } from 'react-native-dropdown-select-list'
import RadioBox from '../components/RadioBox';
// import RadioGroup from 'react-native-radio-buttons-group';

function AttendenceScreen() {

    
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };

    const [selected, setSelected] = React.useState("");
    
    const data = [
        {key:'1', value:'9:30am-10:45am', disabled:false},
        {key:'2', value:'10:50am-11:45am'},
        {key:'3', value:'11:45am-1.00pm'},
        {key:'4', value:'1:30pm-2:30pm', disabled:false},
        {key:'5', value:'2:30pm-3:30pm'},

    ]


   
    return (
      <View style={styles.container}>
          <View>
          <Text style={styles.Text}>ATTENDENCE SCREEN</Text>
          <Text></Text>
          <Text>Reg.No</Text>
    <TextInput placeholder="Reg.no" onPress={()=>console.log(data)}></TextInput>
    <Text>Name:</Text>
    <TextInput placeholder="ENTER YOUR NAME"></TextInput>
          <Text>No.Of.Student Present:</Text>
    <TextInput placeholder="Present"></TextInput>
    <Text>No.Of.Student Absent:</Text>
    <TextInput placeholder="Absent"></TextInput>
        <Button title="Show Date Picker" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          onPress={()=>console.log(data)}
        />
      </View>
      <View>
       
        <Text>Time:</Text>
 <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
       
    />
    <RadioBox></RadioBox>
<Button
//   onPress={onPressLearnMore}
  title="SUBMIT"
  color="#841584"

/>



      </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingTop:30,
    },
    Text:{
      color:'orange',
      fontSize:20,
      backgroundColor:'black',
      justifyContent:'center',
      alignItems:"center",
      paddingTop:30,
    }
  });

export default AttendenceScreen;