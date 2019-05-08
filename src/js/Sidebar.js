import React, { useState, useEffect } from 'react';
import axios from 'axios';
import icons from '../img/icons/*.png';
import Source from './Source';

const SideBar = ({
  apiKey,
  currentSource,
  setCurrentSource,
  sidebarIsHidden,
}) => {
  const [sourcesList, setSourcesList] = useState([]);

  useEffect(() => {
    function fetchSources() {
      return axios(
        `https://newsapi.org/v2/sources?language=en&apiKey=${apiKey}`
      )
        .then(res => {
          const data = res.data;
          return data;
        })
        .catch(error => {
          console.log('Error fetching sources: ', error);
        });
    }
    fetchSources().then(data => {
      const sources = data.sources;
      setSourcesList(sources);
      console.log(sources);
    });
  }, [apiKey]);

  // console.log(icons);

  return (
    <aside className={`sidebar ${sidebarIsHidden ? 'hide' : ''}`}>
      <ul>
        {sourcesList.map(source => {
          const { id, name, description } = source;
          return (
            <Source
              key={id}
              id={id}
              name={name}
              icon={icons[id]}
              description={description}
              currentSource={currentSource}
              setCurrentSource={setCurrentSource}
            />
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
