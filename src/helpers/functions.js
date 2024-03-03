import * as prismicH from '@prismicio/helpers';

export const getData = data => {
    const { title, intro, img, text, date, category } = data

    const titleText = prismicH.asText(title)
    const introText = prismicH.asText(intro)
    const textContent = text
    const imgSrc = prismicH.asImageSrc(img)
    const imgAlt = img.alt
    const categoryName = category.uid

    return { 
        titleText, 
        introText, 
        imgSrc, 
        imgAlt, 
        textContent, 
        categoryName, 
        date }
}