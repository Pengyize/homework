var a = [ ,2,3];

for(var i=0;i<a.length;i++){
    console.log(a[i]);                          //undefined   2   3
}

a.forEach(function (x, i) {
    console.log(i + ':' + x);                  // 1:2   2:3
});

a = [undefined,2,3];

a.forEach(function (x, i) {
    console.log(i + ':' + x);                  // 0:undefined   1:2   2:3
});