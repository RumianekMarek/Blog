class AuthorsContent{
    constructor(author, content){
        this.contentTable = content;
        this.author = author;
        this.render();
    }
    findArticles(author){
        const authorsContentDiv = createElement('div', 'authorsContentDiv', this.author + ' articles:',);
        for (let i=0; i< this.contentTable.length; i++){
            if (this.contentTable[i].author == author){
                const authorArticle = createElement('a', 'authorArticle' + (i+1) , this.contentTable[i].title, '#')
                const contentArray = this.contentTable;
                authorArticle.addEventListener('click', function(){
                new Content (content, authorArticle.id, contentArray);
            });           
                content.append(authorsContentDiv);
                authorsContentDiv.append(authorArticle);
            }
        }
    }

    render(){
        const authorsContentDiv = createElement('div', this.author, this.author + ' articles:',);
        content.innerText = '';
        this.findArticles(this.author);
    }
}