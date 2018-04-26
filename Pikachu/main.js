!function () {
    let info = document.querySelector('#info');
    let container = document.querySelector('#container');
    let paper = document.querySelector('#paper');
    let style = document.querySelector('#style');
    let n = 1;
    let timer;
    timer = setTimeout(function WriteCode() {
        paper.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css);
        style.innerHTML = code.substring(0, n);
        paper.scrollTop = paper.scrollHeight;
        n += 1;
        if (n < code.length) {
            timer = setTimeout(WriteCode, 10);
        } else {
            setTimeout(function () {
                container.classList.remove('black');
                container.classList.add('transparent');
                paper.classList.add('hide');
                info.classList.remove('hide');
            },3000)
        }
    }, 10)
}();