import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-primarybuttons text-contrast h-14">
      <img src="/logo.png" alt="logo" className="w-50" />
      <ul className="flex gap-5 mx-10 max-sm:hidden">
        <li className="p-1 hover:bg-contrast hover:text-mainText w-25 text-center rounded-2xl transition-colors duration-300">
          <Link href="/">Home</Link>
        </li>
        <li className="p-1 hover:bg-contrast hover:text-mainText w-25 text-center rounded-2xl transition-colors duration-300">
          <Link href="/price">Conversor</Link>
        </li>
      </ul>
      <ul className="flex gap-5 mx-10 sm:hidden">
        <li>teste</li>
      </ul>
    </nav>
  );
};

export default NavBar;
