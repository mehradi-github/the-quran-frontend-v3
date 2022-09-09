import { Box, Container } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Bismillah from "../bismillah/bismillah.component";
import Verse from "../verse/verse.component";
import { ChapterState, fetchChapterAsync, selectChapter } from "./chapterSlice";
import InfiniteScroll from 'react-infinite-scroller';

const CHAPTERS_WITHOUT_BISMILLAH = [1, 9];
interface P {
    slug:  string | string[] | undefined
}

const Chapter:FC<P> = ({slug})=>{
    const dispatch = useAppDispatch();
    const {chapter}=useAppSelector<ChapterState>(selectChapter);


    useEffect(() => {     
        console.log('useEffect');  
        console.log(slug);  
        dispatch(fetchChapterAsync(slug));  
    },[]); 

    const fetchMoreData = ()=> {
        // alert(chapter+':'+nextPage);
        
        console.log('fetchMoreData');  
        console.log([chapter?.chapterId.toString(),chapter?.nextPage?.toString()]);  
        chapter && chapter?.nextPage && dispatch(fetchChapterAsync([chapter?.chapterId.toString(),chapter?.nextPage?.toString()]));
      }
    return(
        <Box sx={{bgcolor:grey[100], pt:12, minHeight: '100vh'}}>

             {chapter && !CHAPTERS_WITHOUT_BISMILLAH.includes(chapter?.chapterId) && <Bismillah />}
             
             <Container> 
                <InfiniteScroll
                    pageStart={0}
                    loadMore={fetchMoreData}
                    hasMore={!!chapter && !!chapter.nextPage && (!chapter.totalPages || chapter.nextPage<chapter.totalPages )}
                    loader={<Box sx={{justifyContent:'center'}} key={0}>Loading ...</Box>}
                >
                    {chapter?.verses.map(verse=>(<Verse key={verse.verseKey} {...verse}/>))}

                </InfiniteScroll>
            </Container>
        </Box>
    );
}
export default Chapter;