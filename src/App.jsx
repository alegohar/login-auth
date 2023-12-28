import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { getAuth, signInWithPopup,
  GoogleAuthProvider, } from 'firebase/auth';
  import { auth } from './firebase';

function App() {
  const [user, setUser] = useState()
  const googleProvider = new GoogleAuthProvider();

  return (
    <>
    <button onClick={
      ()=>{
        signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user1 = result.user;
        setUser(user1);

})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
      }
    }
    >onclick</button>
        <button onClick={() => {
      location.reload();
    setUser(" ");
    }
    }>Logout</button>

    {user && <div>
      <img src={user?.photoURL}/>
      <div>{user?.displayName}</div>
      <div>{user?.email}</div>
      {/* <div>{user?.accessToken}</div> */}
      </div>}
     </>
  )
}

export default App
