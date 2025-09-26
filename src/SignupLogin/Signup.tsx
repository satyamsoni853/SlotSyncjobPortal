import React from 'react';
import { TextInput, PasswordInput, Button, Divider, Text, Anchor, Checkbox } from '@mantine/core';
import { IconBrandGoogle } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="w-full max-w-md space-y-6">
      <Text ta="center" size="xl" fw={700} className="text-white">
        Create Account
      </Text>

      <Button
        fullWidth
        leftSection={<IconBrandGoogle />}
        variant="default"
      >
        Sign up with Google
      </Button>

      <Divider my="sm" label="OR" labelPosition="center" classNames={{ label: 'text-gray-400' }} />

      <form className="space-y-4">
        <TextInput
          label="Full Name"
          placeholder="Your name"
          required
        />
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
        <Checkbox
          mt="md"
          label={
            <>
              I agree to the{' '}
              <Anchor href="#" target="_blank">
                Terms and Conditions
              </Anchor>
            </>
          }
          required
        />
        <Button fullWidth type="submit" mt="xl">
          Sign Up
        </Button>
      </form>

      <Text ta="center" size="sm" color="dimmed">
        Already have an account?{' '}
        <Anchor component={Link} to="/login">
          Log in
        </Anchor>
      </Text>
    </div>
  );
}

export default Signup;