//  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

// TODO improve this setup:
// use <picture> and <source>
// https://github.com/joepk90/wp-image-optimisation/blob/master/Supadu_Image_Optimization/Supadu_Image_Optimization.php

function getMediaQuerySizes() {
    return {
        1920: 'extra-large-desktop-landscape',
        1600: 'extra-large-desktop',
        1440: 'large-desktop-landscape',
        1280: 'large-desktop',
        1024: 'large-tablet-landscape',
        960: 'small-tablet-landscape',
        840: 'large-tablet',
        720: 'large-handset-landscape',
        600: 'medium-handset-landscape',
        480: 'small-handset-landscape',
        400: 'large-handset',
        360: 'medium-handset',
        300: 'small-handset',
        0: 'original'
    }
}

export type ImageSizes = {
    [key: string]: string;
};


export const prepareImageProps = (imageSizes: ImageSizes) => {
    const mediaQuerySizes =  getMediaQuerySizes()

    let width = ""
    let sizesArray = [];
    for (const [breakpoint, label] of Object.entries(mediaQuerySizes)) {
        if (!imageSizes[label]) {
            continue;
        }

        if (width === "") {
            width = imageSizes[label]
        }

        sizesArray.push(`(max-width: ${breakpoint}px) ${imageSizes[label]}px`);
    }

    return {width, height: width, sizes:  sizesArray.join(",")}
}


// const imageSizes = {
//     'small-handset': "325",
//     // 'medium-handset-landscape': "325",
//   }
  
// const {width, height, sizes} = prepareImageProps(imageSizes)
  



// example sizes array (exclude the sizes you don't need)
// const imageSizes: ImageSizes = {
//     'small-handset'                : '600',     // breakpoint size: 300px - what is the largest image size required at small-handset to the next defined image size?
//     'medium-handset'               : '',        // breakpoint size: 360px - what is the largest image size required at medium-handset to the next defined image size?
//     'large-handset'                : '',        // breakpoint size: 400px - what is the largest image size required at large-handset to the next defined image size?
//     'small-handset-landscape'      : '',        // breakpoint size: 480px - what is the largest image size required at small-handset-landscape to the next defined image size?
//     'medium-handset-landscape'     : '960',     // breakpoint size: 600px - what is the largest image size required at medium-handset-landscape to the next defined image size?
//     'large-handset-landscape'      : '',        // breakpoint size: 720px - what is the largest image size required at large-handset-landscape to the next defined image size?
//     'large-tablet'                 : '',        // breakpoint size: 840px - what is the largest image size required at large-tablet to the next defined image size?
//     'small-tablet-landscape'       : '1920',    // breakpoint size: 960px - what is the largest image size required at small-tablet-landscape to the next defined image size?
//     'large-tablet-landscape'       : '',        // breakpoint size: 1024px - what is the largest image size required at large-tablet-landscape to the next defined image size?
//     'large-desktop'                : '',        // breakpoint size: 1280px - what is the largest image size required at large-desktop to the next defined image size?
//     'large-desktop-landscape'      : '',        // breakpoint size: 1440px - what is the largest image size required at large-desktop-landscape to the next defined image size?
//     'extra-large-desktop'          : '',        // breakpoint size: 1600px - what is the largest image size required at extra-large-desktop to the next defined image size?
//     'extra-large-desktop-landscape': '',        // breakpoint size: 1920px - what is the largest image size required at extra-large-desktop-landscape to the next defined image size?
// }