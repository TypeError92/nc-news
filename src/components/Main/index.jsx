import ArticleList from './ArticleList'
import { Routes, Route } from 'react-router-dom';
import SingleArticleView from './SingleArticleView'

function Main(){
    <Routes>
        {/* ROUTES USING LAYOUT 1 */}
        <Route path="/" element={<ArticleList/>}/>
        <Route path="/home" element={<ArticleList/>}/>
        <Route path="/articles" element={<ArticleList/>}/>
        <Route path="/articles/topics/:topic_id" element={<ArticleList/>}/>
        <Route path="/articles/authors/:author_id" element={<ArticleList/>}/>

        {/* ROUTES USING LAYOUT 2 */}
        <Route path="/articles/article_id" element={<SingleArticleView/>}/>
    </Routes>
    return 
}

export default Main