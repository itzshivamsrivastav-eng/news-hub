import { useEffect, useState } from "react";
import { getBookmarks } from "../utils/bookmark";
import NewsCard from "../components/NewsCard";

export default function Bookmarks() {

    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        setBookmarks(getBookmarks());
    }, []);

function removeBookmark(url){

    const updated = bookmarks.filter(
        item => item.url !== url
    );

    setBookmarks(updated);

}

    return (
        <>
            <h1>Bookmarks</h1>

            {
                bookmarks.length === 0 ? (
                    <h2>No Bookmarks Yet</h2>
                ) : (
                    <div className="news-container">
                        {
                            bookmarks.map(article => (
                                <NewsCard
                                    key={article.url}
                                    article={article}
                                    removeBookmark={removeBookmark}
                                />
                            ))
                        }
                    </div>
                )
            }
        </>
    );
}