import {ChangeEvent, FC, FormEvent} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks/useRedux.ts";
import CustomInput from "../UI/CustomInput/CustomInput.tsx";
import {resetValues, saveUserData, setEditingStatus, setValues} from "../../redux/slices/userSlice.ts";
import {saveDataToLocalStorage} from "../../services/userService.ts";

import './UpdateUser.scss'

const UpdateUser: FC = () => {
    const {values, userData} = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        dispatch(setValues({key: name, value}))
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        saveDataToLocalStorage('userData', values);
        dispatch(saveUserData(values))
        dispatch(setEditingStatus(false))
        dispatch(resetValues())
    };

    return (
        <form className='right-block' onSubmit={handleSubmit}>
            <CustomInput
                label='New username'
                onChange={handleChange}
                defaultValue={userData.usernameValue}
                name='usernameValue'
            />
            <button type='submit'>Update</button>
        </form>
    )
}

export default UpdateUser;