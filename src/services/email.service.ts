import { emailjsConfig } from "../config/emailjs.config";
import emailjs from "@emailjs/browser";

export interface templateParameters {
  emailTo: string;
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
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

/*export const sendAutoResponseMail = (): Promise<unknown> => {
  init();
  return emailjs
    .send(emailjsConfig.emailService, emailjsConfig.emailTemplateAutoResponse, null)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};*/
