fakeData()
//上面初始化后台

function Model(options){
    this.data = options.data
    this.resource = options.resource
}
Model.prototype.fetch = function(id){
    return axios.get(`/${this.resource}s/${id}`).then((response)=>{
        this.data = response.data;
        return response;
    })
}
Model.prototype.update = function(data){
    let id = data.id

    return axios.put(`/${this.resource}s/${id}`).then((response)=>{
        this.data = response.data;
        return response;
    })
}
let model = new Model({
    data:{
        name: '',
        number: 0,
        id: ''
    },
    resource: 'book'
});




let view = new Vue({
    el: '#app',
    data: {
        book: {
            name: '',
            number: 0,
            id: ''
        },
        n: 1
    },
    template: `
  <div>
    <div>
        书名：{{book.name}}
        数量：<span id=number>{{book.number}}</span>
    </div>
    <div>
    <input v-modle="n" />
    n的值是{{n}}
    </div>
    <div>
        <button v-on:click="addOne">加n</button>
        <button v-on:click="minusOne">减n</button>
        <button v-on:click="reset">归零</button>
    </div>
  </div>
  `,
    created(){
        model.fetch(1).then(()=>{
            this.book = model.data;
        })
    },
    methods:{
        addOne(){
            model.update({
                number: this.book.number + (this.n-0)
            }).then(() => {
                console.log('this是',this)

                this.view.book = model.data
            })
        },
        minusOne(){
            model.update({
                number: this.book.number - (this.n-0)
            }).then(() => {
                this.view.book = model.data
            })
        },
        reset(){
            model.update({
                number: 0
            }).then(() => {
                this.view.book = model.data
            })
        }
    }
})



//下面是后台

function fakeData() {
    var book = {   //数据库
        name: '三体',
        number: 1,
        id: 1
    }

    axios.interceptors.response.use(function(response){ //服务器
        var {config:{method, url, data}} = response

        if(url === '/books/1' && method === 'get'){
            response.data = book
        }else if(url === 'books/1' && method === 'put'){
            data = JSON.parse(data);
            Object.assign(book,data)
            response.data = book
        }
        return response
    });
}