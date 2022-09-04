import useSWR, { SWRResponse } from 'swr';
import {Verse} from './models';
import getConfig from 'next/config';

// const {baseUrlApi}=getConfig();
const { serverRuntimeConfig } = getConfig();

export const getVersesByChapter = (chapter:number, page:number=0, perPage:number=10)=>{
 
  
 const {data,error}= useSWR<Verse[],any>(`${serverRuntimeConfig.baseUrlApi}/verses/by_chapter/${chapter}?language=en&words=true&page=${page}&per_page=${perPage}`);
 return data;
}

