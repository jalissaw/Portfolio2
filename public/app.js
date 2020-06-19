const express = require('express'); 
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose')

const app = express();


// app.use(express.static(__dirname + 'public'));
app.use(express.static('../public'))
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {

})

app.post('/userdata', (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    console.log(name, email, message)
    
    async function main() {
        
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false, 
          auth: {
            user: 'jalissaw32', 
            pass: 'Winchester32@', 
          },
          
          tls: {
              rejectUnauthorized: false
          }
        });
      
    
        let info = await transporter.sendMail({
          from: '"Nodemailer"', 
          to: "jalissa_williams@yahoo.com", 
          subject: `From Nodemailer: ${name}`, // Subject line
          text: "Hello world?", // plain text body
          html: `${message}`, // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        
      }
      
      main().catch(console.error);
    setTimeout((function() {res.redirect('/')}), 2500);
})






const port = process.env.PORT || 5500;
app.listen(port, () => {
    console.log(`http://localhost:${port}: server started`);
})