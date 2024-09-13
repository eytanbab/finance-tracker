'use client';

import { useTheme } from 'next-themes';
import { useMemo } from 'react';
import { SingleValue } from 'react-select';
import CreatableSelect from 'react-select/creatable';

type Props = {
  onChange: (value?: string) => void;
  onCreate?: (value: string) => void;
  options?: { label: string; value: string }[];
  value?: string | null | undefined;
  disabled?: boolean;
  placeholder?: string;
};

export const Select = ({
  value,
  onChange,
  onCreate,
  disabled,
  options = [],
  placeholder,
}: Props) => {
  const onSelect = (option: SingleValue<{ label: string; value: string }>) => {
    onChange(option?.value);
  };

  const formattedValue = useMemo(() => {
    return options.find((option) => option.value === value);
  }, [options, value]);

  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <CreatableSelect
      placeholder={placeholder}
      className='text-sm h-10'
      styles={{
        control: (base) => ({
          ...base,
          borderColor: isDarkMode ? '#1e293b' : '##cbd5e1',
          backgroundColor: 'transparent',
          ':hover': {
            borderColor: isDarkMode ? '#94a3b8' : '#111827',
            backgroundColor: isDarkMode ? '#111827' : '#fff',
          },
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: isDarkMode ? '#111827' : '#fff',
        }),
        singleValue: (base) => ({
          ...base,
          color: isDarkMode ? '#fff' : '#111827',
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isFocused
            ? isDarkMode
              ? '#1f2937' // Dark mode hover background
              : '#1f2937' // Light mode hover background
            : isDarkMode
            ? '#111827' // Dark mode default background
            : '#fff', // Light mode default background
          color: state.isFocused
            ? '#fff' // Text color on hover (white in both modes)
            : isDarkMode
            ? '#fff' // Default text color for dark mode
            : '#111827', // Default text color for light mode
          ':active': {
            backgroundColor: isDarkMode ? '#1f2937' : '#e2e8f0', // Active background on click
          },
        }),
        placeholder: (base) => ({
          ...base,
          color: isDarkMode ? '#94a3b8' : '#64748b',
        }),
      }}
      value={formattedValue}
      onChange={onSelect}
      options={options}
      onCreateOption={onCreate}
      isDisabled={disabled}
    />
  );
};
