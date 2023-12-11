import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-5 text-slate-100">
      <h1 className="text-4xl subpixel-antialiased md:text-6xl mb-1 md:mb-4 font-black ">
        Lucas Fraggioli
      </h1>
      <h3 className="text-base md:text-xl mb-2 pt-3 font-semibold text-slate-300">
        Full-Stack Web Developer
      </h3>
      <p className="text-sm max-w-xl mb-4 font-medium">
        ¡Saludos! Como programador cuento con una sólida formación en
        programación orientada a objetos, con énfasis en JavaScript. Mis
        primeros pasos en la programación los di con lenguajes más desafiantes
        como JAVA y C++. Estos cimientos sólidos han sido cruciales en mi
        desarrollo como programador.
      </p>
    </div>
  );
}

export default Intro;
