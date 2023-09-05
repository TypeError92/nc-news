import ArticleList from './ArticleList'
import { Routes, Route } from 'react-router-dom';
import ArticleView from './ArticleView'

function Main(){
    return (
        <div id='main'>
        <h1>Main</h1>
        <Routes>
        {/* ROUTES USING LAYOUT 1 */}
        <Route path="/" element={<ArticleList filter={null}/>}/>
        <Route path="/home" element={<ArticleList filter={null}/>}/>
        <Route path="/articles" element={<ArticleList filter={null}/>}/>
        <Route path="/articles/topics/:topic_id" element={<ArticleList filter={"topic"}/>}/>
        <Route path="/articles/authors/:author_id" element={<ArticleList filter={"author"}/>}/>

        {/* ROUTES USING LAYOUT 2 */}
        <Route path="/articles/article_id" element={<ArticleView/>}/>
    </Routes>
        </div>
    )
}


export default Main