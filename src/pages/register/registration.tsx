import React, {FormEvent} from "react";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import globalPageStyle from '../global-page.module.css'
import {Navigate, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {registerRequest} from "../../services/actions/register";
import {isLogged} from "../../utils/utils";
import {useForm} from "../../hooks/useForm";

const formData = {name: "", email: "", password: ""}

const RegistrationPage: React.FC = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {values, handleChange} = useForm(formData);

    const onLogin = () => navigate('/login');

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(registerRequest({
            name: values.name,
            email: values.email,
            password: values.password
        }, () => navigate("/")))
    }

    if (isLogged()) {
        return (
            <Navigate to={'/'}/>
        );
    }

    return (
        <div className={globalPageStyle.contentWrapper}>
            <form onSubmit={onSubmit}>
                <div className={`${globalPageStyle.edit}`}>
                    <span className={`text text_type_main-medium`}>Регистрация</span>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        icon={'EditIcon'}
                        onChange={(e) => handleChange(e)}
                        value={values.name}
                        name={'name'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="ml-1"
                    />
                    <EmailInput
                        onChange={(e) => handleChange(e)}
                        value={values.email}
                        name={'email'}
                        placeholder="E-mail"
                        isIcon={true}
                        extraClass="mb-2"
                    />

                    <PasswordInput
                        onChange={(e) => handleChange(e)}
                        icon={'EditIcon'}
                        value={values.password}
                        name={'password'}
                        extraClass="mb-2"
                    />
                    <div>
                        <Button htmlType="submit" size="medium">
                            Зарегистрироваться
                        </Button>
                    </div>
                </div>
                <div className={`${globalPageStyle.additionalActions} pt-20`}>
                    <div className={globalPageStyle.additionalAction}>
                        <span className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</span>
                        <Button extraClass={globalPageStyle.button_size_medium}
                                htmlType="button"
                                type="secondary"
                                size="medium"
                                onClick={onLogin}>
                            Войти
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegistrationPage;