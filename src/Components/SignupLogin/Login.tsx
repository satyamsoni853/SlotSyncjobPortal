import React, { useState } from 'react';
import { TextInput, PasswordInput, Button, Divider, Text, Anchor, Group } from '@mantine/core';
import { IconBrandGoogle } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import UserService from '../Service/UserService';
import { useAuth } from '../../AuthContext'; // Import useAuth

import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUser } from '../Slices/UserSlice';

function Login() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = useAuth(); // Get login function from AuthContext

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value: any) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value: any) => (value.length > 0 ? null : 'Password is required'),
    },
  });

  const handleLogin = async (values: any) => {
    setLoading(true);
    try {
      const userData = await UserService.loginUser(values);
      const { id, ...user } = userData;
      dispatch(setUser({ ...user, profileId: id }));
      login();
      toast.success('Login successful!');

      navigate('/');
    } catch (error: any) {
      if (error && error.message) {
        if (error.message.includes('Network Error')) {
          toast.error('Network error or server is not responding. Please try again later.');
        } else {
          toast.error(error.message);
        }
      } else if (error && error.errorMessage) {
        toast.error(error.errorMessage);
      } else {
        toast.error('Failed to login. Please check your credentials.');
      }
      console.error('Error logging in:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl space-y-6 p-8 rounded-lg shadow-lg">
        <Text ta="center" size="xl" fw={700} className="text-faded-jade-700 dark:text-white">
          Welcome Back
        </Text>

        <Button fullWidth leftSection={<IconBrandGoogle />} variant="default">
          Login with Google
        </Button>

        <Divider my="sm" label="OR" labelPosition="center" classNames={{ label: 'text-gray-500 dark:text-gray-400' }} />

        <form className="space-y-4" onSubmit={form.onSubmit(handleLogin)}>
          <TextInput
            label="Email address"
            placeholder="hello@example.com"
            required
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            {...form.getInputProps('password')}
          />
          <Group justify="flex-end" mt="md">
            <Anchor component={Link} to="/forgot-password" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button loading={loading} fullWidth type="submit" mt="xl">
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