import React from 'react'
import {StyleSheet  } from 'react-native'
import AppTextInput from './AppTextInput'
import AppErrorMessage from './AppErrorMessage'
import {useFormikContext} from 'formik'

const CustomFormFeild = ({name,...otherprops}) => {
    const {setFieldTouched,handleChange,errors,touched} = useFormikContext()
    return (
        <>
        <AppTextInput
         icon={{name:name}} 
        //  placeholder={'enter email'} 
         onBlur={()=>(setFieldTouched(name))} 
         onChangeText={handleChange(name)}
         {...otherprops}
         >
         </AppTextInput>
         {/* {touched[name]&&<AppErrorMessage errro={errors[name]}></AppErrorMessage>} */}
         {/* <AppErrorMessage error={errors[name] } visible={touched[name]}></AppErrorMessage> */}
         {
            touched[name]&&<AppErrorMessage error={errors[name]}/>
         }
         </>
    );
}

export default CustomFormFeild;

const styles = StyleSheet.create({
    
})