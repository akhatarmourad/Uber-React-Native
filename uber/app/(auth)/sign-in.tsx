/* eslint-disable prettier/prettier */
import { useState } from "react";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { Text, View, ScrollView, Image } from "react-native"
import OAuth from "@/components/OAuth";
import { Link } from "expo-router";
import CustomButton from "@/components/CustomButton";

const SignIn = () => {

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const onSignInPress = async () => {}

  return (
    <ScrollView className="flex-1 bg-white">
        <View className="flex-1 bg-white">
          {/* Image & Title */}
          <View className="relative w-full h-[250px]">
            <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
            <Text className="absolute bottom-5 left-5 text-2xl font-JakartaBold text-green-500">Welcome 😎</Text>
          </View>

          {/* Input fields */}
          <View className="p-5">
            <InputField 
              label="Email"
              placeholder="Enter your email"
              icon={icons.person}
              value={form.username}
              onChangeText={(value: any) => setForm({...form, username: value})}
              secureTextEntry={false}
            />

            <InputField 
              label="Password"
              palceholder="Enter your password"
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
