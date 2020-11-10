class Tags {
    constructor(content){
        this.tagsArray = [];
        this.countArray = [1]; 
        this.contentTable = content;
        this.render();
    }

    countTags(){
        let tagsArray = [];
        for (let i=0; i<this.contentTable.length; i++) {
            tagsArray = tagsArray.concat(this.contentTable[i].tag);
        }

        tagsArray.sort()
        let j = 0;

        let a = tagsArray.length;
        for (let i=0; i< a; i++){
            if (tagsArray[i] == tagsArray[i+1]) {
                this.countArray[j] += 1;
            } else {
                this.tagsArray[j] = tagsArray[i];
                this.countArray.push(1);
                j += 1;
            }
        }
    }
    
    render(){
        this.countTags();
        for(let i=0; i<this.tagsArray.length; i++){
        const tagDiv = createElement('div', 'tagDiv');

        const tagNumber = createElement('a', 'tagNumber', '(' + this.countArray[i] + ')',);
        
        const tag = createElement('a', this.tagsArray[i], this.tagsArray[i] + ' ','#');

        const contentArray = this.contentTable;
        tag.addEventListener('click',function(){
            new TagsDisplay(contentArray, tag.id);
        });      
    
        tagsTable.append(tagDiv);
        tagDiv.append(tag);
        tag.after(tagNumber);
        }
    }
}