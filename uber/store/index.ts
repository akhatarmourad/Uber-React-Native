import { LocationStore, DriverStore, MarkerData } from "@/types/type";
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


export const useDriverStore = create<DriverStore>((set) => ({
    drivers: [] as MarkerData[],
    selectedDriver: null,
    setSelectedDriver: (driver_id: number) => { set(() => ({ selectedDriver: driver_id })) },
    setDrivers: (drivers: MarkerData[]) => { set(() => ({ drivers: drivers})) },
    clearSelectedDriver: () => { set(() => ({ selectedDriver: null })) }
}));