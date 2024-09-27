const express = require("express")
const app = express() //inisialisasi express
const port = 3000 // port

app.set('view engine', 'ejs');

// route /
app.get("/", (req, res) => {
    //res.send("Hello");

    const berita = [
        {
            judul: "Berita 1",
            isi: "Isi Berita"
        },
        {
            judul: "Berita 2",
            isi: "isi berita 2"
        }
    ];
    res.render('index', {title:
    'Halaman Home', berita});

});

// route /about
app.get("/about", (req, res) => {
    // res.send("About Us");
    res.render('about', {title: 'Halaman Home'});
});

// route /contact
app.get("/contact", (req, res) => {
    // res.sendFile(__dirname + "/contact.html");
    res.render('contact', {title: 'Halaman Home'});
});

// route /prodi
app.get("/prodi", (req, res) => {
    // res.send("prodi");
    const prodi = [
        {
            Prodi: "Sistem Informasi",
            Singkatan: "SI",
            Fakultas: "FIKR"
        },
        {
            Prodi: "informatika",
            Singkatan: "IF",
            Fakultas: "FIKR"
        },
        {
            Prodi: "Teknik Elektro",
            Singkatan: "TE",
            Fakultas: "FIKR"
        }
    ];
    res.render('prodi', {title: 'Program Studi', prodi});
});

//route /mahasiswa 
app.get("/mahasiswa", (req, res) => { 
    res.json({
        "status": "success",
        "message": "Data mahasiswa",
        "data": [
            { npm: 2222640041, nama: "ahmad" },
            { npm: 2222640042, nama: "ahmad1" }, 
            { npm: 2222640043, nama: "ahmad3" }  
        ]
    });
});

//route /dosen
app.get("/dosen", (req, res) => { 
    res.json({
        "status": "success",
        "message": "Data dosen",
        "data1": [
            { prodi: "SI",
              dosen: ["Iis", "Faris", "Dafid" ],

            },  

            { prodi: "IF", 
              dosen: ["Derry", "Siska", "Yohannes"]
            },
        ]
    })
});

//handle route yang tidak ada
app.use("", (req, res) =>{
res.send("<h1>404 not found</h1>");
});

// jalankan server
app.listen(port, () => {
    console.log(`Server dapat diakses di http://localhost:${port}`);
});