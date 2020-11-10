class Visual {
    constructor(destiny) {
        this.destiny = document.querySelector(destiny);
        this.contentTable = [article1, article2, article3, article4];
        this.render();
    }
    
    render() {
        const container =  createElement('div', 'container');

        const tableOfContent =  createElement('div', 'tableOfContent','Table of Content');

        const content = createElement('div', 'content'); 

        const tagsTable = createElement('div', 'tagsTable', 'Tags');

        const titleDiv = createElement('div', 'authorsDiv', 'Authors');

        this.destiny.append(container);
            container.append(tableOfContent);
            container.append(content);
            container.append(tagsTable);
        
        new TableOfContent(this.contentTable);
        new Tags(this.contentTable);

        tagsTable.append(titleDiv);
        new Title(this.contentTable);
    }
    
}