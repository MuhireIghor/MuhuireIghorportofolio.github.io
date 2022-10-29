require("dotenv").config();
export default function(req,res){
    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport(
        {
            port:465,
            host:"smtp.gmail.com",
            auth:{
                user:"muhireighor123@gmail.com",
                pass:"Frater Dei1"
            },
            secure:true
        }
    )
    console.log(req.body);
}