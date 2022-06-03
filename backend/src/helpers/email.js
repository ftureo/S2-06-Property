import nodemailer from "nodemailer"

export const emailToken = async (user) => {
    const {email, name, token} = user;
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "b11f6f6d7ff33e",
          pass: "af8adfed0b608d"
        }
      });
      const info = await transport.sendMail({
          from: '"GamaGames - User Accounts" <no-reply@gamagames.com>',
          to: email,
          subject: "GamaGames - Confirm your account",
          text: "Confirm your GamaGames account",
          html: 
          `<p>Hi ${name}, please validate your e-mail</p>
          <p> Your account is almost ready, just click the button to confirm your account</p>
          <button><a href="http://localhost:3000/confirmed/${token}"> Click Here </a></button>
          <p> If you havent registered to GamaGames, please ignore this e-mail </p>`
      })
};

