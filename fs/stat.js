var fs = require('fs');

fs.stat('first.txt', function (err, stats) {
    console.log(stats.isFile()); 		//true
})