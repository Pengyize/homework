let list = document.querySelector('#list')

function listen(element,eventType,selector,fn){
    element.addEventListener(eventType,(e)=>{
        let el = e.target
    while(!el.matches(selector)){  //可能点击的是li里的span
        if(element === el){  //如果点击的是父元素，则跳出监听
            el =null;
            break;
        }
        el = el.parentNode
    }
        el&&fn.call(el,e,el)
    })
    return element
}


listen(list,'click','li',(e,el)=>{
    console.log(el.innerHTML)
})