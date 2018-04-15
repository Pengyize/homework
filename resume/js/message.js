!function () {
    let view = document.querySelector('section.message');
    let model = {   //处理数据有关的
        init: function () {
            let APP_ID = 'Yjq0f8ywnjQxEVknFWRfTmGf-gzGzoHsz';
            let APP_KEY = 'cmvXP5F2XstS4t9AnH5oNqHQ';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        fetch: function () {
            let query = new AV.Query('Message');
            return query.find();
        },
        save: function (content,name) {

            let Message = AV.Object.extend('Message');
            let message = new Message();
            return message.save({
                name: name,
                content: content
            })
        }
    };
    let controller = {
        view : null,
        messageList: null,
        form: null,
        model: null,
        init: function (view,model) {
            this.view = view;
            this.model = model;
            this.model.init();
            this.messageList = view.querySelector('#messageList');
            this.form = view.querySelector('form');
            this.loadMessages();
            this.bindEvents();
        },
        loadMessages: function () {
            this.model.fetch().then(
                    (messages) => {
                        let array = messages.map((item) => item.attributes);
                        array.forEach((item) => {
                            let li = document.createElement('li');
                            li.innerText = `${item.name}: ${item.content}`;
                            this.messageList.appendChild(li);
                        });
                    }
                );
        },
        bindEvents: function () {
            this.form.addEventListener('submit',(e) => {
                e.preventDefault();
                this.saveMessage();
            });
        },
        saveMessage: function () {
            let myForm = this.form;
            let content = myForm.querySelector('input[name=content]').value;
            let name = myForm.querySelector('input[name=name]').value;
            this.model.save(content,name).then(function(object) {
                let li = document.createElement('li');
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`;
                let messageList = document.querySelector('#messageList');
                messageList.appendChild(li);
                myForm.querySelector('input[name=content]').value = '';
            });
        }
    };
    controller.init(view,model);

}.call();
