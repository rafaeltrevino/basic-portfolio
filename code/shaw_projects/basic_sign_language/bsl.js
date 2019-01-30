var fs = require("fs");

fs.readdir("./files", function (err, files) {
    if (err) throw err;

    files.forEach(function (element) {
        var fileName = element;
        var filePath = "./files/" + fileName;

        fs.readFile(filePath, "utf8", function (err, data) {
            var lineRegex = /(.+\r)/g;
            var hwRegex = /(.*(?= \-))/g;
            var descRegex = /(\-.*)/g;
            var content = data;
            var lines = content.match(lineRegex);
            var lineCount = 0;

            lines.forEach(function (line) {
                lineCount++;
                var entry;

                if (line.match(hwRegex) != null) {
                    var headword = line.match(hwRegex);
                    var description = line.match(descRegex);
                    entry = headword + " | " + description
                } else {
                    entry = line
                }

                fs.appendFile('./data.txt', `${fileName} | ${lineCount} | ${entry}\n`, 'utf8', function(err) {
                    if (err) {console.log(`Error occurred: ${err}`)};
                });
            })
        });
    });
});