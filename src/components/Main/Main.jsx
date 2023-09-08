import { ArticleList } from './ArticleList';
import { Routes, Route } from 'react-router-dom';
import { ArticleView } from './ArticleView';

export function Main() {
  return (
    <div id="main">
      <Routes>
        {/* ROUTES USING LAYOUT 1 */}
        <Route path="/" element={<ArticleList filter={null} />} />
        <Route path="/home" element={<ArticleList filter={null} />} />
        <Route path="/articles" element={<ArticleList filter={null} />} />
        <Route
          path="/articles/topics/:topic"
          element={<ArticleList filter={'topic'} />}
        />
        <Route
          path="/articles/authors/:author_id"
          element={<ArticleList filter={'author_id'} />}
        />

        {/* ROUTES USING LAYOUT 2 */}
        <Route path="/articles/id/:article_id" element={<ArticleView />} />
      </Routes>
    </div>
  );
}
