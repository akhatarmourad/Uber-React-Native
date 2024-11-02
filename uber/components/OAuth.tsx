import { View, Text, Image } from "react-native";
import CustomButton from "./CustomButton";
import { icons } from "@/constants";

const OAuth = () => {

    const handleGoogleAuth = async () => {}

    return (
        <View className="my-3">
            {/* Title */}
            <View className="flex flex-row items-center justify-center gap-x-3">
                <View className="flex-1 h-[1px] bg-neutral-100" />
                <Text className="text-lg">Or</Text>
                <View className="flex-1 h-[1px] bg-neutral-100" />
            </View>

            {/* Google */}
            <CustomButton 
                title="Login with Google"
                className="mt-3 w-full shadow-none font-JakartaMedium"
                bgVariant="outline"
                textVariant="primary"
                IconLeft={() => (<Image source={icons.google} resizeMode="contain" className="w-5 h-5 mr-2" />)}
                onPress={handleGoogleAuth}
            />
        </View>
    );
}

export default OAuth;