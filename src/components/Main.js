import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Story from './Story';
import styles from './Main.scss';

const Main = ({ apiKey, currentSource, sidebarIsHidden }) => {
  const [articles, setArticles] = useState([]);
  const [headline, setHeadline] = useState('');

  useEffect(() => {
    function fetchArticles() {
      return axios(
        `https://newsapi.org/v2/top-headlines?sources=${currentSource}&apiKey=${apiKey}`
      )
        .then(res => {
          const data = res.data;
          console.log(data);
          return data;
        })
        .catch(error => {
          console.log('Error fetching sources: ', error);
        });
    }
    fetchArticles().then(data => {
      const articles = data.articles;
      setArticles(articles);
      setHeadline(articles[0].source.name);
    });
  }, [currentSource, apiKey, setHeadline]);

  const { main, hide, main_headline, main_stories } = styles;

  return (
    <main className={sidebarIsHidden ? `${main} ${hide}` : main}>
      <h1 className={main_headline}>{headline}</h1>
      <div className={main_stories}>
        {articles.map(article => {
          const { title, description, urlToImage, publishedAt, url } = article;
          return (
            <Story
              title={title}
              description={description}
              urlToImage={urlToImage}
              newsOutlet={article.source.name}
              publishedAt={publishedAt}
              url={url}
              key={url}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Main;
