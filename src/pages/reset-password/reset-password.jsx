import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useState} from "react";
import globalPageStyle from "../global-page.module.css";
import {useDispatch} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import {getResetPasswordRequest} from "../../services/actions/reset-password";
import {getCookie, isLogged} from "../../utils/utils";

const formData = {password: "", code: ""}

const ResetPasswordPage = () => {
    const [values, setValues] = useState(formData)

    const handleChange = (e) => {
        const {value, name} = e.target;
        setValues({...values, [name]: value});
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogin = () => navigate('/login');

    if (isLogged()) {
        return (
            <Navigate to={'/'}/>
        );
    }else if (getCookie('isForgotPasswordFlag') === undefined){
       return  <Navigate to={'/forgot-password'} />
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(getResetPasswordRequest({password: values.password, code: values.code}, () => navigate("/login")))
    }

    return (
        <div className={globalPageStyle.contentWrapper}>
            <form onSubmit={onSubmit}>
                <div className={`${globalPageStyle.edit}`}>
                    <div><span className={`text text_type_main-medium`}>Восстановление пароля</span></div>
                    <PasswordInput
                        onChange={(e) => handleChange(e)}
                        placeholder={'Ведите новый пароль'}
                        value={values.password}
                        name={'password'}
                        extraClass="mb-2"
                    />
                    <Input
                        type={'text'}
                        placeholder={'Введите код из письма'}
                        onChange={e => handleChange(e)}
                        icon={'EditIcon'}
                        value={values.code}
                        name={'code'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="ml-1"
                    />
                    <div>
                        <Button htmlType="submit" size="medium">
                            Сохранить
                        </Button>
                    </div>
                    <div className={`${globalPageStyle.additionalActions} pt-20`}>
                        <div className={`${globalPageStyle.additionalAction} mb-4`}>
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

export default ResetPasswordPage;