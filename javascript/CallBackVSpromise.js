let fs = require("fs");
function letsRead(filename){
    return new Promise(function(resolve, reject) { // internal state [pending, fulfilled, rejected] // pending = unsettled
        fs.readFile(filename, {encoding: 'utf8'}, function(err, contents) {
            if (err) {
                reject(err);
                return;
            }
            resolve(contents);
        });
    });
}

let p1 = letsRead('example.txt');

p1.then(function(contents) {
    console.log("from p1 " + contents);
}, function(err) {
    console.log("Error: " + err.message);
});


p1.catch(function(err) {
    console.log("Error: " + err.message);
}).finally(function() {
    console.log("finally");
});

let p2 = p1.then(function(values) {
    console.log("from p2 " + values);
    // return "p2 resolved";
});

p2.then(function() {
    console.log("p2 resolved");
});

// async -- promotes functions to return promises