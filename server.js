// memanggil module http
const http = require('http')

// memanggil local module function
const func = require('./function')

// membuat server
http
    .createServer((req, res) => {
        // memasukan request url ke dalam variable url
        const url = req.url

        // menampilkan url kedalam terminal
        console.log(url);

        // menuliskan html response status 200 (ok)
        res.writeHead(200, {
            // menulis tipe kontennya berupa text html
            'Content-Type': 'text/html',
        })

        // apabila client request /about
        if (url === '/about') {
            /*memanggil function request dari module function
            untuk membaca file contact.html
             */
            func.request('./about.html', res)
        }

        // apabila client request url ke contact
        else if (url === '/contact') {
            /*memanggil function request dari module function
            untuk membaca file contact.html
             */
            func.request('./contact.html', res)

            // apabila client tidak merequest url apapun
        } else {
            /*memanggil function request dari module function
            untuk membaca file index.html
             */
            func.request('./index.html', res)
        }

    })
    // membaca port
    .listen(3000, (/* nama website, jika kosong berarti localhost */) => {
        // menampilkan ke terminal
        console.log('Server listening on port 3000');
    })