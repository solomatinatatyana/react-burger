import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useNavigate} from "react-router-dom";
import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import styles from './profile.module.css'
import {getProfileRequest, updateProfileRequest} from "../../services/actions/profile";
import globalPageStyle from "../../pages/global-page.module.css";
import {useForm} from "../../hooks/useForm";
import {useDispatch, useSelector} from "../../services/hook-store";


const formData = {name: "", email: "", password: ""}

const ProfileForm: React.FC = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {profileLoaded, name, email, password} = useSelector(state => state.profile);
    const {values, handleChange, setValues} = useForm(formData);
    const [initialUserValues, setInitialUserValues] = useState({});
    const [isChanged, setIsChanged] = useState<boolean>(false);


    useEffect(() => {
        if (!profileLoaded) {
            dispatch(getProfileRequest(() => navigate("/login")))
        } else {
            setValues({name, email, password});
            setInitialUserValues({name, email, password});
        }
    }, [profileLoaded])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleChange(e);
        setIsChanged(true);
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(updateProfileRequest(values, () => navigate('/login')));
    }

    const onReset = (e: FormEvent) => {
        e.preventDefault();
        setValues(initialUserValues);
        setIsChanged(false);
    }

    return (<>
            <form className={styles.editForm} onSubmit={onSubmit} onReset={onReset}>
                <Input
                    onChange={(e) => onChange(e)}
                    icon={'EditIcon'}
                    type={'text'}
                    placeholder={'Имя'}
                    value={values.name}
                    name={'name'}
                    size={'default'}
                    extraClass="mt-6"
                />
                <EmailInput
                    onChange={(e) => onChange(e)}
                    isIcon={true}
                    value={values.email}
                    name={'email'}
                    extraClass="mt-6"
                />
                <PasswordInput
                    onChange={(e) => onChange(e)}
                    icon={'EditIcon'}
                    value={values.password}
                    name={'password'}
                    extraClass="mt-6"
                />
                {isChanged && <div className={`${styles.profileButtonsBlock} pt-20`}>
                    <div className={`${globalPageStyle.additionalAction} mb-4`}>
                        <Button htmlType="reset" type={"secondary"} size="medium">
                            Отмена
                        </Button>
                    </div>
                    <div className={`${styles.profileButtonsBlock} mb-4`}>
                        <Button htmlType="submit" type={"secondary"} size="medium">
                            Сохранить
                        </Button>
                    </div>
                </div>}
            </form>
        </>
    )
}

export default ProfileForm;