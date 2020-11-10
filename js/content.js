class Content {
    constructor (destiny, id, content) {
        this.destiny = destiny;
        this.id = id;
        this.contentTable = content;
        
        this.render();
    }

    render(){
        const author = createElement('a', this.id, '', '#');
        const contentArray = this.contentTable;
        author.addEventListener('click', function(){
            new AuthorsContent(contentArray[this.id[this.id.length - 1] - 1].author, contentArray);
        });

        const title = createElement('p', 'title');

        const article = createElement('p', 'article');

        const contentTags = createElement('a', 'contentTags', 'Tagi: ');

        

        this.destiny.innerText = '';
        title.innerText = this.contentTable[this.id[this.id.length - 1] - 1].title;
        author.innerText = this.contentTable[this.id[this.id.length - 1] - 1].author;
        article.innerText = this.contentTable[this.id[this.id.length - 1] - 1].text;

        const tagsArray = this.contentTable[this.id[this.id.length - 1] - 1].tag;
        
        this.destiny.append(title);
        this.destiny.append(author);
        this.destiny.append(article);
        this.destiny.append(contentTags);

        for (let i=0; i< tagsArray.length; i++){
            const contentTag = createElement('a', tagsArray[i], tagsArray[i] + ' ', '#');
            const contentArray = this.contentTable;
                contentTag.addEventListener('click', function(){
                    new TagsDisplay(contentArray, contentTag.id);
                });
            this.destiny.append(contentTag);
        }
        

    }
}