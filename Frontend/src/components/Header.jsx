import { Link, useLocation } from 'react-router-dom';
import { Button, Navbar, TextInput } from 'flowbite-react';
import { IoMdSearch } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const Header = () => {

    const path = useLocation().pathname;

  return (
    <Navbar className='border-b'>
        <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 text-purple-500 dark:text-white'>Blog</span>Web
        </Link>
        <form>
            <TextInput 
                type="text"
                placeholder='Search...'
                rightIcon={IoMdSearch}
                className='hidden lg:inline'
                />
        </form>
        <Button className="w-12 lg:hidden" color="gray" pill>
            <IoMdSearch/>
        </Button>
        <div className='flex items-center gap-2 md:order-2'>
            <Button className='w-12 hidden sm:inline' color="gray" pill>
                <FaMoon/>
            </Button>
            <Link to="/signin">
                <Button className='w-20' color="gray">
                    SignIn
                </Button>
            </Link>
            <Navbar.Toggle/>
        </div>
        <Navbar.Collapse>
            <Navbar.Link active={path === '/'} as={'div'}>
                <Link to='/' className='text-[16px]'>Home</Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/about'} as={'div'}>
                <Link to='/about' className='text-[16px]'>About</Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/projects'} as={'div'}>
                <Link to='/projects' className='text-[16px]'>Projects</Link>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header