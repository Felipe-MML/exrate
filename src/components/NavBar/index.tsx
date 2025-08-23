import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-primarybuttons text-contrast h-14">
      <Link href="/">
        <img src="/logo.png" alt="logo" className="w-50" />
      </Link>
      <ul className="flex gap-5 mx-10 max-:hidden">
        <li className="p-1 hover:bg-contrast hover:text-mainText w-25 text-center rounded-2xl transition-colors duration-300">
          <Link href="/">Home</Link>
        </li>
        <li className="p-1 hover:bg-contrast hover:text-mainText w-25 text-center rounded-2xl transition-colors duration-300">
          <Link href="/price">Conversor</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
