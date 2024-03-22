import React from "react";
import Article from "../Article";

type Props = { 
    paginationLimit: number; 
    displayData: any; 
    page: number;
 }

const Pagination = (props: Props) => {
    const { paginationLimit, displayData, page } = props
    
    const begin = paginationLimit * (page - 1)
    const end = begin + paginationLimit

    const paginatedData = displayData.slice(begin, end)

    return (
        <>
            {paginatedData.map(item => <Article
                key={item.id}
                post={item}
            />)}
        </>
    )
}

export default Pagination