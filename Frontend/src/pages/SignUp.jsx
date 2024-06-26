// import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import axios from 'axios'

const SignUp = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  }

  const submitHandler = async (e) =>{
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      setErrorMessage("All fields are required");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      // const res = await fetch('/api/user/create', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(formData)
      // })
      // const data = res.json();
      // if(data.success === false){
      //   return setErrorMessage(data.message);
      // }
      // setLoading(false);
      // navigate('/signin');
      await axios.post('/api/user/create', formData)
      .then((response)=>{
        if(response.data.success === false){
          return setErrorMessage(response.data.message);
        }
        setLoading(false);
        setFormData({});
        navigate('/signin');
      })
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen mt-20">
      <div className='flex p-5 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 md:gap-10'>

        {/* left */}
        <div className="flex-1">
        <Link to="/" className='text-3xl font-bold dark:text-white'>
            <span className='px-2 py-1 text-purple-500 dark:text-white'>Blog</span>Web
        </Link>
        <p className='text-sm mt-5'>
          This is a Blogging website. You can signup with your email and password or with Google.
        </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <div>
            <form onSubmit={submitHandler} className='flex flex-col gap-4'>
              <div>
                <Label value='Your username'/>
                <TextInput 
                  type='text' 
                  placeholder='Username' 
                  id='username' 
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <Label value='Your Email'/>
                <TextInput 
                  type='email' 
                  placeholder='Email' 
                  id='email' 
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <Label value='Your Password'/>
                <TextInput 
                  type='password' 
                  placeholder='Password' 
                  id='password' 
                  onChange={onChangeHandler}
                />
              </div>
              <Button gradientDuoTone='purpleToPink' type='submit' className='transition' disabled={loading}>
                {
                  loading ? (
                    <div className='flex items-center gap-2'>
                      <Spinner size='sm'/>
                      <span>Loading...</span>
                    </div>
                ) : "SignUp"
                }
              </Button>
            </form>
            <div className='flex gap-2 text-sm mt-5'>
              <span>Have an account?</span>
              <Link to='/signin' className='text-blue-500 font-semibold'>
                Sign In
              </Link>
            </div>
            {
              errorMessage && (
                <Alert className='mt-5' color='failure'>
                  {errorMessage}
                </Alert>
              )
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default SignUp