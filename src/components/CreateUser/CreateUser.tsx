import {ChangeEvent, FC, FormEvent} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks/useRedux.ts";
import CustomInput from "../UI/CustomInput/CustomInput.tsx";
import {resetValues, saveUserData, setValues} from "../../redux/slices/userSlice.ts";
import {saveDataToLocalStorage} from "../../services/userService.ts";

import './createUser.scss'

const CreateUser: FC = () => {
    const values = useAppSelector(state => state.users.values)
    const dispatch = useAppDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        dispatch(setValues({key: name, value}))
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        saveDataToLocalStorage('userData', values);
        dispatch(saveUserData(values))
        dispatch(resetValues())
    };

    return (
        <form className='left-form' onSubmit={handleSubmit}>
            <CustomInput
                label='Username'
                onChange={handleChange}
                value={values.usernameValue}
                name='usernameValue'
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default CreateUser;