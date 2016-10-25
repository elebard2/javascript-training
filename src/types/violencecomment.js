var topics = require('../data').topics;

var violentComms=[];

var violentTest = topics.forEach(function(topic){
    return topic.comments.forEach(function (comment){
        if(comment.tags!==undefined&&comment.tags.includes('science')&&!comment.user.admin)
            violentComms.push(comment.content);
    })
})

console.log(violentComms);