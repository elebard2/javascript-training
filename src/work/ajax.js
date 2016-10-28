$.get('http://localhost:3000/api/users/', function (users) {

    console.log("receiving users", users);

    users.sort(function (user1, user2) {
        return user1.name < user2.name ? -1 : 1;
    });

    displayUsers(users);

});


$.get('/api/users/admins/', function (admins) {
    console.log("receive data", admins.map(admin => admin.name));
});

function displayUsers(users) {
    const block = $('<div>');
    users.forEach(function (user) {
        const pElement = $('<p>').text(user.name);
        block.append(pElement);
    });
    $('section.users').append(block);
}