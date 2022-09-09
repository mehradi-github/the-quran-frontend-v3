import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../app/store";

export interface themeState {
    mode: 'dark' | 'light',
   // loadedFonts:number[]
}
const initialState:themeState={
    mode: 'light',
  //  loadedFonts:[1]
}

export const themeSlice= createSlice({
    name:'theme',
    initialState,
    reducers:{
        toggleColorMode:(state)=>{
            state.mode= state.mode === 'dark' ? 'light':'dark'
        }
    }
    
});

export const {toggleColorMode}=themeSlice.actions;
export const selectTheme = (state:AppState)=> state.theme;


export default themeSlice.reducer;