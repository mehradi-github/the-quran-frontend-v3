
export const getFontFaces = (loadedFonts:number[]):string=>{
    
    let fontFaces:string =`
    @font-face {
    font-family: 'surah-name';
    src: url('/fonts/v1/sura_names.woff2') format('woff2') ,url('/fonts/v1/sura_names.woff) format('woff'), url('/fonts/v1/sura_names.ttf') format('truetype'), url('/fonts/v1/sura_names.eot') format('embedded-opentype');
    }
    @font-face {
    font-family: 'uthmani';
    src: url('/fonts/uthmani/uthmani.woff2') format('woff2') ,url('/fonts/uthmani/uthmani.woff') format('woff'), url('/fonts/uthmani/uthmani.otf') format('opentype');
    }
    `;
    loadedFonts.forEach((item)=>{
    fontFaces+=`
    @font-face {
        font-family: 'p${item}';
        src: url('/fonts/v1/p${item}.woff2') format('woff2') ,url('/fonts/v1/p${item}.woff) format('woff'), url('/fonts/v1/p${item}.ttf') format('truetype');
    }
    `;    
    });

    console.log(fontFaces);
    return fontFaces;
}