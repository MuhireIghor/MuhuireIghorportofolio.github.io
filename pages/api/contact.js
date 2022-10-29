// require("dotenv").config();
// export default function(req,res){
//     let nodemailer = require("nodemailer");
//     const password = process.env.PASSWORD;
//     const email = process.env.EMAIL;

//     const transporter = nodemailer.createTransport(
//         {
//             port:465,
//             host:"smtp.gmail.com",
//             auth:{
//                 user:email,
//                 pass:password
//             },
//             secure:true
//         }
//     )
//     const mailData = {
//         from:req.body.email,
//         to:"muhireighor123@gmail.com",
//         subject:`Message from ${req.body.email}`,
//         text:req.body.message,
//         html:<div>{req.body.message}</div>

//     }
//     transporter.sendMail(mailData,(err,info)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log(info);
//         }
//     })
//     res.status(200);
//     console.log(req.body);
// }