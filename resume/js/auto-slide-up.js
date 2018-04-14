findClosestAndRemoveOffset();

window.addEventListener('scroll',function (xxx) {
    findClosestAndRemoveOffset();
});







//helper
function findClosestAndRemoveOffset() {
    let specialTags = document.querySelectorAll('[data-x]');
    let minIndex = 0;
    for(let i=0;i<specialTags.length;i++){

        if(Math.abs(window.scrollY - specialTags[i].offsetTop + 285) < Math.abs(285 + window.scrollY - specialTags[minIndex].offsetTop)){
            minIndex = i;
        }
    }

    specialTags[minIndex].classList.remove('offset');
    for(let i=0;i<specialTags.length;i++){
        if(i<minIndex){
            specialTags[i].classList.remove('offset');
        }
    }

    let id = specialTags[minIndex].id;
    let a = document.querySelector('a[href="#'+id+'"]');
    let li = a.parentNode;
    let brothersAndMe = li.parentNode.children;     //brotherAndMe是个数组
    for(let i=0;i<brothersAndMe.length;i++){
        brothersAndMe[i].classList.remove('highlight');
    }
    li.classList.add('highlight');
}