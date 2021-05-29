import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from "../common/form-controls/form-controls";
import {required} from "../../utilities/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import s from './login.module.css';
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
   return (
      <form className={s.loginForm} onSubmit={props.handleSubmit}>
         <Field component={Input}
                name={'email'}
                type="text"
                placeholder={'Email'}
                validate={[required]}/>
         <Field component={Input}
                name={'password'}
                type="password"
                placeholder={'Password'}
                validate={[required]}/>
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

const Login = (props) => {
   const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe);
   };

   if (props.isAuth) {
      return <Redirect to={'/profile'}/>
   }

   return (
      <>
         <h1 className={s.header}>Login</h1>
         <LoginReduxForm onSubmit={onSubmit}/>
      </>
   );
};

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);