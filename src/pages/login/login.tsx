import React, {FormEvent} from "react";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import globalPageStyle from '../global-page.module.css'
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {loginRequest} from "../../services/actions/login";
import {isLogged} from "../../utils/utils";
import {useForm} from "../../hooks/useForm";
import {useDispatch} from "../../services/hook-store";

const formData = {email: "", password: ""}

const LoginPage: React.FC = () => {

    const {values, handleChange} = useForm(formData)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from.pathname || '/';

    if (isLogged()) {
        return (
            <Navigate to={from}/>
        );
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(loginRequest(values, () => navigate(from)))
    }

    const onRegister = () => navigate('/register');
    const onForgotPassword = () => navigate('/forgot-password');


    return (
        <div className={globalPageStyle.contentWrapper}>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className={`${globalPageStyle.edit}`}>
                    <div><span className={`text text_type_main-medium`}>Вход</span></div>
                    <EmailInput
                        onChange={(e) => handleChange(e)}
                        value={values.email}
                        name={'email'}
                        placeholder="E-mail"
                        isIcon={false}
                        extraClass="mb-2"
                    />
                    <PasswordInput
                        onChange={(e) => handleChange(e)}
                        value={values.password}
                        name={'password'}
                        extraClass="mb-2"
                    />
                    <div>
                        <Button htmlType="submit" size="medium">
                            Войти
                        </Button>
                    </div>
                </div>
                <div className={`${globalPageStyle.additionalActions} pt-20`}>
                    <div className={globalPageStyle.additionalAction}>
                        <span
                            className="text text_type_main-default text_color_inactive">Вы — новый пользователь?</span>
                        <Button extraClass={globalPageStyle.button_size_medium}
                                htmlType="button"
                                type="secondary"
                                size="medium"
                                onClick={onRegister}>
                            Зарегистрироваться
                        </Button>
                    </div>
                    <div className={globalPageStyle.additionalAction}>
                        <span className="text text_type_main-default text_color_inactive">Забыли пароль?</span>
                        <Button extraClass={globalPageStyle.button_size_medium}
                                htmlType="button"
                                type="secondary"
                                size="medium"
                                onClick={onForgotPassword}>
                            Восстановить пароль
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;