
button.addEventListener('click',(e) =>{
    $.ajax({
        url:"http://jack.com:8002/pay",
        dataType: "jsonp",
        success:function (response) {
            if(response === 'success'){
                amount.innerText = amount.innerText-1;
            }z
        }
    })
});

