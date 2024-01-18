import Button from "@/Components/Button";
import React from "react";

const Intro = () => {
  return (
    <section
      id="intro"
      className="w-[100%] px-4 mt-[160px] flex flex-col items-center gap-[72px]"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-center font-semibold text-5xl leading-[50px]">
            Investir de forma mais inteligente passa por aqui.
          </h1>
          <p className="text-center text-lg">
            Fazemos de tudo para que você possa conquistar seus sonhos da melhor
            forma possível.
          </p>
        </div>
        <Button format="rounded" bg="green">
          Comprar agora
        </Button>
      </div>

      <div className="rounded-3xl p-px bg-gradient-to-r from-[#4D5358] to-transparent w-[100%]">
        <div className="dark:bg-dark bg-white p-10 rounded-3xl m-[1px] text-xl">
          visto em
        </div>
      </div>
    </section>
  );
};

export default Intro;
