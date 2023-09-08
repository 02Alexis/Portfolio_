import Message from "./Svgs/Message";

const Contact = () => {
  return (
    <div
      id="contact"
      className="
        w-full 
        flex 
        justify-center 
        items-center 
        flex-col 
        gap-4 
        mb-20
        "
    >
      <h2
        className="
            text-center 
            font-bold 
            text-xl 
            md:text-2xl 
            text-dark 
            dark:text-light 
        "
      >
        Contacto
      </h2>
      <p
        className="
            text-lightblue 
            m-auto 
            inline-block 
            text-center 
            font-medium 
            text-sm md:text-base
        "
      >
        Si lo puedes imaginar lo puedes crear.
      </p>
      <a href="mailto:alexis.tamayo.quintero@gmail.com" className="linkbutton">
        <p className="text-sm md:text-base font-semibold">Enviar Mensage</p>
        <Message />
      </a>
    </div>
  );
};

export default Contact;
