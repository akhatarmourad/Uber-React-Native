/* eslint-disable prettier/prettier */
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { Text, View } from "react-native";
import { Link } from 'expo-router';

const Home = () => {

    const { user } = useUser();

    return (
        <View>
            <SignedIn>
                <Text>Signed In, {user?.emailAddresses[0].emailAddress}</Text>
            </SignedIn>
            <SignedOut>
                <Text>Signed Out</Text>
            </SignedOut>
        </View>
    );
}

export default Home;