export interface Ship {
    level: number,
    name: string,
    nation: string,
    description: {
        localization: {
            en: string
        }
    },
    icons: {
        large: string
    }
}

export interface ShipSlice {
    ships: {[key: string]: Ship},
    isLoading: boolean,
    keysOfShips: string[],
    currentRenderList: Ship[]
}