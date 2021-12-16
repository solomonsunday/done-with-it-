import React from 'react'
import { View } from 'react-native'
import ErrorMessage from './ErrorMessage'
import ImageInputList from '../ImageInputList'
import { useFormikContext } from 'formik'

const FormImagepicker = ({ name }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUris = values[name];

    const handleAdd = (uri) => {
        return setFieldValue(name, [...imageUris, uri]);
    }

    const handleRemove = (uri) => {
        setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri));
    }
    return (
        <>
            <ImageInputList
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default FormImagepicker;
