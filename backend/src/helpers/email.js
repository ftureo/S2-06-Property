import nodemailer from "nodemailer";
import { transportVar } from "./.transportVar.js";

export const emailToken = async (user) => {
  const { email, name, token } = user;
  const transport = nodemailer.createTransport(transportVar);
  const info = await transport.sendMail({
    from: '"GamaGames - User Accounts" <no-reply@gamagames.com>',
    to: email,
    subject: "GamaGames - Confirm your account",
    text: "Confirm your GamaGames account",
    html: `<p>Hi ${name}, please validate your e-mail</p>
          <p> Your account is almost ready, just click the button to confirm your account</p>
          <button><a href="http://localhost:3000/confirmed/${token}"> Click Here </a></button>
          <p> If you havent registered to GamaGames, please ignore this e-mail </p>`
  });
};
