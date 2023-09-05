import {fetchArticles} from '../src/api'

describe('fetchArticles', () => {
    test('200: returns a list of article objects', () => {
        fetchArticles().then(({data}) => {
            const articles = data.articles;
            articles.forEach((article) => {
            expect(Object.keys(article)).toEqual([
                'author',
                'title',
                'article_id',
                'topic',
                'created_at',
                'votes',
                'article_img_url',
                'comment_count',
            ]);
    
            expect(article.article_id).toEqual(expect.any(Number));
            expect(article.title).toEqual(expect.any(String));
            expect(article.topic).toEqual(expect.any(String));
            expect(article.author).toEqual(expect.any(String));
            expect(article.created_at).toEqual(expect.any(String));
            expect(article.votes).toEqual(expect.any(Number));
            expect(article.article_img_url).toEqual(expect.any(String));
            expect(article.comment_count).toEqual(expect.any(Number));
            });
        })
    })
});