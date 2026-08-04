import {useEffect, useState} from "react";
import { getTopHeadlines } from "../services/newsApi";
import NewsCard from "../components/NewsCard";
import SearchBar from "../components/SearchBar";
import SkeletonCard from "../components/SkeletonCard";

export default function Home(){

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");


  useEffect(() => {
    async function fetchNews() {
      try {
        const articles = await getTopHeadlines("", debouncedSearch);

        setNews(articles);
        setError("");
      } catch (err) {
          setError("Failed to load news.");
      } finally {
        setLoading(false);
      }
    }

    fetchNews();

  }, [debouncedSearch]);

  useEffect(() => {

      const timer = setTimeout(() => {

          setDebouncedSearch(search);

      }, 500);

      return () => clearTimeout(timer);

  }, [search]);

  console.log(news);

  if (loading) {
    return (
        <>
            <h1>Latest News</h1>

            <div className="news-container">
                {
                    Array.from({ length: 8 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))
                }
            </div>
        </>
    );
}

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
  <>
    <h1>Latest News</h1>

    <SearchBar
        search={search}
        setSearch={setSearch}
    />

    <div className="news-container">

      {news.map((article) => (
        <NewsCard 
          key = {article.url}
          article = {article}

        />
      ))}
    </div>
  </>
);
}
