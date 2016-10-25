var x = [0, 3, 5, 6, 10, 12, -12, 45, 34];

console.log(x);

var sortFunction = function (a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? -1 : 1;
};

x.sort(sortFunction);

console.log("x sorted : ", x);

var users = require('../data').users;

function sortUsers(user1,user2){
    return user1.name < user2.name ? -1 : 1 ;
}

users.sort(sortUsers);

console.log(users);