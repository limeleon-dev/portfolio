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
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm backdrop-brightness-25 z-50">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-[500px] max-w-[90vw] text-center border border-white border-opacity-20">
          <i className="fa-solid fa-circle-check text-5xl mb-6 text-green-700"></i>
          <h2 className="text-2xl text-black font-bold mb-4">{title}</h2>
          <p className="text-base text-black mb-8">{message}</p>
          <div className="flex justify-center gap-4">
            <button
              className="btn bg-gray-300 hover:bg-gray-400 text-black px-6 py-3 rounded-xl text-base"
              onClick={handleClose}
            >
              {closeButtonLabel}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDialog;
