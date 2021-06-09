const express = require('express'); 
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const emailPassword = process.env.EMAIL_PASSWORD
 require('dotenv').config();

const app = express();

app.use(express.static('../public'))
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {

})

app.post('/', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    
    async function main() {
        
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false, 
          auth: {
            user: 'jalissaw32', 
            pass: `${process.env.EMAIL_PASSWORD}`, 
          },
          
          tls: {
              rejectUnauthorized: true
          }
        });
      
    
        let info = await transporter.sendMail({
          from: '"Portfolio Website"', 
          to: "jalissa_williams@yahoo.com", 
          subject: `${name}, ${email}`,
          text: `${name}`,
          html: `${message}, ${email}`,
        });
        
      }
      
      main().catch(console.error);
    setTimeout((function() {res.redirect('/')}), 2500);
})




const port = process.env.PORT || 5500;
app.listen(port, () => {
    console.log(`http://localhost:${port}: server started`);
});