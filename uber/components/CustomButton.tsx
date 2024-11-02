import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "@/types/type";

const CustomButton = (
        { title, onPress, bgVariant="primary", textVariant="default", IconRight, IconLeft, className, ...props }: ButtonProps
    ) => {
    
    const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
        switch (variant) {
          case "secondary":
            return "bg-gray-500";
          case "danger":
            return "bg-red-500";
          case "success":
            return "bg-green-500";
          case "outline":
            return "bg-transparent border-neutral-300 border-[0.5px]";
          default:
            return "bg-green-500";
        }
      };

      const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
        switch (variant) {
          case "primary":
            return "text-black";
          case "secondary":
            return "text-gray-100";
          case "danger":
            return "text-red-100";
          case "success":
            return "text-green-100";
          default:
            return "text-white";
        }
      };
    
    return (
        <TouchableOpacity 
            onPress={onPress} 
            className={`${className} ${getBgVariantStyle(bgVariant)} w-full rounded-xl flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 p-3`}
            {...props}
        >
            { IconLeft && <IconLeft /> }
            <Text className={`text-lg font-semibold ${getTextVariantStyle(textVariant)}`}>{title}</Text>
            { IconRight && <IconRight /> }
        </TouchableOpacity>
    );
}

export default CustomButton;