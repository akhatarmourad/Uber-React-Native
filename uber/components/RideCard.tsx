import { icons } from "@/constants";
import { formatDate, formatTime } from "@/lib/utils";
import { View, Text, Image } from "react-native";

const RideCard = ({ride: {
    ride_id, origin_address, destination_address, origin_latitude, origin_longitude, destination_latitude,
    destination_longitude, ride_time, fare_price, payment_status, created_at, driver
}}: {ride: any}) => {
    return (
        <View className="bg-white p-3 rounded-xl shadow-sm shadow-neutral-300 flex items-center justify-center mb-4 mx-3">
            <View className="flex flex-col items-center justify-between">
                {/* Image + Origin + Destination */}
                <View className="flex flex-row items-center justify-between">
                    <Image 
                        source={{ uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600
                                  &height=400&center=lonlat:${destination_longitude}, ${destination_latitude}
                                  &zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
                                }} 
                        className="w-[80px] h-[90px] rounded-lg"
                    />

                    <View className="flex flex-col flex-1 mx-5">
                        <View className="flex flex-row items-center gap-x-2">
                            <Image source={icons.to} className="w-5 h-5" />
                            <Text className="text-md font-JakartaMedium" numberOfLines={1}>{origin_address}</Text>
                        </View>

                        <View className="flex flex-row items-center gap-x-2">
                            <Image source={icons.point} className="w-5 h-5" />
                            <Text className="text-md font-JakartaMedium" numberOfLines={1}>{destination_address}</Text>
                        </View>
                    </View>
                </View>

                {/* Ride Details */}
                <View className="bg-general-500 rounded-xl p-3 flex flex-col w-full justify-center mt-5">
                    <View className="flex flex-row items-center justify-between w-full pb-3 border-b border-gray-100">
                        <Text className="text-md font-JakartaMedium text-gray-800">Date & Time</Text>
                        <Text className="text-md font-JakartaMedium text-gray-400">{formatDate(created_at)}, {formatTime(ride_time)}</Text>
                    </View>

                    <View className="flex flex-row items-center justify-between w-full py-3 border-b border-gray-100">
                        <Text className="text-md font-JakartaMedium text-gray-800">Driver</Text>
                        <Text className="text-md font-JakartaMedium text-gray-400">{driver?.first_name} {driver?.last_name}</Text>
                    </View>

                    <View className="flex flex-row items-center justify-between w-full py-3 border-b border-gray-100">
                        <Text className="text-md font-JakartaMedium text-gray-800">Car Seats</Text>
                        <Text className="text-md font-JakartaMedium text-gray-400">{driver?.car_seats}</Text>
                    </View>

                    <View className="flex flex-row items-center justify-between w-full pt-3">
                        <Text className="text-md font-JakartaMedium text-gray-800">Payment Status</Text>
                        <Text 
                            className={`flex items-center justify-center text-center text-md px-[10px] pt-[2px] pb-[3px] capitalize font-JakartaMedium rounded-full ${payment_status === "paid" ? "bg-green-100 border border-green-500 text-green-500" : "bg-red-100 border border-red-500 text-red-500"}`}
                        >
                            {payment_status}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default RideCard;