import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-65 max-lg:mt-50">
      <h1 className="text-mainText text-2xl font-bold">Bem vindo ao ExRate</h1>
      <p className="text-mainText">
        O melhor lugar para você fazer a sua conversão de moedas
      </p>
      <Link
        className="bg-primarybuttons text-contrast p-2 w-25 text-center rounded-3xl mt-2 hover:bg-hoverbuttons transition-colors duration-100"
        href="/price"
      >
        Iniciar!
      </Link>
    </div>
  );
}
