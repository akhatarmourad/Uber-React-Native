/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import '../../styles/global.css';
import { router } from "expo-router";
import Swiper from 'react-native-swiper';
import { useRef, useState } from "react";
import { data, onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Welcome = () => {

    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const isLastSlide = onboarding.length - 1 === activeIndex;

    return (
        <SafeAreaView className="flex h-full items-center justify-between bg-white">
            {/* Skip button */}
            <TouchableOpacity 
                className="flex w-full items-end justify-end p-5"
                onPress={() => { router.replace("/(auth)/sign-up") }}
            >
                <Text className="text-green-500 font-JakartaBold text-md">Skip</Text>
            </TouchableOpacity>
            
            {/* Welcome text */}
            <Swiper 
                ref={swiperRef}
                loop={false}
                dot={<View className="w-[32px] h-[4px] rounded-full mx-1 bg-green-200" />}
                activeDot={<View className="w-[32px] h-[4px] rounded-full mx-1 bg-green-500" />}
                onIndexChanged={(index) => setActiveIndex(index)}
            >
                {
                    data.onboarding.map((item, index) => {
                        return (
                            <View key={index} className="flex items-center justify-center">
                                <Image source={item.image} className="w-full h-[300px]" resizeMode="contain" />
                                <View className="flex w-full items-center justify-center mt-10">
                                    <Text className="text-green-500 font-JakartaBold text-3xl font-bold text-center mx-8">{item.title}</Text>
                                </View>
                                <Text className="text-md font-JakartaMedium text-center text-slate-400 mx-8 mt-3">{item.description}</Text>
                            </View>
                        );
                    })
                }
            </Swiper>

            {/* Next Button */}
            <CustomButton 
                title={isLastSlide ? "Get Started" : "Next"}
                onPress={() => isLastSlide ? router.replace("/(auth)/sign-up") : swiperRef.current?.scrollBy(1)} 
                className="w-full mx-5 mt-10 mb-5" 
            />
        </SafeAreaView>
    );
}

export default Welcome;