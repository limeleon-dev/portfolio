import { useFormik } from "formik";
import { useState } from "react";
import { contactValidation } from "./ContactValidation";
import ContactDialog from "./ContactDialog";
import { sendAutoResponseMail, sendContactMail } from "../../services/email.service";

const Contact = () => {
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      message: "",
    },
    validationSchema: contactValidation,
    onSubmit: async (values) => {
      setHasBeenSubmitted(true);

      await sendContactMail({
        nameFrom: values.username,
        emailFrom: values.email,
        message: values.message,
      });

      await sendAutoResponseMail(values.email);

      setOpenDialog(true);
    },
  });

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setHasBeenSubmitted(false);
    formik.resetForm();
  };

  return (
    <>
      <div id="contact" className="">
        <h1>N'hésitez pas à me contactez !</h1>

        <p>Message d'intro</p>
        <form onSubmit={formik.handleSubmit}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Votre nom :</legend>

            <label className="input">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                name="username"
                placeholder="John Doe"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
            </label>
            {formik.touched.username && formik.errors.username && <div className="error">{formik.errors.username}</div>}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Votre adresse mail :</legend>
            <label className="input">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="text"
                name="email"
                placeholder="mail@site.com"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </label>
            {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Votre message :</legend>

            <textarea
              className="textarea h-24"
              name="message"
              placeholder="Bonjour, je te contacte pour te parler de ..."
              value={formik.values.message}
              onChange={formik.handleChange}
            ></textarea>
            {formik.touched.message && formik.errors.message && <div className="error">{formik.errors.message}</div>}
          </fieldset>

          <button type="submit" className="btn w-auto" disabled={hasBeenSubmitted}>
            Envoyer
          </button>
        </form>

        {openDialog && (
          <ContactDialog
            title="Merci !"
            message="Merci ! Votre message a bien été envoyé. Vous recevrez un accusé de réception par email."
            closeButtonLabel="Fermer"
            handleClose={handleCloseDialog}
          />
        )}
      </div>
    </>
  );
};

export default Contact;
