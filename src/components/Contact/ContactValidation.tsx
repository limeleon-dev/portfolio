import { object, string } from "yup";
import { EMAIL_REGEX_PATTERN, USERNAME_REGEX_PATTERN } from "../../utils/regex.utils";

export const getContactValidation = (t: (key: string) => string) =>
    object().shape({
      username: string()
          .trim()
          .matches(USERNAME_REGEX_PATTERN, t("contact.errors.nameInvalid"))
          .required(t("contact.errors.nameRequired")),
      email: string()
          .trim()
          .matches(EMAIL_REGEX_PATTERN, t("contact.errors.emailInvalid"))
          .required(t("contact.errors.emailRequired")),
      message: string().required(t("contact.errors.messageRequired")),
    });