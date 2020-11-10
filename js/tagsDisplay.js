class TagsDisplay{
    constructor(content, id){
        this.contentTable = content;
        this.id = id;

        this.render();
    }

    render(){
        const tagsArticles = createElement('div', 'tagsArticles');
        tagsArticles.innerText = '"' + this.id[0].toUpperCase() + this.id.substring(1) + '" tags Articles' ;

        content.innerText = '';
        content.append(tagsArticles);

        for (let i=0; i< this.contentTable.length; i++){
            const tagsArticle = document.createElement('a');
            tagsArticle.href = '#';
            tagsArticle.classList.add("links");
            tagsArticle.id = 'text' + i;

            for (let j=0; j<this.contentTable[i].tag.length; j++){
                if (this.contentTable[i].tag[j] == this.id){
                    const tagsArticle = document.createElement('a');
                    tagsArticle.href = '#';
                    tagsArticle.id = 'tagsArticle' + (i + 1);
                    tagsArticle.innerText += this.contentTable[i].title;
                    const contentArray = this.contentTable;
                    tagsArticle.addEventListener('click', function(){
                        new Content (content, tagsArticle.id, contentArray);
                    });  
                    tagsArticles.append(tagsArticle);
                }
            }
        }    
    }
}