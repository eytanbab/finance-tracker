'use client';

import { DataCharts } from '@/components/data-charts';
import { DataGrid } from '@/components/data-grid';
import { Button } from '@/components/ui/button';
import { useGetSummary } from '@/features/summary/api/use-get-summary';
import { useNewTransaction } from '@/features/transactions/hooks/use-new-transaction';
import { PlusIcon } from 'lucide-react';

export default function DashboardPage() {
  const newTransaction = useNewTransaction();
  const { isLoading } = useGetSummary();

  return (
    <div className='max-w-screen-2xl mx-auto w-full pb-10 -mt-24'>
      <DataGrid />
      {!isLoading && (
        <Button
          onClick={newTransaction.onOpen}
          size='sm'
          variant='outline'
          className='w-full mx-auto lg:w-auto'
        >
          <PlusIcon className='size-4 mr-2' />
          Add new transaction
        </Button>
      )}
      <DataCharts />
    </div>
  );
}
