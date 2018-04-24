let books = {   //数据库
    name: '三体',
    number: 1,
    id: 1
}

axios.interceptors.response.use(function(response){ //服务器
    let {config:{method, url, data}} = response

    if(url === '/books/1' && method === 'get'){
        response.data = books
    }else if(url === 'books/1' && method === 'put'){
        Object.assign(book,data)
        response.data = books
    }
    return response
});
//上面是后台



axios.get('/books/1')   //get请求
    .then(({data})=>{
        let originalHtml = $('#app').html()
        let newHtml = originalHtml.replace('__name__',data.name)
            .replace('__number__',data.number)
        $('#app').html(newHtml);
    })


$('#app').on('click','#addOne',function(){
    let oldNumber = $('#number').text()
    let newNumber = oldNumber - 0 + 1
    axios.put('/books/1',{  //put请求
        number: newNumber
    }).then(()=>{
        $('#number').text(newNumber)
    })
})

$('#app').on('click','#minusOne',function(){
    let oldNumber = $('#number').text()
    let newNumber = oldNumber - 0 - 1
    axios.put('/books/1',{
        number: newNumber
    }).then(()=>{
        $('#number').text(newNumber)
    })
})

$('#app').on('click','#reset',function(){
    axios.put('/books/1',{
        number: 0
    }).then(()=>{
        $('#number').text(0)
    })
})