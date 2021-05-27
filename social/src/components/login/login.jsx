import React from 'react';
import {Field, reduxForm} from 'redux-form';
import s from './login.module.css';

const LoginForm = (props) => {
   return (
      <form className={s.loginForm} onSubmit={props.handleSubmit}>
         <Field component={'input'} name={'login'} type="text" placeholder={'Login'}/>
         <Field component={'input'} name={'password'} type="password" placeholder={'Password'}/>
         <div className={s.checkbox}>
            <Field component={'input'} name={'rememberMe'} id={'rememberMe'} type="checkbox"/>
            <label htmlFor='rememberMe'>Remember me</label>
         </div>
         <button className={s.btn}>Login</button>
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