import Link from 'next/link';
import { CgMenu } from 'react-icons/cg';

// consider jsx is a normal data type
const jsxLogo = (
  <span className="bg-white block w-4 aspect-square rounded-full"></span>
);

export const Header = () => {
  return (
    <div className="bg-neutral-900 text-white flex lg:flex-col justify-between items-center h-full p-4">
      {/* forced example */}
      <Link href="/">{jsxLogo}</Link>

      <button title="Menu" type="button">
        <CgMenu size={32}></CgMenu>
      </button>
    </div>
  );
};
