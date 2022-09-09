import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Bismillah from "../bismillah/bismillah.component";
import Verse from "../verse/verse.component";
import { ChapterState, fetchChapterAsync, selectChapter } from "./chapterSlice";

const CHAPTERS_WITHOUT_BISMILLAH = [1, 9];
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

             {stateChapter.chapter && !CHAPTERS_WITHOUT_BISMILLAH.includes(stateChapter.chapter?.chapterId) && <Bismillah />}
             {stateChapter.chapter?.verses.map(verse=>(<Verse key={verse.verseKey} {...verse}/>))}
        </Box>
    );
}
export default Chapter;