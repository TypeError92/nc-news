import { fetchTopics } from '../api';
import { useEffect, useState } from 'react';
import { Link, Route, Routes, useSearchParams } from 'react-router-dom';

export function Header() {
  return (
    <div id="header">
      <h1>BotGoss</h1>
      <TopicBar />
    </div>
  );
}

function TopicBar() {
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then(({ data }) => {
      setIsLoading(false);
      setTopics(data);
    });
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <p> Browse articles:</p>
      <ul id="topic-bar">
        <li key="all">
          <Link to={'/'}>ALL</Link>
        </li>
        {topics.map((topic) => {
          return <TopicTab key={topic.slug} topic={topic} />;
        })}
      </ul>
    </div>
  );
}

function TopicTab({ topic }) {
  return (
    <li className="topic-tab">
      <Link to={`/articles/topics/${topic.slug}`}>
        {topic.slug.toUpperCase()}
      </Link>
    </li>
  );
}


export default Header;
