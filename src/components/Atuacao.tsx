import Mapa from './Mapa'; 

const Atuacao: React.FC = () => {
  return (
      <section id="atuacao" className="max-w mx-auto p-6 py-16 bg-white rounded-lg shadow-lg">
        <h2 className="ml-10 text-3xl font-bold mb-4 text-left text-purple-800">Área de Atendimento</h2>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <ul className="text-purple-800 ml-10 text-xl list-disc list-inside">
              <li>Barra da Tijuca</li>
              <li>Recreio</li>
              <li>Adjacências</li>
            </ul>
          </div>
          <div className="w-1/2 mr-10">
            <Mapa />
          </div>
        </div>
      </section>
  );
};

export default Atuacao;
