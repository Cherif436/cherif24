"use server";

import React from 'react'
import { Resend } from "resend";
import { getErrorMessage, validateString } from '@/lib/utils';
import ContactFormEmail from '@/email/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async(formData: FormData) => {
  const senderName = formData.get("senderName");
  const senderPrenom = formData.get("senderPrenom");
  const senderSubject = formData.get("senderSubject");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderName, 500)) {
    return {
      error: "Nom invalide",
    };
  }
  if (!validateString(senderPrenom, 500)) {
    return {
      error: "Prénom invalide",
    };
  }
  if (!validateString(senderSubject, 500)) {
    return {
      error: "Sujet invalide",
    };
  }
  if (!validateString(senderEmail, 500)) {
    return {
      error: "E-mail invalide",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Message invalide",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Formulaire de contact <portfolio@resend.dev>",
      to: "chercher1909@gmail.com",
      subject: "Message du formulaire de contact",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        senderName: senderName,
        senderPrenom: senderPrenom,
        senderSubject: senderSubject,
        message: message,
        senderEmail: senderEmail,
        
      })
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  }

  
}
