// import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from 'flowbite-react'
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const FooterCom = () => {
  return (
    <Footer container className='border-t-4 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex items-center md:grid-cols-1'>
                <div className='logo mb-5'>
                    <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                        <span className='px-2 py-1 text-purple-500 dark:text-white'>Blog</span>Web
                    </Link>
                </div>
                <div className='options grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                        <Footer.Title title='About'/>
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href="#"
                            >
                                100 JS Projects
                            </Footer.Link>    
                            <Footer.Link
                                href="/about"
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Ved Blog
                            </Footer.Link>    
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Follow Me'/>
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href="https://github.com/Ved-031"
                            >
                                Github
                            </Footer.Link>    
                            <Footer.Link
                                href="https://instagram.com/ved_031"
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Instagram
                            </Footer.Link>    
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Legal'/>
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href="#"
                            >
                                Privacy Policy
                            </Footer.Link>    
                            <Footer.Link
                                href="#"
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Terms & condition
                            </Footer.Link>    
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <hr className='my-5' />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href="#" by='Ved Blog' year={new Date().getFullYear()}/>
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href="#" icon={FaFacebook} />
                    <Footer.Icon href="https://instagram.com/ved_031" icon={FaInstagram} />
                    <Footer.Icon href="https://twitter.com/ved_031" icon={FaTwitter} />
                    <Footer.Icon href="https://github.com/Ved-031" icon={FaGithub} />
                </div>
            </div>
        </div>
    </Footer>
  )
}

export default FooterCom