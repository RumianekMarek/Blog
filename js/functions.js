function createElement(type, id, text, href){
    const element = document.createElement(type);
        element.id = id;
        element.innerText = text ? text: '';
        if (href != undefined) element.href = href;
    return element
}
