import Link from 'next/link';
import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import { getError } from '../utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const Login = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  <Layout title="Login">
    <form
      className="mx-auto max-w-screen-md"
      onSubmit={handleSubmit(submitHandler)}
    >
      <h1 className="mb-4 text-xl">Login</h1>

      {/* Email */}
      <div className="mb-4">
        <label htmlfor="email">Email</label>
        <input
          // name="email"
          type="email"
          {...register('email', {
            required: 'Please enter your email',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
              message: 'Please enter a valid email',
            },
          })}
          id="email"
          className="w-full"
          placeholder="Email"
          autoFocus
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
      </div>

      {/* Password */}
      <div className="mb-4">
        <label htmlfor="email">Password</label>
        <input
          // name="Password"
          type="password"
          {...register('password', {
            required: 'Please enter your password',
            maxLength: {
              values: 6,
              message: 'Password is more than 6 characters ',
            },
          })}
          id="password"
          className="w-full"
          placeholder="Password"
          autoFocus
        />
        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
      </div>
      <div className="mb-4">
        <button className="primary-button">Login</button>
      </div>
      <div className="mb-4">
        Don&apos;t have an account? &nbsp;
        <Link href="register">Register</Link>
      </div>
    </form>
  </Layout>;
};

export default Login;
