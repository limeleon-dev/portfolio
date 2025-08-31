import { useFormik } from "formik";
import { useState } from "react";
import { contactValidation } from "./ContactValidation";
import ContactDialog from "./ContactDialog";
//import { sendAutoResponseMail, sendContactMail } from "../../services/email.service";

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

      console.log(values);

      /*await sendContactMail({
        nameFrom: values.username,
        emailFrom: values.email,
        message: values.message,
      });

      await sendAutoResponseMail(values.email);*/

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
      <section id="contact" className="flex items-center justify-center bg-red-200 py-12">
        <div className="card w-[50vw] bg-yellow-100">
          <div className="card-body">
            <div className="text-center ">
              <h2 className="text-2xl mb-2 font-bold">Je suis à votre écoute, écrivez moi !</h2>
              <p className="text-base text-center font-semibold">
                Que ce soit pour une question, un projet ou juste pour dire bonjour, n'hésitez pas à me laisser un
                message et je me ferai un plaisir de vous répondre.
              </p>
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">Votre nom :</legend>

                <label className="input text-dark w-full bg-white rounded-lg border border-gray-300 px-3 py-2">
                  <i className="fa-solid fa-user"></i>
                  <input
                    type="text"
                    name="username"
                    placeholder="John Doe"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    className="w-full focus:outline-none"
                  />
                </label>
                {formik.touched.username && formik.errors.username && (
                  <div className="mt-2 px-3 py-2 rounded-lg bg-red-100 border border-red-300 text-red-700 text-sm font-medium shadow-sm">
                    {formik.errors.username}
                  </div>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">Votre adresse mail :</legend>
                <label className="input w-full bg-white rounded-lg border border-gray-300 px-3 py-2">
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    type="text"
                    name="email"
                    placeholder="john.doe@example.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className="w-full focus:outline-none"
                  />
                </label>
                {formik.touched.email && formik.errors.email && (
                  <div className="mt-2 px-3 py-2 rounded-lg bg-red-100 border border-red-300 text-red-700 text-sm font-medium shadow-sm">
                    {formik.errors.email}
                  </div>
                )}
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-sm">Votre message :</legend>

                <textarea
                  className="textarea h-24 w-full bg-white rounded-lg border border-gray-300 px-3 py-2 focus:outline-none"
                  name="message"
                  placeholder="Bonjour, je te contacte pour te parler de ..."
                  value={formik.values.message}
                  onChange={formik.handleChange}
                />
                {formik.touched.message && formik.errors.message && (
                  <div className="mt-2 px-3 py-2 rounded-lg bg-red-100 border border-red-300 text-red-700 text-sm font-medium shadow-sm">
                    {formik.errors.message}
                  </div>
                )}
              </fieldset>

              <div className="form-control mt-8">
                <button
                  type="submit"
                  className="btn btn-primary w-full text-base font-bold py-3"
                  disabled={hasBeenSubmitted}
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>

        {openDialog && (
          <ContactDialog
            title="Votre message a bien été envoyé !"
            message="Je vous remercie pour votre message ! Je reviendrai vers vous dans les plus brefs délais. Vous allez recevoir un email de confirmation automatique."
            closeButtonLabel="Fermer"
            handleClose={handleCloseDialog}
          />
        )}
      </section>
    </>
  );
};

export default Contact;
