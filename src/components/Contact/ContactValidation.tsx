import { object, string } from "yup";
import { EMAIL_REGEX_PATTERN, USERNAME_REGEX_PATTERN } from "../../utils/regex.utils";

export const contactValidation = object().shape({
  username: string()
    .trim()
    .matches(USERNAME_REGEX_PATTERN, "Merci de n'utiliser que des chiffres, des lettres ou des tirets '-'.")
    .required("Veuillez saisir votre nom."),
  email: string()
    .trim()
    .matches(EMAIL_REGEX_PATTERN, "Merci d'utiliser une adresse mail valide.")
    .required("Veuillez saisir votre adresse mail."),
  message: string().required("Veuillez saisir votre message."),
});
