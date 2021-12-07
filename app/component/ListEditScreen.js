import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from "yup";

import AppForm from './AppForm';
import AppFormField from './AppFormField';
import SubmitButton from './SubmitButton';
import AppFormPicker from './AppFormPicker';

import Screen from './Screen';
import AppPicker from './AppPicker';

const ValidationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category")
});


const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 1 },
    { label: "Camera", value: 3 }
];


const ListEditScreen = () => {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                }}
                onSubmit={(values) => console.log(values)}
                ValidationSchema={ValidationSchema}
            >

                <AppFormField
                    maxLength={255} name="title"
                    placeholder="Title" />

                <AppFormField
                    keyboardType="numeric"
                    placeholder="Price"
                    maxLength={8}
                    name="price"
                    placeholder="Price"

                />

                <AppFormPicker
                    items={categories}
                    name="category"
                    placeholder="Category"
                />

                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description" />
                <SubmitButton title="Post" />
            </AppForm>

        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export default ListEditScreen
