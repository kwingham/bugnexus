"use client"

import { useState, useEffect } from "react"


export default function News() {
    const [news, setNews] = useState([])
    const [articleNum, setArticleNum] = useState(3)
    useEffect(() => {
        fetch('https://saurav.tech/NewsAPI/top-headlines/category/technology/gb.json').then((res) => res.json()).then((data) => {
            setNews(data.articles);
        })
}, []);
    return (
        <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl  pt-5 mt-5">
            <h2 className="font-bold text-xl px-4">Tech News</h2>
            {news.slice(0,articleNum).map((article) => (
                <div key={article.url}>
                    <a href={article.url} target="_blank">
                        <div className="flex items-center p-3 space-x-1">
                            <div className="space-y-0.5">
                                <h5 className="text-sm font-bold">{article.title}</h5>
                                <p className="text-gray-500 text-xs font-medium">{article.source.name}</p>
                            </div>
                            <img src={article.urlToImage} className="rounded-xl" width={80}/>
                        </div>
                    </a>
                    </div>
            ))}
            <button onClick={() => setArticleNum(articleNum + 3)} className="bg-gray-100 text-gray-500 text-sm hover:text-gray-200 pl-4 transition pb-3 duration-200 rounded-xl">Show more</button>
        </div>
    )
}