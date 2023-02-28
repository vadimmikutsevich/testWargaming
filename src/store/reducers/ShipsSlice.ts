import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ShipSlice, Ship } from "../../models";

export const fetchShips = createAsyncThunk(
    'ships/fetchShips',
    async (_, { rejectWithValue }) => {
        try {
        const response = await fetch('https://vortex.worldofwarships.eu/api/encyclopedia/en/vehicles/')

        const data = await response.json()
        return data.data

        } catch(e) {
            return rejectWithValue(e)
        }
    }
)

const initialState: ShipSlice = {
    ships: {},
    isLoading: false,
    keysOfShips: [],
    currentRenderList: []
}

const shipSlice = createSlice({
    name: 'ships',
    initialState,
    reducers: {
        updateCurrentRenderList(state) {
            const nextShipsKeys = state.keysOfShips.slice(state.currentRenderList.length + 1, state.currentRenderList.length + 5)
            const nextShips =  nextShipsKeys.map((key: string) => {
                const ship = state.ships[key]
                ship.icons.large = 'https://glossary-wows-global.gcdn.co/icons/' + ship.icons.large
                return ship
            })
            state.currentRenderList = state.currentRenderList.concat(nextShips)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchShips.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchShips.fulfilled, (state, action) => {
            state.ships = action.payload as {[key:string]: Ship}
            state.keysOfShips = Object.keys(action.payload)

            state.currentRenderList = state.keysOfShips.slice(0,9).map((key: string) => {
                const ship = state.ships[key]
                ship.icons.large = 'https://glossary-wows-global.gcdn.co/icons/' + ship.icons.large
                return ship
            })
            
            state.isLoading = false
        })
        builder.addCase(fetchShips.rejected, (state) => {
            state.isLoading = false
        })
    }
})

export const {updateCurrentRenderList} = shipSlice.actions

export default shipSlice.reducer