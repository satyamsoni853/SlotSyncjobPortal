// src/components/MultiInput.tsx

import { MultiSelect, type MultiSelectProps, useMantineColorScheme } from '@mantine/core';
import React, { ReactNode } from 'react';

interface CustomMultiInputProps extends Partial<MultiSelectProps> {
  icon?: ReactNode;
}

function MultiInput({ icon, ...props }: CustomMultiInputProps) {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  const styles: MultiSelectProps['styles'] = {
    input: {
      backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
      borderColor: isDark ? '#4B5563' : '#D1D5DB',
      color: isDark ? '#F9FAFB' : '#1F2937',
      minHeight: '42px',
      flexWrap: 'wrap',
      '&:focus, &:focus-within': {
        borderColor: isDark ? '#22D3EE' : '#0EA5E9',
        boxShadow: 'none',
      },
    },
    label: {
      color: isDark ? '#D1D5DB' : '#1F2937',
      marginBottom: '4px',
      fontWeight: 500,
    },
    dropdown: {
      backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
      borderColor: isDark ? '#4B5563' : '#E2E8F0',
    },
    option: {
      '&[data-selected]': {
        backgroundColor: isDark ? '#374151' : '#BAE6FD',
        color: isDark ? '#F8FAFC' : '#0F172A',
      },
      '&[data-hovered]': {
        backgroundColor: isDark ? '#4B5563' : '#E2E8F0',
      },
    },
    pill: {
      backgroundColor: isDark ? '#4B5563' : '#E0F2F1',
      color: isDark ? '#F9FAFB' : '#0F172A',
    },
  };

  return (
    <MultiSelect
      searchable
      clearable
      leftSection={icon}
      leftSectionPointerEvents="none"
      styles={styles}
      {...props}
    />
  );
}

export default MultiInput;
