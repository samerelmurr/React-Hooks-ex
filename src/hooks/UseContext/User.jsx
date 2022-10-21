import {useContext} from 'react'
import {AppContext} from './UseContext'


const User = () => {
    const {username} = useContext(AppContext);

  return (
    <div>User: {username}</div>
  )
}

export default User