import nodemailer from 'nodemailer';

import { EMAIL_PASSWORD } from './env.js'

export const accountEmail = 'alhamza2012@gmail.com';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "alhamza2012@gmail.com",
    pass: EMAIL_PASSWORD
  }
})

export default transporter;