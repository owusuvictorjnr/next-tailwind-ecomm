import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = ({ email, password }) => {
    console.log(email, password);
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
