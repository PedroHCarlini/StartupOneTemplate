import logo from "../assets/images/logo.png";
import instagramIcon from "../assets/icons/instagram-icon.webp";
import linkedinIcon from "../assets/icons/linkedin-icon.jpg";

export const Footer = () => {
  return (
    <div className="w-full h-fit bg-[#111b21] px-10 py-6">
      <hr className="border-t border-white my-4" />
      <div className="h-[50px] flex justify-center items-center gap-2">
        <div className="w-[50px] h-[50px] border border-white rounded-full flex items-center justify-center cursor-pointer">
          <img className="w-6 h-6 " src={instagramIcon} alt="Instagram Icon" />
        </div>
        <div className="w-[50px] h-[50px] border border-white rounded-full flex items-center justify-center cursor-pointer">
          <p className="text-white text-2xl font-bold ">f</p>
        </div>
        <div className="w-[50px] h-[50px] border border-white rounded-full flex items-center justify-center cursor-pointer">
          <img className="w-10 h-10 " src={linkedinIcon} alt="Linkedin Icon" />
        </div>
      </div>
      <hr className="border-t border-white my-4" />
      <div className="flex flex-col gap-4 w-full md:flex-row md:gap-20">
        <img className="h-16 w-32" src={logo} alt="Logo" />
        <div className="w-full grid grid-cols-2 md:grid-cols-3 md:justify-center gap-6">
          <div>
            <h2 className="text-white font-bold text-xl">Paginas</h2>
            <p className="text-white hover:underline cursor-pointer">
              Pagina Inicial
            </p>
            <p className="text-white hover:underline cursor-pointer">
              Segurança
            </p>
            <p className="text-white hover:underline cursor-pointer">
              Depoimentos
            </p>
            <p className="text-white hover:underline cursor-pointer">
              Para empresas
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-xl">Contato</h2>
            <p className="text-white hover:underline cursor-pointer">
              contato@eibia.com
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-xl">Sobre</h2>
            <p className="text-white hover:underline cursor-pointer">
              Quem Somos
            </p>
          </div>
        </div>
      </div>
      <hr className="border-t border-white my-4" />
      <div className="flex flex-col md:flex-row justify-between">
        <p className="text-white">
          © 2025 EiBia LTDA. Todos os direitos reservados.
        </p>

        <div className="flex flex-col md:flex-row md:gap-4 gap-0 mb-6">
          <p className="text-white hover:underline cursor-pointer">
            Política de Privacidade
          </p>
          <p className="text-white hover:underline cursor-pointer">
            Termos de Uso
          </p>
        </div>
      </div>
    </div>
  );
};
