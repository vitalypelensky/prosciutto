import React, {useState, useCallback} from 'react'
import AuthContext from './AuthContext'

const AuthContextProvide = ({children}) => {
    const [userIsAuth, _setUserAuthValue] = useState(false)

    const setUserAuthValue = useCallback(value => {
        _setUserAuthValue(value)
    },[])


    return(
        <AuthContext.Provider value={{
            userIsAuth,
            setUserAuthValue
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvide
