var topics = require('../data').topics;

var pennyComms=[];

var pennyTest = topics.forEach(function(topic){
    return topic.comments.forEach(function (comment){
        if(comment.user.id===6)
            pennyComms.push(comment.id);
    })
})

console.log(pennyComms);