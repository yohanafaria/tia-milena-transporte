import { send } from "@emailjs/browser";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface PopupProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup: React.FC<PopupProps> = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    schoolName: "",
    phone: "",
    entryTime: "",
    exitTime: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    send(
      "service_n9n97zd",
      "template_n3u16gw",
      formData,
      "VUtKhjH79_aerJLmx"
    )
      .then(() => {
        toast.success("Formulário enviado com sucesso!", {
          className: 'toast-success',
          style: {
            backgroundColor: '',
            color: '#A18DD9',
          },
        });
        setFormData({
          name: "",
          email: "",
          address: "",
          schoolName: "",
          phone: "",
          entryTime: "",
          exitTime: "",
        });
      })
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="relative z-10 bg-white/30 backdrop-blur-xl rounded-3xl p-8 shadow-lg w-full max-w-md mt-20">
            <button
              type="button"
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <AiOutlineClose size={24} />
            </button>
            <h2 className="text-2xl text-center text-white font-semibold mb-4" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
              Faça já sua pré-matrícula e garanta seu desconto!
            </h2>
            <form onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded border-2 border-yellow-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded border-2 border-yellow-500"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Telefone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded border-2 border-yellow-500"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Endereço"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded border-2 border-yellow-500"
                required
              />
              <input
                type="text"
                name="schoolName"
                placeholder="Nome da Escola"
                value={formData.schoolName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded border-2 border-yellow-500"
                required
              />
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label htmlFor="entryTime" className="block mb-1 text-white">Horário de Entrada</label>
                  <input
                    type="time"
                    name="entryTime"
                    value={formData.entryTime}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded border-2 border-yellow-500"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="exitTime" className="block mb-1 text-white">Horário de Saída</label>
                  <input
                    type="time"
                    name="exitTime"
                    value={formData.exitTime}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded border-2 border-yellow-500"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-yellow-500 text-white font-semibold rounded-full px-12 py-2 shadow transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
        style={{ width: '300px' }} // Personalizando o estilo do container
      />
    </>
  );
};

export default Popup;
