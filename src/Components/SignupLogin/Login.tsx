import React from 'react';
import { TextInput, PasswordInput, Button, Divider, Text, Anchor, Group } from '@mantine/core';
import { IconBrandGoogle } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900">
      <div className="w-full max-w-md space-y-6 p-8 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
        <Text ta="center" size="xl" fw={700} className="text-faded-jade-700 dark:text-white">
          Welcome Back
        </Text>

        <Button fullWidth leftSection={<IconBrandGoogle />} variant="default">
          Login with Google
        </Button>

        <Divider my="sm" label="OR" labelPosition="center" classNames={{ label: 'text-gray-500 dark:text-gray-400' }} />

        <form className="space-y-4">
          <TextInput label="Email address" placeholder="hello@example.com" required />
          <PasswordInput label="Password" placeholder="Your password" required />
          <Group justify="flex-end" mt="md">
          <Anchor component={Link} to="/forgot-password" size="sm">
            Forgot password?
          </Anchor>
          </Group>
          <Button fullWidth type="submit" mt="xl">
            Login
          </Button>
        </form>

        <Text ta="center" size="sm" c="dimmed">
          Don't have an account?{' '}
          <Anchor component={Link} to="/signup">
            Sign up
          </Anchor>
        </Text>
      </div>
    </div>
  );
}

export default Login;
