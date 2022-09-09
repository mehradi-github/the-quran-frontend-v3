import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../app/store";
import { ChapterModel, fetchChapter } from "./chapter.api";


export interface ChapterState {
    chapter: ChapterModel | null,
    status: 'idle' | 'loading' | 'failed',
    loadedPages:number[]
}
const initialState:ChapterState={
    chapter: null,
    status: 'idle',
    loadedPages:[]

}

export const fetchChapterAsync = createAsyncThunk(
    'chapter/fetchChapter',
    async (slug:  string | string[] | undefined) => {
      return await fetchChapter(slug)
      // The value we return becomes the `fulfilled` action payload
    
    }
  )

export const chapterSlice= createSlice({
    name:'chapter',
    initialState,
    reducers:{ },
    extraReducers: (builder) => {
        builder
          .addCase(fetchChapterAsync.pending, (state) => {
            state.status = 'loading'
          })
          .addCase(fetchChapterAsync.fulfilled, (state, action) => {
            state.status = 'idle'
            state.chapter = action.payload
            if(state.chapter)
              state.loadedPages= Array.from(new Set<number>([...state.loadedPages, ...state.chapter.pageNumbers]))
          })
      },
    
});

//export const {}=chapterSlice.actions;
export const selectChapter = (state:AppState)=> state.chapter;


export default chapterSlice.reducer;