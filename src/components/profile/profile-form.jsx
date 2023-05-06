import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import styles from './profile.module.css'
import {getProfileRequest, updateProfileRequest} from "../../services/actions/profile";
import globalPageStyle from "../../pages/global-page.module.css";


const formData = {name: "", email: "", password: ""}


const ProfileForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {profileLoaded, name, email, password} = useSelector(state => state.profile);
    const [values, setValues] = useState({name: "", email: "", password: ""});
    const [initialUserValues, setInitialUserValues] = useState(formData);
    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        if (!profileLoaded) {
            dispatch(getProfileRequest(() => navigate("/login")))
        } else {
            setValues({name, email, password});
            setInitialUserValues({name, email, password});
        }
    }, [profileLoaded])

    const handleChange = (e) => {
        const {value, name} = e.target;
        setValues({...values, [name]: value});
    };

    const onChange = (e) => {
        handleChange(e);
        setIsChanged(true);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProfileRequest(values, () => navigate('/login')));
    }

    const onReset = (e) => {
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