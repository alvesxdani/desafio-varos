import Button from "@/Components/Button";
import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section
      id="intro"
      className="w-[100%] px-4 mt-[160px] flex flex-col items-center gap-[72px] mb-[164px]"
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
        <div className="dark:bg-dark bg-white p-10 rounded-3xl m-[1px] text-xl flex gap-10">
          <span className="whitespace-nowrap">visto em</span>
          <div className="overflow-hidden">
          <div className="flex w-100 gap-8 animaInfinite w-[180%]">
            <Image
              src="./Intro/Group.svg"
              width={25}
              height={25}
              alt="Logo"
              priority={true}
              className="brightness-0 dark:brightness-100"
            />
            <Image
              src="./Intro/Group-1.svg"
              width={25}
              height={25}
              alt="Logo"
              priority={true}
              className="brightness-0 dark:brightness-100"
            />
            <Image
              src="./Intro/Group-2.svg"
              width={25}
              height={25}
              alt="Logo"
              priority={true}
              className="brightness-0 dark:brightness-100"
            />

            <Image
              src="./Intro/Vector.svg"
              width={25}
              height={25}
              alt="Logo"
              priority={true}
              className="brightness-0 dark:brightness-100"
            />

            <Image
              src="./Intro/Group-3.svg"
              width={25}
              height={25}
              alt="Logo"
              priority={true}
              className="brightness-0 dark:brightness-100"
            />
            <Image
              src="./Intro/Group-4.svg"
              width={25}
              height={25}
              alt="Logo"
              priority={true}
              className="brightness-0 dark:brightness-100"
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
