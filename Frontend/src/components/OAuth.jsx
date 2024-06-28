// import React from 'react'
import { Button } from "flowbite-react"
import { AiFillGoogleCircle } from 'react-icons/ai'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firbaseConfig.js'
import { useDispatch } from "react-redux"
import { signInFailure, signInStart, signInSuccess } from "../redux/user/userSlice.js"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const OAuth = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        try {

            dispatch(signInStart());

            const resultFromGoogle = await signInWithPopup(auth, provider);
            console.log(resultFromGoogle);
            const user = resultFromGoogle.user;
            const response = await axios.post('/api/user/google', {
                name: user.displayName,
                email: user.email,
                googlePhotoURL: user.photoURL
            })
            if(response.statusText === 'OK'){
                dispatch(signInSuccess(response.data));
                navigate('/');
            }

        } catch (error) {
            dispatch(signInFailure(error.message));
            console.log(error);
        }
    }

  return (
    <Button type="button" gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
        <AiFillGoogleCircle className="w-6 h-6 mr-2"/>
        Continue with Google
    </Button>
  )
}

export default OAuth