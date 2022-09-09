import axios from "axios";
//import getConfig from "next/config";
//import useSWR from "swr";

import * as translation from './translation.data.json';
const baseUrlApi:string ='https://api.quran.com/api/v4';
//const fetcher= (url:string)=>fetch(url).then((res)=>res.json());


export const fetchChapter=async (slug:  string | string[] | undefined):Promise<ChapterModel|null>=>{

    let verses:ChapterModel | null=null;
        if(slug)
        {
            if(Array.isArray(slug))
            {
                let chapterId:number=parseInt(slug[0], 10);
                let page:string= slug.length>1 ?  slug[1] : "0";
                verses= await getChapterModel(chapterId,await axios.get(`${baseUrlApi}/verses/by_chapter/${chapterId}?language=en&words=true&page=${page}&per_page=10`));
                
            }
        }
    return verses;
      
};

export interface VerseModel{

    verseKey:string,
    sajdahNumber:number,
    pageNumber:number,
    text: string,
    translation: string
}
export interface ChapterModel{
    chapterId:number,
    currentPage:number,
    nextPage?:number,
    totalPages:number,
    totalRecords:number,
    pageNumbers:number[],
    verses:VerseModel[]
}

export const getChapterModel=async (chapterId:number,response:any):Promise<ChapterModel>=>{
    var chapter:ChapterModel={
    chapterId:chapterId,    
    currentPage:response.data.pagination.current_page as number,
    nextPage:response.data.pagination.next_page as number,
    totalPages:response.data.pagination.total_pages as number,
    totalRecords:response.data.pagination.total_records as number,
    pageNumbers:[],
    verses: []
    }
    chapter.pageNumbers= Array.from(new Set<number>(response.data.verses.map((v:any) => v.page_number as number)));    
    chapter.verses=await Promise.all(response.data.verses.map((v:any) =>{  
        return {
        verseKey:v.verse_key,
        sajdahNumber:v.sajdah_number,
        pageNumber:v.page_number,
        text: v.words.map((w:any)=>w.text).join(''),
        translation: fetchLegacyTranslation({chapter:v.verse_key.split(':')[0] as number,id:v.id as number})
    }
    }));  
    return chapter;   
  }
interface TranslationFilter{
    chapter:number,
    id:number
}
  export const fetchLegacyTranslation=({chapter,id}:TranslationFilter):string=>{
        let data= ((translation as any)[chapter-1][id.toString()]['ayah']['text']) as string;  
        return data;
   };

   export const getFontFamilyPage = (pageNumber:number) => {
    return `p${pageNumber}` ;
}