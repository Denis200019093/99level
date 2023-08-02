import {FC, useEffect} from "react";

import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";

import './App.scss'
import {useAppDispatch, useAppSelector} from "./hooks/useRedux.ts";
import ShowUser from "./components/ShowUser/ShowUser.tsx";
import {getUserData} from "./redux/slices/userSlice.ts";

const App: FC = () => {
    const {isEditing, userData} = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const userData = localStorage.getItem('userData')

        if (userData) {
            dispatch(getUserData(JSON.parse(userData)))
        }
    }, [dispatch])

    return (
        <div className='wrapper'>
            {isEditing ? <UpdateUser/> : <CreateUser/>}
            {userData.usernameValue && <ShowUser/>}
        </div>
    )
}

export default App;
