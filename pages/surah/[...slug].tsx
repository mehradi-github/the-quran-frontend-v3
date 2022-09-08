import getConfig from 'next/config';
import type {NextPageWithLayout} from '../_app';
import {Fragment, ReactElement} from 'react';
import {useRouter,NextRouter} from 'next/router';
import Layout from '../../components/layout/layout.master';
import Chapter from '../../components/chapter/chapter.component';
// const {baseUrlApi}=getConfig();



// interface IP {
//     ssr: boolean
// }
// interface P extends IP {}

const Surah: NextPageWithLayout = () => {
    const router:NextRouter = useRouter();
    //console.log(router.query.slug);
  //  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
   
  //  console.log(publicRuntimeConfig.staticFolder)
    
return(
    <Chapter/>
)
};

Surah.getLayout=(page:ReactElement)=>{
    return(
        <Layout>
            {page}
        </Layout>
    )
}

export default Surah;