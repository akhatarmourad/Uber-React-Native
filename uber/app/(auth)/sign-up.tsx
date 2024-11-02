/* eslint-disable prettier/prettier */
import InputField from "@/components/InputField";
import { images } from "@/constants";
import { Text, View, ScrollView, Image } from "react-native";

const SignUp = () => {
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
                    <InputField label="Username" />
                </View>
            </View>
        </ScrollView>
    );
}

export default SignUp;