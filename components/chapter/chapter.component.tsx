import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Verse from "../verse/verse.component";
import { ChapterModel } from "./chapter.api";
import { ChapterState, fetchChapterAsync, selectChapter } from "./chapterSlice";

interface P {
    slug:  string | string[] | undefined
}

const Chapter:FC<P> = ({slug})=>{
    const dispatch = useAppDispatch();
    const stateChapter=useAppSelector<ChapterState>(selectChapter);

    useEffect(() => {       
        dispatch(fetchChapterAsync(slug));  
    },[]); 

    
    return(
        <Box sx={{bgcolor:grey[100], pt:12, minHeight: '100vh'}}>
             {stateChapter.chapter?.verses.map(verse=>(<Verse key={verse.verseKey} {...verse}/>))}
        </Box>
    );
}
export default Chapter;