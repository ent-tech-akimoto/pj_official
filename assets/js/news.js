const showNewsList = (count) => {
    $.ajax(`/master-data/json/news/index.json?now=${new Date().getTime()}`).done((json) => {
        json.news.sort((a, b) => b.seq - a.seq);

        const sliceStart = 0;
        const sliceEnd = Math.min(count || Number.MAX_VALUE, json.news.length);
        json.news.slice(sliceStart, sliceEnd).forEach((e) => {
            console.log(e)
            const $article = $('.news-list-item.template').clone();
    
            const d = new Date(e.publishedAt);
            $article.find('.date').append(`${d.getFullYear()}.${(d.getMonth() + 1)}.${d.getDate()}`);
            $article.find('dt.thumbnail').css('background-image',`url('/master-data/image/news/${e.thumbImage}')`);
            $article.find('dd.news-tit a').append(e.title);
            $article.find('dd.news-tit a').attr('href', `/news/article/index.html?hash=${e.hash}`);
            $article.removeClass('hidden');
            $article.removeClass('template');
    
            $('.news-list').append($article);
        })
    });
}
