import { UserButton, ClerkLoading, ClerkLoaded } from '@clerk/nextjs';
import HeaderLogo from './header-logo';
import Navigation from './navigation';
import { Loader2 } from 'lucide-react';
import WelcomeMsg from './welcome-msg';
import { Filters } from './filters';
import { ThemeToggle } from './theme-toggle';

const Header = () => {
  return (
    <header className='bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36 dark:from-gray-900 dark:to-gray-700'>
      <div className='max-w-screen-2xl mx-auto'>
        <div className='w-full flex items-center justify-between mb-14'>
          <div className='flex items-center lg:gap-x-16'>
            <HeaderLogo />
            <Navigation />
          </div>
          <div className='flex items-center gap-x-4'>
            <ThemeToggle />
            <ClerkLoaded>
              <UserButton />
            </ClerkLoaded>
            <ClerkLoading>
              <Loader2 className='size-8 animate-spin text-slate-400' />
            </ClerkLoading>
          </div>
        </div>
        <WelcomeMsg />
        <Filters />
      </div>
    </header>
  );
};

export default Header;
