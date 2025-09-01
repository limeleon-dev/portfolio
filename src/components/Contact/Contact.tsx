import { useFormik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { getContactValidation } from "./ContactValidation";
import ContactDialog from "./ContactDialog";
import { sendAutoResponseMail, sendContactMail } from "../../services/email.service";
import { scrollToSection } from "../../utils/scrollToSection.utils";

const Contact = () => {
  const { t } = useTranslation();
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      message: "",
    },
    validationSchema: getContactValidation(t),
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
        <section id="contact" className="flex items-center justify-center bg-transparent py-6">
          <div className="card w-[40vw] bg-navbar border-white border-2 shadow-navbar">
            <div className="card-body">
              <div className="text-center ">
                <h2 className="text-2xl mb-2 font-bold">{t("contact.title")}</h2>
                <p className="text-base text-center font-semibold">
                  {t("contact.description")}
                </p>
              </div>

              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-base">{t("contact.nameLabel")}</legend>
                  <label className="input text-dark w-full bg-white rounded-lg border border-gray-300 px-3 py-2">
                    <i className="fa-solid fa-user"></i>
                    <input
                        type="text"
                        name="username"
                        placeholder={t("contact.namePlaceholder")}
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        className="w-full focus:outline-none"
                    />
                  </label>
                  {formik.touched.username && formik.errors.username && (
                      <div className="mt-2 px-3 py-2 rounded-lg bg-red-100 border border-red-300 text-red-700 text-base font-medium shadow-sm">
                        {formik.errors.username}
                      </div>
                  )}
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-base">{t("contact.emailLabel")}</legend>
                  <label className="input w-full bg-white rounded-lg border border-gray-300 px-3 py-2">
                    <i className="fa-solid fa-envelope"></i>
                    <input
                        type="text"
                        name="email"
                        placeholder={t("contact.emailPlaceholder")}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className="w-full focus:outline-none"
                    />
                  </label>
                  {formik.touched.email && formik.errors.email && (
                      <div className="mt-2 px-3 py-2 rounded-lg bg-red-100 border border-red-300 text-red-700 text-base font-medium shadow-sm">
                        {formik.errors.email}
                      </div>
                  )}
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-base">{t("contact.messageLabel")}</legend>
                  <textarea
                      className="textarea h-24 w-full bg-white rounded-lg border border-gray-300 px-3 py-2 focus:outline-none"
                      name="message"
                      placeholder={t("contact.messagePlaceholder")}
                      value={formik.values.message}
                      onChange={formik.handleChange}
                  />
                  {formik.touched.message && formik.errors.message && (
                      <div className="mt-2 px-3 py-2 rounded-lg bg-red-100 border border-red-300 text-red-700 text-base font-medium shadow-sm">
                        {formik.errors.message}
                      </div>
                  )}
                </fieldset>

                <div className="form-control mt-8">
                  <button
                      type="submit"
                      disabled={hasBeenSubmitted}
                      onClick={() => scrollToSection("contact")}
                      className="w-full btn btn-sm bg-primary text-white hover:bg-primary-dark transition-navbar focus-navbar rounded-lg shadow-md hover:shadow-lg"
                  >
                    <span className="hidden sm:inline text-base">{t("contact.sendButton")}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {openDialog && (
              <ContactDialog
                  title={t("contact.dialogTitle")}
                  message={t("contact.dialogMessage")}
                  closeButtonLabel={t("contact.dialogClose")}
                  handleClose={handleCloseDialog}
              />
          )}
        </section>
      </>
  );
};

export default Contact;