import Link from 'next/link';
import Image from 'next/image';

const headerLogo = () => {
  return (
    <Link href='/'>
      <div className='items-center hidden lg:flex'>
        <Image src='logo.svg' alt='logo' height={80} width={80} />
        <p className='font-semibold text-white text-2xl'>Finance</p>
      </div>
    </Link>
  );
};

export default headerLogo;
