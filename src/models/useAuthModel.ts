import { useState, useCallback } from 'react'

export default function useAuthModel() {
  const [user, setUser] = useState(1)

  const signin = useCallback(() => {
    // signin implementation
    // setUser(user from signin API)
    return user
  }, [user])

  const signout = useCallback(() => {
    // signout implementation
    
  }, [])

  return {
    user,
    setUser,
    signin,
    signout
  }
}
