import { KeyboardAvoidingView, TouchableWithoutFeedback, View, Text, Image, TextInput, Platform, Keyboard } from "react-native";

const InputField = ({ label, labelStyle, icon, containerStyle, iconStyle, inputStyle, secureTextEntry, placeholder, value, onChangeText, ...props}: any) => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "iso" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className={`${labelStyle} w-full my-2`}>
                    <Text className="text-lg mb-3 font-JakartaSemiBold">{label}</Text>
                    <View className={`${containerStyle} flex flex-row justify-start items-center bg-neutral-50 rounded-xl border border-neutral-100 focus:border-green-500 relative`}>
                        {icon && <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />}
                        <TextInput
                            className={`${inputStyle} rounded-xl flex-1 p-3 text-left text-[15px]`}
                            placeholder={placeholder}
                            value={value}
                            onChangeText={onChangeText}
                            secureTextEntry={secureTextEntry}
                            {...props}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

export default InputField;