import React from 'react';
import { TextInput, PasswordInput, Button, Divider, Text, Anchor, Group } from '@mantine/core';
import { IconBrandGoogle } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="w-full max-w-md space-y-6">
      <Text ta="center" size="xl" fw={700} className="text-white">
        Welcome Back
      </Text>

      <Button
        fullWidth
        leftSection={<IconBrandGoogle />}
        variant="default"
      >
        Login with Google
      </Button>

      <Divider my="sm" label="OR" labelPosition="center" classNames={{ label: 'text-gray-400' }} />

      <form className="space-y-4">
        <TextInput
          label="Email address"
          placeholder="hello@example.com"
          required
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
        />
        <Group justify="space-between" mt="md">
            <Anchor href="#" size="sm">
                Forgot password?
            </Anchor>
        </Group>
        <Button fullWidth type="submit" mt="xl">
          Login
        </Button>
      </form>

      <Text ta="center" size="sm" color="dimmed">
        Don't have an account?{' '}
        <Anchor component={Link} to="/signup">
          Sign up
        </Anchor>
      </Text>
    </div>
  );
}

export default Login;