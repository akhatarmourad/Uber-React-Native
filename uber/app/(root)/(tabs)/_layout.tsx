import { icons, images } from "@/constants";
import { Stack, Tabs } from "expo-router";
import { View, Image, ImageSourcePropType } from "react-native";

const TabIcon = ({ focused, source }: {focused: boolean, source: ImageSourcePropType}) => {
    return (
        <View className={`flex flex-row items-center justify-center rounded-full overflow-hidden ${focused ? "bg-white" : "bg-green-400"}`}>
            <View className={`flex flex-row items-center justify-center rounded-full w-12 h-12 ${focused ? "bg-white" : "bg-green-400"}`}>
                <Image source={source} tintColor={`${focused ? "#22c55e" : "white"}`} resizeMode="contain" className="w-7 h-7" />
            </View>
        </View>
    );
}

const Layout = () => {
    return (
        <Tabs 
            initialRouteName="home" 
            screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "#22c55e",
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#22c55e",
                    marginBottom: 10,
                    marginHorizontal: 10,
                    borderRadius: 20,
                    height: 65,
                    position: "absolute",
                    zIndex: 10,
                }
            }}
        >
            <Tabs.Screen 
                name="home"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.home} />,
                }}
            />

            <Tabs.Screen
                name="chat"
                options={{
                    title: "Chat",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.chat} />,
                }}
            />

            <Tabs.Screen
                name="rides"
                options={{
                    title: "Rides",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.list} />,
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.profile} />,
                }}
            />
        </Tabs>
    );
}

export default Layout;