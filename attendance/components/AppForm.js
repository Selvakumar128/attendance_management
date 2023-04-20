import React from 'react';
import {  } from 'react-native';
import { Formik } from 'formik';

const AppForm = ({initialValues,onSubmit,ValidationSchema,children}) => {
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={ValidationSchema}
        >
{()=>(
    <>
    {children}
    </>
)}
        </Formik>
    );
}

export default AppForm;