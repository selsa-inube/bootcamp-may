const byTagName = (node, tagName) => {
    let resp = [];
    const tagNameUpper = tagName.toUpperCase()
    function searchNode (node){
        if (typeof node.childNodes == 'object'){
            for (const iterator of node.childNodes) {
                if(iterator.nodeName === tagNameUpper){
                    resp.push(iterator);
                };
                searchNode(iterator);
            }
        }
    }
    searchNode(node);
    return resp;
}

console.log(byTagName(document.body, "h1").length);
console.log(byTagName(document.body, "span").length);
let para = document.querySelector("p");
console.log(byTagName(para, "span").length);