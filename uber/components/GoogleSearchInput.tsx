import { GoogleInputProps } from "@/types/type";
import { Text, View } from "react-native";

const GoogleSearchInput = ({ icon, containerStyle, handlePress, initialLocation, textInputBackgroundColor }: GoogleInputProps) => {
    return (
        <View className={`flex flex-row items-center justiyf-center relative z-50 rounded-xl ${containerStyle}`}>
            <Text>Google Search Input</Text>
        </View>
    );
}

export default GoogleSearchInput;