import React, { useState } from 'react';
import {
  TextInput,
  PasswordInput,
  Button,
  Divider,
  Text,
  Anchor,
  Checkbox,
  Radio,
  Group,
} from '@mantine/core';
import { IconBrandGoogle } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import UserService from '../Service/UserService';
import { toast } from 'react-toastify';

function Signup() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      accountType: 'APPLICANT',
      termsAndConditions: false,
    },

    validate: (values) => {
      const passwordErrors: Record<string, string> = {};
      if (values.password.length < 8) {
        passwordErrors.password = 'Password must have at least 8 characters';
      } else if (!/[a-z]/.test(values.password)) {
        passwordErrors.password = 'Password must contain at least one lowercase letter';
      } else if (!/[A-Z]/.test(values.password)) {
        passwordErrors.password = 'Password must contain at least one uppercase letter';
      } else if (!/\d/.test(values.password)) {
        passwordErrors.password = 'Password must contain at least one number';
      } else if (!/[!@#$%^&*]/.test(values.password)) {
        passwordErrors.password = 'Password must contain at least one special character';
      }

      return {
        fullName: values.fullName.length < 2 ? 'Full name must have at least 2 letters' : null,
        email: /^\S+@\S+$/.test(values.email) ? null : 'Invalid email',
        password: passwordErrors.password || null,
        confirmPassword: values.confirmPassword === values.password ? null : 'Passwords did not match',
        termsAndConditions: values.termsAndConditions ? null : 'You must accept the terms and conditions',
      };
    },
  });

  const handleRegister = async (values: any) => {
    setLoading(true);
    const userData = {
      name: values.fullName,
      email: values.email,
      password: values.password,
      accountType: values.accountType.toUpperCase(),
    };
    try {
      await UserService.registerUser(userData);
      toast.success('User registered successfully! Please log in.');
      navigate('/login');
    } catch (error: any) {
      toast.error(error.message || 'Failed to register. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl space-y-6 p-8 rounded-lg shadow-lg">
        <Text ta="center" size="xl" fw={700} className="text-faded-jade-700 dark:text-white">
          Create Account
        </Text>

        <form onSubmit={form.onSubmit(handleRegister)}>
          <TextInput
            label="Full Name"
            placeholder="Your name"
            required
            {...form.getInputProps('fullName')}
          />
          <TextInput
            label="Email address"
            placeholder="hello@example.com"
            required
            mt="md"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            {...form.getInputProps('password')}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm your password"
            required
            mt="md"
            {...form.getInputProps('confirmPassword')}
          />
          <Radio.Group
            label="Account Type"
            required
            mt="md"
            {...form.getInputProps('accountType')}
          >
            <Group mt="xs">
              <Radio value="APPLICANT" label="Applicant" />
              <Radio value="EMPLOYER" label="Employer" />
            </Group>
          </Radio.Group>
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
            {...form.getInputProps('termsAndConditions', { type: 'checkbox' })}
          />
          <Button loading={loading} fullWidth type="submit" mt="xl">
            Register
          </Button>
        </form>

        <Divider my="sm" label="OR" labelPosition="center" classNames={{ label: 'text-gray-500 dark:text-gray-400' }} />

        <Button fullWidth leftSection={<IconBrandGoogle />} variant="default">
          Sign up with Google
        </Button>

        <Text ta="center" size="sm" c="dimmed" mt="lg">
          Already have an account?{' '}
          <Anchor component={Link} to="/login">
            Log in
          </Anchor>
        </Text>
      </div>
    </div>
  );
}

export default Signup;