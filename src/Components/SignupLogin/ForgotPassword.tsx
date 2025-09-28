
import React from 'react';
import { useMantineColorScheme, TextInput, Button, Text, Anchor } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative bg-white dark:bg-gray-900">
      <div className="absolute top-4 right-4 z-10">
        <button
          type="button"
          onClick={() => toggleColorScheme()}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="rounded-full border border-faded-jade-200 dark:border-gray-700 bg-faded-jade-100 dark:bg-mine-shaft-800 text-faded-jade-700 dark:text-white p-2 transition-colors duration-200 hover:shadow-md"
        >
          {isDark ? <IconSun size={20} /> : <IconMoon size={20} />}
        </button>
      </div>
      <div className="w-full max-w-md space-y-6 p-8 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
        <Text ta="center" size="xl" fw={700} className="text-faded-jade-700 dark:text-white">
          Forgot Password
        </Text>

        <Text ta="center" size="sm" c="dimmed">
          Enter your email address and we'll send you a link to reset your password.
        </Text>

        <form className="space-y-4">
          <TextInput label="Email address" placeholder="hello@example.com" required />
          <Button fullWidth type="submit" mt="xl">
            Send Reset Link
          </Button>
        </form>

        <Text ta="center" size="sm" c="dimmed">
          Remember your password?{' '}
          <Anchor component={Link} to="/login">
            Log in
          </Anchor>
        </Text>
      </div>
    </div>
  );
}

export default ForgotPassword;
