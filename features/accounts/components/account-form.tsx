import { z } from 'zod';
import { Trash } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { insertAccountSchema } from '@/db/schema';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = insertAccountSchema.pick({ name: true });

type FormValues = z.input<typeof formSchema>;

type Props = {
  id?: string;
  defaultValues?: FormValues;
  onSubmit: (values: FormValues) => void;
  onDelete?: () => void;
  disabled?: boolean;
};

export const AccountForm = ({
  id,
  defaultValues,
  onSubmit,
  onDelete,
  disabled: isPending,
}: Props) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const watchName = form.watch('name');
  const isFormValid = watchName && !isPending;

  const handleSubmit = (values: FormValues) => {
    onSubmit(values);
  };

  const handleDelete = () => {
    onDelete?.();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className='space-y-4 pt-4'
      >
        <FormField
          name='name'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <>
                  <Input
                    data-cy='account-name-input'
                    disabled={isPending}
                    placeholder='e.g. Cash, Bank, Credit Card'
                    {...field}
                  />
                  {form.getValues('name') === '' && (
                    <p style={{ color: '#f43f5e', fontSize: '12px' }}>
                      * Name is required
                    </p>
                  )}
                </>
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          data-cy='submit-account-button'
          className='w-full'
          disabled={!isFormValid}
        >
          {id ? 'Save changes' : 'Create account'}
        </Button>
        {!!id && (
          <Button
            type='button'
            onClick={handleDelete}
            className='w-full'
            variant='outline'
            data-cy='delete-account-button'
          >
            <Trash className='size-4 mr-2' />
            Delete account
          </Button>
        )}
      </form>
    </Form>
  );
};
