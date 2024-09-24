const express = require("express")
const app = express() //inisialisasi express
const port = 3000 // port

// route /
app.get("/", (req, res) => {
    res.send("Hello");
});

// route /about
app.get("/about", (req, res) => {
    res.send("About Us");
});

// route /contact
app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/contact.html");
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