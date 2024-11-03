/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { Text, View, ScrollView, Image } from "react-native";
import { useSignIn } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router';
import OAuth from "@/components/OAuth";
import CustomButton from "@/components/CustomButton";

const SignIn = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) {
      return
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password:form.password,
      })

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace('/(root)/(tabs)/home');
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
    }
  }, [isLoaded, form.email, form.password])

  return (
    <ScrollView className="flex-1 bg-white">
        <View className="flex-1 bg-white">
          {/* Image & Title */}
          <View className="relative w-full h-[250px]">
            <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
            <View className="flex flex-row items-end justify-start gap-x-2 absolute left-5 bottom-5">
              <Text className="text-3xl font-JakartaBold text-black">Welcome to</Text>
              <Text className="text-3xl font-JakartaBold text-green-500">Drivio</Text>
            </View>
          </View>

          {/* Input fields */}
          <View className="p-5">
            <InputField 
              label="Email"
              placeholder="Enter Email"
              icon={icons.person}
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
            <CustomButton title="Sign In" onPress={onSignInPress} className="mt-5" />

            {/* OAuth Button */}
            <OAuth />

            {/* Link to Login */}
            <Link href="/(auth)/sign-up" className="text-lg text-center text-general-200 mt-3">
                <Text>Don't have an account ? </Text>
                <Text className="text-green-500">Sign Up</Text>
            </Link>
          </View>
        </View>
    </ScrollView>
  )
}

export default SignIn;
