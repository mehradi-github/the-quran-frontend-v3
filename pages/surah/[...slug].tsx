import getConfig from 'next/config';
import type {NextPageWithLayout} from '../_app';
import {Fragment, ReactElement, useEffect} from 'react';
import {useRouter,NextRouter} from 'next/router';
import Layout from '../../components/layout/layout.master';
import Chapter from '../../components/chapter/chapter.component';
// const {baseUrlApi}=getConfig();
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';


// interface IP {
//     ssr: boolean
// }
// interface P extends IP {}

const Surah: NextPageWithLayout = () => {
    const router:NextRouter = useRouter();
  
  //  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
   
  //  console.log(publicRuntimeConfig.staticFolder)
    
  if (router.isFallback) {
      return <div>Loading...</div>
    }

  
return(
    <Chapter slug={router.query.slug}/>
)
};

Surah.getLayout=(page:ReactElement)=>{
  
    return(
        <Layout>
            {page}
        </Layout>
    )
}



interface IParams extends ParsedUrlQuery {
    slug: string[]
}

export const getStaticPaths: GetStaticPaths<IParams> =  (context) => {
   
    console.log('getStaticPaths');
    console.log(context);
    const arr: IParams[] = [ { slug:[ '23', '1' ] }  ]
    const paths:GetStaticPathsResult<IParams> = {
        paths: arr.map((p) => {
            return {
                params: p,
            }
        }),
        fallback: false
      }
   
    return  paths
}

export const getStaticProps: GetStaticProps = async (context) => {
    console.log('getStaticProps');
    console.log(context);
    const { slug } = context.params as IParams // no longer causes error
    const props = {slug}
    return { 
        props,
        revalidate: 10,
     }
}

export default Surah;