import { useState, useEffect } from "react";
import Newsitem from "./Newsitem";

const Newsboard = ({ category, searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setArticles(data.articles || []);
      } catch (err) {
        setError(err.message); 
      }
    };

    fetchNews();
  }, [category]);

  const filteredArticles = articles.filter(article => {
    const isRemoved = article.title?.toLowerCase().includes("removed") || 
                     article.description?.toLowerCase().includes("removed");
    return !isRemoved && (
      article.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      article.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });


  const defaultImageUrl = 'https://via.placeholder.com/150?text=No+Image';
  const defaultMessage = "No articles available at the moment. Please check back later.";

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((news, index) => (
            <Newsitem
              key={index}
              title={news.title || 'No title available'}
              description={news.description || 'No description available'}
              src={news.urlToImage || defaultImageUrl} 
              url={news.url}
              date={new Date(news.publishedAt).toLocaleDateString()} 
            />
          ))
        ) : (
          <div className="text-center">
            <img src={defaultImageUrl} alt="Default" style={{ width: '150px', height: 'auto' }} />
            <p>{defaultMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsboard;
