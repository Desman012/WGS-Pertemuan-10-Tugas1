// memanggil module fs(file system)
const fs = require("fs");

// membuat function request
const request = (path, res) => {
    // membaca file dari argument path
    fs.readFile(path, (err, data) => {
        // apabila terjadi error
        if (err) {
            // menuliskan html response code 404 (not found)
            res.writeHead(404)
            // menuliskan tulisan 'Error : page not found'
            res.write('Error : page not found')
        }
        else {
            res.write(data)
        }
        res.end()
    })
}

// mengexport module
module.exports = { request }