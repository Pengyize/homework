window.Model = function (options) {
    let resourceName = options.resourceName;
    return{
        init: function () {
            let APP_ID = 'Yjq0f8ywnjQxEVknFWRfTmGf-gzGzoHsz';
            let APP_KEY = 'cmvXP5F2XstS4t9AnH5oNqHQ';
            AV.init({appId: APP_ID, appKey: APP_KEY});
        },
        fetch: function () {
            let query = new AV.Query(resourceName);
            return query.find();    //Promise对象
        },
        save: function (object) {
            let X = AV.Object.extend(resourceName);
            let x = new X();
            return x.save(object);      //Promise对象
        }
    }
};