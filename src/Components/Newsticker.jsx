import { useState, useEffect } from "react";
import './Newsticker.css';

const NewsTicker = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const fetchHeadlines = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setHeadlines(data.articles.map(article => article.title)); 
    };

    fetchHeadlines();
    const interval = setInterval(fetchHeadlines, 60000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="news-ticker-container">
      <div className="news-ticker">
        {headlines.map((headline, index) => (
          <div key={index} className="ticker-item">{headline}</div>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
