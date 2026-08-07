import { useState , useEffect} from "react";
import { getBookmarks, saveBookmarks } from "../utils/bookmark";

function NewsCard({ article }) {

  const [bookmarked, setBookmarked] = useState(() => {

    const bookmarks = getBookmarks();

    return bookmarks.some(item => item.url === article.url);

  });

   useEffect(() => {
        const bookmarks = getBookmarks();

        setBookmarked(
            bookmarks.some(item => item.url === article.url)
        );
    }, [article.url]);

  function toggleBookmark() {

    const bookmarks = getBookmarks();

    if (bookmarked) {

      const updatedBookmarks = bookmarks.filter(
        item => item.url !== article.url
      );

      saveBookmarks(updatedBookmarks);

      setBookmarked(false);

      if (removeBookmark) {
        removeBookmark(article.url);
      }

    } else {

      const updatedBookmarks = [...bookmarks, article];

      saveBookmarks(updatedBookmarks);

      setBookmarked(true);

    }

  }

  return (
    <div className="news-card">

      <img
        src={article.image}
        alt={article.title}
      />

      <h2>{article.title}</h2>

      <p>{article.description}</p>

      <small>
        {article.author || "Unknown Author"}
      </small>

      <hr className="divider" />

      <br />

      <button onClick={toggleBookmark} className="theme-toggle-light">
        {bookmarked ? "❤️Bookmarked" : "🩶 Bookmark"}
      </button>

      <br /><br />

      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
      >
        Read More →
      </a>

    </div>
  );
}

export default NewsCard;