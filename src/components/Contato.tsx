
const Contato: React.FC = () => {
  const whatsappNumber = "5521966749092";
  const instagramLink = "https://www.instagram.com/tiamilenatransporte/";

  return (
    <div id="contato"
      className="w-full py-10" 
      style={{ backgroundImage: "url('/fundo_contato.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl text-purple-800 px-10 font-bold mb-4 text-center">Fale com a gente!</h2>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
  
          <div className="ml-16 flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src="/whatsapp.png" 
                  alt="WhatsApp" 
                  className="w-10 h-10 hover:shadow-xl"
                />
              </a>
              <span className="text-lg text-purple-600 hover:text-green-800 transition">
                (21) 96674-9092
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src="/instagram.png" 
                  alt="Instagram" 
                  className="w-10 h-10 hover:shadow-xl" 
                />
              </a>
              <span className="text-lg text-purple-600 hover:text-pink-800 transition">
                @tiamilenatransporte
              </span>
            </div>
          </div>

          <div className="mr-16 flex flex-col items-center">
            <img src="/qrcode.JPG" alt="QR Code" className="w-32 h-32" />
            <h3 className="text-lg text-purple-800 font-semibold mb-2 text-center">... Ou escaneie nosso QR Code</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
