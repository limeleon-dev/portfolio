import { emailjsConfig } from "../config/emailjs.config";
import emailjs from "@emailjs/browser";

export interface templateParameters {
  emailTo?: string;
  emailFrom?: string;
  nameFrom: string;
  message: string;
  [key: string]: unknown;
}

let hasBeenInitialized: boolean = false;

function init(): void {
  if (!hasBeenInitialized) {
    const publicKey = emailjsConfig.publicKey;
    emailjs.init({
      publicKey,
    });
    hasBeenInitialized = true;
  }
}

export const sendContactMail = (parameters: templateParameters): Promise<unknown> => {
  init();
  return emailjs
    .send(emailjsConfig.emailService, emailjsConfig.emailTemplateContact, parameters)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Une erreur est survenue :", error);
      return error;
    });
};

export const sendAutoResponseMail = (emailToParam: string): Promise<unknown> => {
  init();
  return emailjs
    .send(emailjsConfig.emailService, emailjsConfig.emailTemplateAutoResponse, { emailTo: emailToParam })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Une erreur est survenue :", error);
      return error;
    });
};
