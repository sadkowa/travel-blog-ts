import * as prismicH from '@prismicio/helpers';


export const getArticleData = data => {

    const {
        title,
        intro,
        img = '',
        content,
        date,
        category = '',
    } = data

    const titleText = prismicH.asText(title)
    const introText = prismicH.asText(intro)
    const articleContent = content
    const imgSrc = prismicH.asImageSrc(img)
    const imgAlt = img.alt
    const categoryName = category.uid

    return {
        titleText,
        introText,
        imgSrc,
        imgAlt,
        articleContent,
        categoryName,
        date
    }
}
export const getAboutData = data => {

    const { img, text, } = data

    const textContent = text
    const imgSrc = prismicH.asImageSrc(img)
    const imgAlt = img.alt

    return {
        imgSrc,
        imgAlt,
        textContent,
    }
}
export const getCategoriesData = categories => {

    return categories.map(item => prismicH.asText(item.data.name));
}