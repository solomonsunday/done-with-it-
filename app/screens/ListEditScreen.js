import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from "yup";
import AppForm from '../component/AppForm';
import AppFormField from '../component/forms/AppFormField';
import SubmitButton from '../component/forms/SubmitButton';
import AppFormPicker from '../component/forms/AppFormPicker';
import Screen from '../component/Screen';
import FormImagepicker from '../component/forms/FormImagepicker';
import useLocation from '../hooks/useLocation';

const ValidationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image.")
});


const categories = [
    {
        backgroundColor: "#fc5c65",
        icon: "floor-lamp",
        label: "Furniture",
        value: 1,
    },
    {
        backgroundColor: "#fd9644",
        icon: "car",
        label: "Cars",
        value: 2,
    },
    {
        backgroundColor: "#26de81",
        icon: "cards",
        label: "Games",
        value: 3,
    },
    {
        backgroundColor: "#2bcbba",
        icon: "shoe-heel",
        label: "Clothing",
        value: 4,
    },
    {
        backgroundColor: "#45aaf2",
        icon: "basketball",
        label: "Sports",
        value: 5,

    },
    {
        backgroundColor: "#a55eea",
        icon: "book-open-variant",
        label: "Books",
        value: 6,

    },
    {
        backgroundColor: "#778ca3",
        icon: "application",
        label: "Other",
        value: 7,

    },

];


const ListEditScreen = () => {
    const location = useLocation()

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: []
                }}
                onSubmit={(values) => console.log(location)}
                ValidationSchema={ValidationSchema}
            >
                <FormImagepicker name="images" />
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
