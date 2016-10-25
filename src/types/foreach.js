var users = require('../data').users;

users.forEach(function(user) {
    console.log('user name ', user.name);
});

users.forEach(user => console.log('user name fat arrow : ', user.name));

var tabAdmin=[];
users.forEach(function(user) {
    if (user.admin) {
        tabAdmin.push(user.name);
    }
})

console.log(tabAdmin);