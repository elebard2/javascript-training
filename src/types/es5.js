var topics = require('../data').topics;

var filtered = topics.filter( function(topic){
    return topic.comments.some(function (comment){
        return comment.user.name==='Sheldon';
    })
});

console.log("filtered topics : ", filtered.length);

var titles = filtered.map(function(topic){
    return topic.title;
});

console.log("titles : ", titles);

var result = topics.filter(topic => topic.comments.some(comment => comment.user.name==='Sheldon'));

console.log("filtered topics : ",result.length);

console.log("titles : ", result.map(topic => topic.title));