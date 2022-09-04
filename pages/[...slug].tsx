import getConfig from 'next/config';
import type {NextPage} from 'next';
import {Fragment} from 'react';
import {useRouter,NextRouter} from 'next/router';

// const {baseUrlApi}=getConfig();



// interface IP {
//     ssr: boolean
// }
// interface P extends IP {}

const Surah: NextPage = () => {
    const router:NextRouter = useRouter();
    //console.log(router.query.slug);
  //  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
   
  //  console.log(publicRuntimeConfig.staticFolder)
    
return(
    <div>Slug</div>
)
};

export default Surah;