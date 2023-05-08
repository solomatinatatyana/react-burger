import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import globalPageStyle from "../global-page.module.css";
import {Navigate, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getForgotPasswordRequest} from "../../services/actions/forgot-password";
import {isLogged} from "../../utils/utils";
import {useForm} from "../../hooks/useForm";

const formData = {email: ""}

const ForgotPasswordPage = () => {
    const {values, handleChange} = useForm(formData)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogin = () => navigate('/login');

    if (isLogged()) {
        return (
            <Navigate to={'/'}/>
        );
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(getForgotPasswordRequest({email: values.email}, () => navigate("/reset-password")))
    }

    return (
        <div className={globalPageStyle.contentWrapper}>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className={`${globalPageStyle.edit}`}>
                    <div><span className={`text text_type_main-medium`}>Восстановление пароля</span></div>
                    <EmailInput
                        onChange={(e) => handleChange(e)}
                        value={values.email}
                        name={'email'}
                        placeholder="Укажите e-mail"
                        isIcon={false}
                        extraClass="mb-2"
                    />
                    <div>
                        <Button htmlType="submit" size="medium">
                            Восстановить
                        </Button>
                    </div>
                    <div className={`${globalPageStyle.additionalActions} pt-20`}>
                        <div className={globalPageStyle.additionalAction}>
                            <span className="text text_type_main-default text_color_inactive">Вспомнили пароль?</span>
                            <Button extraClass={globalPageStyle.button_size_medium}
                                    htmlType="button"
                                    type="secondary"
                                    size="medium"
                                    onClick={onLogin}>
                                Войти
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ForgotPasswordPage;