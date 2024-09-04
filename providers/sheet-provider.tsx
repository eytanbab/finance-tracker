'use client';

import NewAccountSheet from '@/features/accounts/components/NewAccountSheet';
import { useMountedState } from 'react-use';
import EditAccountSheet from '@/features/accounts/components/EditAccountSheet';

export const SheetProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) return null;

  return (
    <>
      <NewAccountSheet />
      <EditAccountSheet />
    </>
  );
};
