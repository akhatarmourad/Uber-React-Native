/* eslint-disable prettier/prettier */
import { useState } from "react";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { Text, View, ScrollView, Image } from "react-native";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";
import { useSignUp } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'

const SignUp = () => {

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const { isLoaded, signUp, setActive } = useSignUp();
    const router = useRouter();

    const [pendingVrification, setPendingVerification] = useState(false);
    const [code, setCode] = useState('');

    const onSignUpPress = async () => {
        if(!isLoaded) return;
        
        try {
            await signUp.create({form});
            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
            setPendingVerification(true);
        }
        catch(error: any) {
            console.error(JSON.stringify(error, null, 2));
        }
    }

    const onPressVerify = async () => {
        if(!isLoaded) return;

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({ code, });

            if (completeSignUp.status === 'complete') {
                await setActive({ session: completeSignUp.createdSessionId })
                router.replace('/')
              } else {
                console.error(JSON.stringify(completeSignUp, null, 2))
              }
        }
        catch(error: any) {
            console.error(JSON.stringify(error, null, 2));
        }
    }

    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                {/* Image & Title */}
                <View className="relative w-full h-[250px]">
                    <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
                    <Text className="absolute bottom-5 left-5 text-2xl font-JakartaBold text-green-500">Create An Account</Text>
                </View>

                {/* Input fields */}
                <View className="p-5">
                    <InputField 
                        label="Username"
                        placeholder="Enter your username"
                        icon={icons.person}
                        value={form.username}
                        onChangeText={(value: any) => setForm({...form, username: value})}
                        secureTextEntry={false}
                    />

                    <InputField 
                        label="Email"
                        placeholder="Enter your email"
                        icon={icons.email}
                        value={form.email}
                        onChangeText={(value: any) => setForm({...form, email: value})}
                        secureTextEntry={false}
                    />

                    <InputField 
                        label="Password"
                        placeholder="Enter your password"
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

                {/* Verification Modal */}
            </View>
        </ScrollView>
    );
}

export default SignUp;