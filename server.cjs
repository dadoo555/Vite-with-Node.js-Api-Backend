// /* eslint-disable no-undef */
// //server-dev.js
// const fs = require('fs');
// const express = require('express')
// const { createServer } = require('vite');
 
// const app = express();


// const vite =  await createServer({
//   server: {
//     middlewareMode: true,
//   },
//   appType: 'custom',
// });

// app.use(vite.middlewares);
 
// app.use('*', async (req, res) => {
//   const url = req.originalUrl;
 
//   try {
//     const template = await vite.transformIndexHtml(url, fs.readFileSync('index.html', 'utf-8'));
//     const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
 
//     const html = template.replace(`<!--outlet-->`, render);
//     res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
//   } catch (error) {
//     res.status(500).end(error);
//   }
// });
 
// app.listen(4173, () => {
//   console.log('http://localhost:4173.');
// });


/* eslint-disable no-undef */
const express = require('express')
const app = express()


const mysql = require('mysql2')
const connection = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'calendario',
    database: 'tabela_teste',
    waitForConnections: true
})




app.get('/api/usuarios', (req,res)=>{

    const valor = `SELECT * FROM tabela`

    connection.promise().query(valor).then((resposta)=>{
        const [valores] = resposta
        res.json(valores)
    }).catch((err)=>{
        throw err
    })


})

app.post('/api/usuarios', (req, res)=>{

  const query = `INSERT INTO tabela (nome, sobrenome, email)
                VALUES ('${aa}','${aa}','${dsa}')`
  connection.promise().query(query).then(()=>{
    res.status(200).json({status: 'OK'})
  }).catch(err=>{
    res.status(500).json({status: 'Erro: ' + err})
  })


})

app.listen(3000)