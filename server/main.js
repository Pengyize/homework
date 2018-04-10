window.xxx = function (result) {
    alert('frank');
    alert(`结果是${result}`);
};

button.addEventListener('click',() =>{
    let script = document.createElement('script');
    script.src = 'http://jack.com:8002/pay?callbackName=xxx';
    document.body.appendChild(script);
    script.onload = function (e) {
        e.currentTarget.remove();
    };
    script.error = function (e) {
        alert('fail');
        e.currentTarget.remove();
    };
});

