// src/components/MultiInput.tsx

import { MultiSelect, type MultiSelectProps, MantineTheme } from '@mantine/core';
import React, { ReactNode } from 'react';

interface CustomMultiInputProps extends Partial<MultiSelectProps> {
  icon?: ReactNode;
}

// Define a function for our custom styles
const getCustomStyles = (theme: MantineTheme) => ({
  input: {
    backgroundColor: '#1F2937', // Tailwind's `bg-gray-800`
    borderColor: '#4B5563',    // Tailwind's `bg-gray-600`
    color: '#F9FAFB',           // Tailwind's `text-gray-50`
    height: '42px',
    '&:focus, &:focus-within': {
      borderColor: theme.colors.blue[6], // Use Mantine's theme color for focus
    },
  },
  label: {
    color: '#D1D5DB', // Tailwind's `text-gray-300`
    marginBottom: '4px',
    fontWeight: 500,
  },
  dropdown: {
    backgroundColor: '#1F2937', // bg-gray-800
    borderColor: '#4B5563',    // bg-gray-600
  },
  option: {
    '&[data-selected]': {
      backgroundColor: '#374151', // bg-gray-700
      color: theme.white,
    },
    '&[data-hovered]': {
      backgroundColor: '#4B5563', // bg-gray-600
    },
  },
  clearButton: {
    color: '#9CA3AF', // text-gray-400
    '&:hover': {
      color: theme.white,
    },
  },
  value: {
    backgroundColor: '#4B5563', // bg-gray-600
    color: theme.white,
  },
});


function MultiInput({ icon, ...props }: CustomMultiInputProps) {
  return (
    <MultiSelect
      searchable
      clearable
      leftSection={icon}
      leftSectionPointerEvents="none"
      styles={getCustomStyles} // Apply our custom styles
      {...props}
    />
  );
}

export default MultiInput;