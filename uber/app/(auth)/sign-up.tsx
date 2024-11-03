/* eslint-disable prettier/prettier */
import { useState } from "react";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { Text, View, ScrollView, Image, Alert } from "react-native";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";
import { useSignUp } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { ReactNativeModal } from "react-native-modal";

const SignUp = () => {

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const { isLoaded, signUp, setActive } = useSignUp();
    const router = useRouter();

    const [verification, setVerification] = useState({
        state: "default",
        error: "",
        code: "",
    });

    // Sign Up logic
    const onSignUpPress = async () => {
        if(!isLoaded) return;
        
        try {
            await signUp.create({emailAddress: form.email, password: form.password});
            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
            setVerification({...verification, state: "pending"});
        }
        catch(error: any) {
            Alert.alert("Error", error.errors[0].longMessage);
        }
    }

    // Sign Up Verification logic
    const onPressVerify = async () => {
        if(!isLoaded) return;

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({ code: verification.code });

            if (completeSignUp.status === 'complete') {
                await setActive({ session: completeSignUp.createdSessionId });
                setVerification({...verification, state: "success"});
              } else {
                setVerification({...verification, state: "failed", error: "Verification Failed !"});
                console.error(JSON.stringify(completeSignUp, null, 2));
              }
        }
        catch(error: any) {
            setVerification({...verification, state: "failed", error: error.errors[0].longMessage});
        }
    }

    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                {/* Image & Title */}
                <View className="relative w-full h-[250px]">
                    <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
                    <Text className="absolute bottom-5 left-5 text-3xl text-center font-JakartaBold text-green-500">Create An Account</Text>
                </View>

                {/* Input fields */}
                <View className="p-5">
                    <InputField 
                        label="Username"
                        placeholder="Enter Username"
                        icon={icons.person}
                        value={form.username}
                        onChangeText={(value: any) => setForm({...form, username: value})}
                        secureTextEntry={false}
                    />

                    <InputField 
                        label="Email"
                        placeholder="Enter Email"
                        icon={icons.email}
                        value={form.email}
                        onChangeText={(value: any) => setForm({...form, email: value})}
                        secureTextEntry={false}
                    />

                    <InputField 
                        label="Password"
                        placeholder="Enter Password"
                        icon={icons.lock}
                        value={form.password}
                        onChangeText={(value: any) => setForm({...form, password: value})}
                        secureTextEntry={true}
                    />

                    {/* Sign Up Button */}
                    <CustomButton title="Sign Up" onPress={onSignUpPress} className="mt-5" />

                    {/* OAuth Button */}
                    <OAuth />

                    {/* Link to Login */}
                    <Link href="/(auth)/sign-in" className="text-lg text-center text-general-200">
                        <Text>Already have an account ? </Text>
                        <Text className="text-green-500">Sign In</Text>
                    </Link>
                </View>

                {/* Pending Verification Modal */}
                <ReactNativeModal 
                    isVisible={verification.state === "pending"}
                    onModalHide={() => {
                        if(verification.state === "success") setShowSuccessModal(true);
                    }}
                >
                    <View className="bg-white px-7 py-9 rounded-3xl">
                        <View>
                            <Text className="text-center font-JakartaBold text-3xl">Verification</Text>
                            <Text className="text-center text-gray-400">We have sent you a verification code to {form.email}</Text>
                        </View>
                        <InputField
                            placeholder="Enter Verificaton Code"
                            value={verification.code} 
                            onChangeText={(value: any) => setVerification({...verification, code: value})}
                            secureTextEntry={false}
                            icon={icons.lock}
                            keyboardType="numeric"
                        />

                        {/* Show Error Message */}
                        {verification.error && (
                            <Text className="text-red-500 text-center mt-2 text-sm">{verification.error}</Text>
                        )}

                        <CustomButton title="Verify" onPress={onPressVerify} className="mt-5" />
                    </View>
                </ReactNativeModal>

                {/* Verification Modal */}
                <ReactNativeModal isVisible={showSuccessModal}>
                    <View className="flex flex-col items-center justify-between gap-y-6 bg-white p-7 rounded-3xl min-h-[300px]">
                        <View className="flex flex-col gap-y-2 items-center justify-center">
                            <Image source={images.check} className="w-[90px] h-[90px] mx-auto" />
                            <Text className="text-center text-3xl font-JakartaSemiBold text-green-500">Success !</Text>
                            <Text className="text-base text-gray-400 text-center">Your account has been verified successfully. You can now browse to the home.</Text>
                        </View>

                        <CustomButton 
                            title="Go to Home"
                            onPress={() => {
                                setShowSuccessModal(false);
                                router.push('/(root)/(tabs)/home');
                            }}
                        />
                    </View>
                </ReactNativeModal>
            </View>
        </ScrollView>
    );
}

export default SignUp;