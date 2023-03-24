import { createSlice } from "@reduxjs/toolkit";

const counter2Slice = createSlice({
    name: 'counter2',
    initialState: {
        v:100
    },
    reducers: {
        counterAdd(state) {
            state.v +=1
        }
    }
})

export const {counterAdd} = counter2Slice.actions

export default counter2Slice.reducer