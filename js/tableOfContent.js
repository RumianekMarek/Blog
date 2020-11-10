class TableOfContent {
    constructor(content){
        this.target = 'text1';
        this.contentTable = content;
        this.contentsNumber = this.contentTable.length;
        this.render();
    }

    render(){
        new Content (content, 'text1', this.contentTable);
        const tableOfContentDiv = createElement('div', 'tableOfContentDiv');
        tableOfContent.append(tableOfContentDiv);

        for (let i=1; i< this.contentsNumber + 1; i++) {
            const tableOfContentLink = createElement('a', 'tableOfContentLink' + i, 'Article' + i, '#');
            const contentArray = this.contentTable;
            tableOfContentLink.addEventListener('click', function(){
                new Content (content, tableOfContentLink.id, contentArray);
            });           
            tableOfContentDiv.append(tableOfContentLink);
        }
        
    }
}