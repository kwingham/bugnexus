import React from 'react';

export const metadata = {
    title: "BugNexus | Search results",
    description:
      "BugNexus - the place for beginners to ask for help with their code",
    icons: {
      icon: "/favicon.ico",
    },
  };

export default async function SearchResults({ params }) {
    const { query } = params;

    const response = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/technology/gb.json');
    const searchResults = await response.json();
    const filteredResults = searchResults.articles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.description.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="bg-[#2D2D3A] min-h-screen p-6">
            <h1 className="text-white text-2xl font-bold mb-6">Search Results for {query}</h1>
            <ul className="space-y-6">
                {filteredResults.length > 0 ? (
                    filteredResults.map((article, index) => (
                        <li key={index} className="bg-[#1C1C28] p-4 rounded-lg shadow-md">
                            <a
                                href={article.url}
                                //need target here to open link in new tab
                                target="_blank"
                                className="text-green-400 text-xl font-semibold hover:underline mb-2 block"
                            >
                                {article.title}
                            </a>
                            <p className="text-gray-300 text-sm mb-4">{article.description}</p>
                            <a
                                href={article.url}
                                //need target here to open link in new tab
                                target="_blank"
                                className="text-blue-400 hover:underline"
                            >
                                Read more
                            </a>
                        </li>
                    ))
                ) : (
                    <p className="text-gray-400">No results found</p>
                )}
            </ul>
        </div>
    );
}
