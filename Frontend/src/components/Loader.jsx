// import React from 'react'

import { Spinner } from "flowbite-react"

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-white">
      <Spinner color="info" aria-label="Info spinner example" />
    </div>
  )
}

export default Loader