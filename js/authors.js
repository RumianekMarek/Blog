class Title {
    constructor(content) {
        this.contentTable = content;
        this.authorsArray = [];
        this.authorsCount = [1];
        this.render();
    }

    authorCount(){
        for (let i=0; i<this.contentTable.length; i++){
            this.authorsArray[i] = this.contentTable[i].author;
        }
        this.authorsArray.sort();
        let j = 0;
        for (let i=0; i<this.contentTable.length; i++){
            if (this.authorsArray[j] == this.authorsArray[j+1]){
                this.authorsArray.splice(j, 1);
            } else 
                j++;
        } 
    }

    render(){
        this.authorCount();  
    for (let i=1; i< this.authorsArray.length +1; i++) {
        const authors = createElement('a', 'Author' + i, this.authorsArray[i-1], '#');
        const contentArray = this.contentTable;
        authors.addEventListener('click', function(){
            new AuthorsContent(authors.id, contentArray);
        });
        authorsDiv.append(authors);
        }
    }   
}