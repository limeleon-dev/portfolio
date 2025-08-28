import { object, string } from "yup";

export const contactValidation = object().shape({
  username: string()
    .trim()
    .matches(/^[A-Za-z][A-Za-z0-9-]*$/, "not good")
    .required("is requis qui"),
  email: string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "nonnonono"
    )
    .required("toto12"),
  message: string().required("message obligatoire"),
});
