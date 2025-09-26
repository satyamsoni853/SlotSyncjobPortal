import React from 'react';
import { TextInput, Button, useMantineColorScheme } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

function Subscribe() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <section className="bg-white dark:bg-gray-900 py-16 sm:py-20 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-faded-jade-50/90 dark:bg-gray-900 rounded-2xl p-8 md:p-12 border border-faded-jade-200/70 dark:border-gray-700 text-center shadow-[0px_15px_35px_rgba(19,121,111,0.12)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] transition-colors">
          <h2 className="text-3xl md:text-4xl font-bold text-faded-jade-700 dark:text-white">
            Subscribe to Our <span className="text-faded-jade-600 dark:text-faded-jade-400">Newsletter</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay up-to-date with the latest job openings, industry news, and career tips. Delivered straight to your inbox.
          </p>

          <form className="mt-8 max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <TextInput
              styles={{
                input: {
                  backgroundColor: isDark ? '#111827' : '#FFFFFF',
                  color: isDark ? '#F9FAFB' : '#1F2937',
                  border: `1px solid ${isDark ? '#374151' : '#CBD5E0'}`,
                  height: '3rem',
                  fontSize: '1rem',
                  '&:focus': {
                    borderColor: '#22D3EE',
                  },
                },
              }}
              className="flex-grow"
              placeholder="Enter your email address"
              aria-label="Email Address"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 h-12"
              rightSection={<IconArrowRight size={20} />}
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
