export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-[#B8B5AF] pt-20 pb-10 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Linha superior */}
        <div className="w-full h-[1px] bg-[#2A2A2A] mb-16"></div>

        {/* Conteúdo principal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo / Nome */}
          <div className="text-center md:text-left">
            <h3 className="text-xs tracking-[0.6em] uppercase text-white">
              Instituto Milla
            </h3>
            <div className="w-10 h-[1px] bg-[#C6A75E] mt-4 mx-auto md:mx-0"></div>
          </div>

          {/* Informações */}
          <div className="text-sm tracking-wide text-center md:text-right space-y-2">
            <p>Atendimento com horário marcado</p>
            <p>institutomilla@gmail.com</p>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-16 text-center text-xs tracking-wider text-[#8C877F]">
          © {new Date().getFullYear()} Instituto Milla. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
}
