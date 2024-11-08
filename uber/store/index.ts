import { LocationStore } from "@/types/type";
import { create } from "zustand";

export const useLocationStore = create<LocationStore>((set) => ({
    userAddress: null,
    userLatitude: null,
    userLongitude: null,
    setUserLocation: ({ address, latitude, longitude} : { address: string, latitude: number, longitude: number }) => {
        set(() => ({ userAddress: address, userLatitude: latitude, userLongitude: longitude  }))
    },

    destinationAddress: null,
    destinationLatitude: null,
    destinationLongitude: null,
    setDestinationLocation: ({ address, latitude, longitude }: { address: string, latitude: number, longitude: number }) => {
        set(() => ({ destinationAddress: address, destinationLatitude: latitude, destinationLongitude: longitude}))
    }
}));