myButton.addEventListener('click', (e)=> {
    let request = new XMLHttpRequest();
    request.open('GET', '/xxx'); //初始化request
    request.setRequestHeader('Accept','22');
    request.send(); //发送请求
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log('request.responseText');
                console.log(request.responseText);
                let string = request.responseText;
                let object = window.JSON.parse(string);
                console.log('object');
                console.log(object);
                console.log('object.node');
                console.log(object.node)
            }
            else if (request.status >= 400) {
                console.log('请求失败')
            }
        }
    }

});

