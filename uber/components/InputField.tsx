import { KeyboardAvoidingView, TouchableWithoutFeedback, View, Text } from "react-native";

const InputField = ({ label, labelStyle }: any) => {
    return (
        <KeyboardAvoidingView>
            <TouchableWithoutFeedback>
                <View className={`${labelStyle} w-full my-2`}>
                    <Text className="text-lg mb-3 font-JakartaSemiBold">{label}</Text>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

export default InputField;