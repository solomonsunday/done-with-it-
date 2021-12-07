import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import AppButton from '../component/AppButton';
import AppTextInput from '../component/AppTextInput';
import Screen from '../component/Screen';
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from '../component/AppText.android';
import ErrorMessage from '../component/ErrorMessage';
import { ForceTouchGestureHandler } from 'react-native-gesture-handler';
import AppFormField from '../component/AppFormField';
import SubmitButton from '../component/SubmitButton';
import AppForm from '../component/AppForm';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});


const LoginScreen = () => {

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo.png")}
            />
            <AppForm
                initialValues={{ email: " ", password: " " }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    name="email"
                    keyboardType="email-address"
                    placeholder="Email"
                    testContentType="emailAddrss"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    testContentType="password"
                />
                <SubmitButton title="Login" />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }

})

export default LoginScreen
