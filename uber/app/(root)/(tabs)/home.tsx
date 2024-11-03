/* eslint-disable prettier/prettier */
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from 'expo-router';

const Home = () => {

    const { user } = useUser();

    return (
        <SafeAreaView className='bg-[#F6F8FA] flex-1'>
            <SignedIn>
                <Text>Signed In, {user?.emailAddresses[0].emailAddress}</Text>
            </SignedIn>
            <SignedOut>
                <Text>Signed Out</Text>
            </SignedOut>
        </SafeAreaView>
    );
}

export default Home;