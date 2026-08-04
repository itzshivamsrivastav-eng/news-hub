import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getTopHeadlines } from "../services/newsApi";
import NewsCard from "../components/NewsCard";

import SkeletonCard from "../components/SkeletonCard";

export default function Category() {

  const { category } = useParams();
  

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    async function fetchNews() {

      setLoading(true);

      try{

        const articles = await getTopHeadlines(category);

        setNews(articles);


      } catch(err){
        setError("Failed To Fetch News");

      } finally{
        setLoading(false);
      }

    }

    fetchNews();

  }, [category]);

if (loading) {
    return (
        <>
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>

            <div className="news-container">
                {Array.from({ length: 8 }).map((_, index) => (
                    <SkeletonCard key={index} />
                ))}
            </div>
        </>
    );
}

if(error){
  return <h1>{error}</h1>;
}

  return (
    <>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>

      <div className="news-container">
        {news.map((article) => (
          <NewsCard
            key={article.url}
            article={article}
          />
        ))}
      </div>
    </>
  );
}