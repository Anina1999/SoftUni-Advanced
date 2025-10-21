function getArticleGenerator(articles) {
    const content = document.getElementById('content');
    let index = 0;

    return function () {
        if (index < articles.length) {
            const articleElement = document.createElement('article');
            articleElement.textContent = articles[index];
            content.appendChild(articleElement);
            index++;
        }
    }
}

