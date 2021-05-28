import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from "../common/form-controls/form-controls";
import {maxLengthCreator, required} from "../../utilities/validators/validators";
import s from './login.module.css';

const maxLength15 = maxLengthCreator(15);

const LoginForm = (props) => {
   return (
      <form className={s.loginForm} onSubmit={props.handleSubmit}>
         <Field component={Input}
                name={'login'}
                type="text"
                placeholder={'Login'}
                validate={[required, maxLength15]}/>
         <Field component={Input}
                name={'password'}
                type="password"
                placeholder={'Password'}
                validate={[required, maxLength15]}/>
         <div className={s.checkbox}>
            <Field component={Input}
                   name={'rememberMe'}
                   id={'rememberMe'}
                   type="checkbox"/>
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
         <h1 className={s.header}>Login</h1>
         <LoginReduxForm onSubmit={onSubmit}/>
      </>
   );
};

export default Login;