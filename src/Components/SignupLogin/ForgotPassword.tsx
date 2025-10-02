import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Text, Anchor, PasswordInput, Group } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../Service/UserService';
import { toast } from 'react-toastify';

function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: '',
      otp: '',
      newPassword: '',
      confirmPassword: '',
    },

    validate: (values) => {
      if (step === 1) {
        return {
          email: /^\S+@\S+$/.test(values.email) ? null : 'Invalid email',
        };
      }
      if (step === 2) {
        const passwordErrors: Record<string, string> = {};
        if (values.newPassword.length < 8) {
          passwordErrors.newPassword = 'Password must have at least 8 characters';
        } else if (!/[a-z]/.test(values.newPassword)) {
          passwordErrors.newPassword = 'Password must contain at least one lowercase letter';
        } else if (!/[A-Z]/.test(values.newPassword)) {
          passwordErrors.newPassword = 'Password must contain at least one uppercase letter';
        } else if (!/\d/.test(values.newPassword)) {
          passwordErrors.newPassword = 'Password must contain at least one number';
        } else if (!/[!@#$%^&*]/.test(values.newPassword)) {
          passwordErrors.newPassword = 'Password must contain at least one special character';
        }

        return {
          otp: values.otp.length === 6 ? null : 'OTP must be 6 digits',
          newPassword: passwordErrors.newPassword || null,
          confirmPassword: values.confirmPassword === values.newPassword ? null : 'Passwords do not match',
        };
      }
      return {};
    },
  });

  const handleForgotPassword = async (values: { email: string }) => {
    setLoading(true);
    try {
      await UserService.forgotPassword(values.email);
      toast.success('OTP sent to your email!');
      setEmail(values.email);
      setStep(2);
    } catch (error: any) {
      toast.error(error.message || 'Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (values: any) => {
    setLoading(true);
    try {
      await UserService.changePassword({
        email: email,
        otp: values.otp,
        newPassword: values.newPassword,
      });
      toast.success('Password reset successfully!');
      navigate('/login');
    } catch (error: any) {
      toast.error(error.message || 'Failed to reset password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6 p-8 rounded-lg shadow-lg">
        <Text ta="center" size="xl" fw={700} className="text-faded-jade-700 dark:text-white">
          Forgot Password
        </Text>

        {step === 1 ? (
          <form onSubmit={form.onSubmit(handleForgotPassword)}>
            <Text ta="center" size="sm" c="dimmed" mb="md">
              Enter your email address and we'll send you an OTP to reset your password.
            </Text>
            <TextInput
              label="Email address"
              placeholder="hello@example.com"
              required
              {...form.getInputProps('email')}
            />
            <Button loading={loading} fullWidth type="submit" mt="xl">
              Send OTP
            </Button>
          </form>
        ) : (
          <form onSubmit={form.onSubmit(handleResetPassword)}>
            <Text ta="center" size="sm" c="dimmed" mb="md">
              An OTP has been sent to your email address.
            </Text>
            <TextInput
              label="OTP"
              placeholder="Enter OTP"
              required
              {...form.getInputProps('otp')}
            />
            <PasswordInput
              label="New Password"
              placeholder="New password"
              required
              mt="md"
              {...form.getInputProps('newPassword')}
            />
            <PasswordInput
              label="Confirm New Password"
              placeholder="Confirm new password"
              required
              mt="md"
              {...form.getInputProps('confirmPassword')}
            />
            <Button loading={loading} fullWidth type="submit" mt="xl">
              Reset Password
            </Button>
          </form>
        )}

        <Text ta="center" size="sm" c="dimmed" mt="lg">
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
