import {FC} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks/useRedux.ts";
import {setEditingStatus} from "../../redux/slices/userSlice.ts";

const ShowUser: FC = () => {
    const {userData} = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()

    return (
        <div className='right-block'>
            <h1>{userData.usernameValue}</h1>
            <button onClick={() => dispatch(setEditingStatus(true))}>Edit user data</button>
        </div>
    )
}

export default ShowUser