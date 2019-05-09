import React from 'react';
import styles from './Story.scss';

const Story = ({
  title,
  description,
  urlToImage,
  newsOutlet,
  publishedAt,
  url,
}) => {
  const timeMins = Math.round((new Date() - new Date(publishedAt)) / 60000);
  const timeDisplay =
    timeMins < 60
      ? timeMins + ' mins ago'
      : Math.round(timeMins / 60) + ' hours ago';

  const { story, story_words, story_published, story_description } = styles;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={story}>
        <div className={story_words}>
          <h2>{title}</h2>
          <div className={story_published}>
            <span>{newsOutlet} • </span>
            <span>{timeDisplay}</span>
          </div>
          <p className={story_description}>{description}</p>
        </div>
        <div>
          <img src={urlToImage} alt="story" />
        </div>
      </div>
    </a>
  );
};

export default Story;
