interface ContactDialogProps {
  title: string;
  message: string;
  closeButtonLabel: string;
  handleClose: () => void;
}

const ContactDialog = (props: ContactDialogProps) => {
  const { title, message, closeButtonLabel, handleClose } = props;
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
        <div className="bg-white rounded-2xl shadow-lg p-6 w-96 text-center">
          <i className="fa-solid fa-circle-exclamation text-4xl text-yellow-500 mb-4"></i>
          <h2 className="text-lg text-gray-600 font-semibold mb-2">{title}</h2>
          <p className="text-sm text-gray-600 mb-6">{message}</p>
          <div className="flex justify-center gap-4">
            <button className="btn bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-xl" onClick={handleClose}>
              {closeButtonLabel}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDialog;
