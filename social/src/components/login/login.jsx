import React from 'react';
import {Field, reduxForm} from 'redux-form';
import s from './login.module.css';

const LoginForm = (props) => {
   return (
      <form className={s.loginForm} onSubmit={props.handleSubmit}>
         <Field component={'input'} name={'login'} type="text" placeholder={'Login'}/>
         <Field component={'input'} name={'password'} type="password" placeholder={'Password'}/>
         <Field component={'input'} name={'rememberMe'} type="checkbox"/> Remember me
         <button>Login</button>
      </form>
   );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = () => {
   const onSubmit = (formData) => {
      console.log(formData);
   };

   return (
      <>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit}/>
      </>
   );
};

export default Login;