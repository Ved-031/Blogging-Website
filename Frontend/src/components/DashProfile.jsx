// import React from 'react'
import { useSelector } from 'react-redux';
import { Button, TextInput } from 'flowbite-react';

const DashProfile = () => {
 
  const { currentUser } = useSelector(state => state.user);

  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl tracking-wide'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <div className='w-32 h-32 self-center cursor-pointer rounded-full shadow-md overflow-hidden'>
          <img src={currentUser.profilePicture} alt="user" className='rounded-full w-full h-full object-cover border-4 border-[lightgray]' />
        </div>
        <TextInput
          type='text'
          id='username'
          placeholder='Username'
          defaultValue={currentUser.username}
        />
        <TextInput
          type='email'
          id='email'
          placeholder='Email'
          defaultValue={currentUser.email}
        />
        <TextInput
          type='password'
          id='password'
          placeholder='Password'
        />
        <Button type='submit' gradientDuoTone='purpleToBlue' outline>Update</Button>
      </form>
      <div className='text-red-500 cursor-pointer flex gap-2 items-center justify-between mt-5'>
        <span>Delete account</span>
        <span>Sign out</span>
      </div>
    </div>
  )
}

export default DashProfile