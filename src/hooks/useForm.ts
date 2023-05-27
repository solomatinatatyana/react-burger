import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";

export type TInputValues = {
    [name: string]: string;
}

export type TUseForm = {
    values: TInputValues;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    setValues: Dispatch<SetStateAction<TInputValues>>;
}

export function useForm(inputValues={}) : TUseForm {
    const [values, setValues] = useState(inputValues);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;
        setValues({...values, [name]: value});
    };
    return {values, handleChange, setValues};
}