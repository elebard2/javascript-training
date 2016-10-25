var x = [0, 3, 5, 6, 10, 12, -12, 45, 34];

x.splice(9,0,50);

console.log(x);

x.push(50);

console.log(x);

x.pop();

console.log(x);

console.log("first : ", x[0]);

x.sort();
console.log("x sorted : ", x);

x.sort(function(a,b) {
    if (a<b){
        return -1;
    } else if (a>b) {
        return 1;
    }
    return 0;
});

console.log("x correctly sorted : ", x);

var sortFunction = (a,b) => a<b ? -1 : 1;
x.sort(sortFunction);
console.log("ES 2015 sorted : ", x);