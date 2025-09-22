import React from 'react';
import { TextInput, Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

function Subscribe() {
  return (
    <section className="bg-gray-900 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main container with a distinct background and border */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-700 text-center shadow-[0px_0px_30px_rgba(56,189,248,0.1)]">
          
          {/* Header Text */}
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Subscribe to Our <span className="text-cyan-400">Newsletter</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Stay up-to-date with the latest job openings, industry news, and career tips. Delivered straight to your inbox.
          </p>

          {/* Subscription Form */}
          <form className="mt-8 max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <TextInput
              // Using Mantine's built-in styling system via the `styles` prop
              styles={{
                input: {
                  backgroundColor: '#111827', // bg-gray-900
                  color: 'white',
                  border: '1px solid #374151', // border-gray-700
                  height: '3rem', // h-12
                  fontSize: '1rem', // text-base
                  '&:focus': {
                    borderColor: '#22d3ee', // border-cyan-400
                  }
                },
              }}
              className="flex-grow"
              placeholder="Enter your email address"
              aria-label="Email Address"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 h-12"
              rightSection={<IconArrowRight size={20} />}
            >
              Subscribe
            </Button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Subscribe;