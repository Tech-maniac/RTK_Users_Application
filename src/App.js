import React, { useState } from 'react'
import "./App.css"

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import { useSelector,useDispatch } from 'react-redux';

import { addUser,deleteUser,updateUser} from './features/users';

const App = () => {

  const dispatch=useDispatch();

  //all data from store is stored in userList
  const userList = useSelector((state)=>state.users.value);

  console.log(userList);



  //name -> state
  //setName -> Method 
  const [name, setName] = useState("");

  const [username,setUserName] = useState("");

  const [newUsername,setNewUserName] = useState("");

  return (
    <>

    <div className='App'>

    <div className='addUser'>

    <input type="text" placeholder='Enter your name : ' onChange={(e)=>{setName(e.target.value)}} />

    <input type="text" placeholder='Enter your user name : ' onChange={(e)=>{setUserName(e.target.value)}} />
    
    <button onClick={()=>{
      dispatch(addUser({
        id : userList[userList.length-1].id + 1,
        name : name,
        username : username
    }))
    }}>
      Add User
    </button>

    </div>

    <div className='displayUsers'>

    {
      userList.map((user)=>{
        return(
          <div>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>

            <input type="text" placeholder='Enter your updated user name : ' onChange={(e)=>{setNewUserName(e.target.value)}} />

            <button onClick={()=>{
              dispatch(updateUser({
                id : user.id,
                username : newUsername
              }))
            }}>
              Update user name
            </button>

            {/* <button onClick={()=>{
              dispatch(deleteUser({
                id : user.id
              }))
            }}>Delete</button> */}

            <Button onClick={()=>{
              dispatch(deleteUser({
                id : user.id
              }))
            }} variant="contained" startIcon={<DeleteIcon/>}>Delete</Button>



            {/* <DeleteIcon/> */}



          </div>
        )
      })
    }






    </div>






    </div>

    </>
  )
}

export default App