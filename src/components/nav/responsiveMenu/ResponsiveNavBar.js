'use client'
import Link from 'next/link'
import Button from '@mui/material/Button';
import {useState,useEffect} from 'react' 
import { useTheme } from '@/components/themContext/ThemeProvider';
import Switch from '@mui/material/Switch';
import toggleDarkMode from '@/lib/toggleDarkMode';
import DrawerNavMenu from '../DrawerNavMenu';
import Styles from './ResponsiveNavBar.module.css';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


  const ResponsiveNavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const { toggleTheme } = useTheme();
    


    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setSticky(scrollY > 250);
      };
  
      window.addEventListener('scroll', handleScroll);
  
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
      };

 
      const [state, setState] =  useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });

      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
   
    return (
  
   <nav className={`bg-[#F2F6FB]   ${Styles.navbar} ${isSticky ? `${Styles.stickyNavBar}` : ''}`}> 
    <div className="navbar">

        <div className="navbar-start">
          <div className="dropdown">
            <div 
            tabIndex={0}
            onClick={toggleMobileMenu}
            role="button" className="btn btn-ghost lg:hidden">
            
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
              
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1]   shadow bg-base-100 rounded-md w-64 text-[#183B56] font-sans ${
                isMobileMenuOpen  ? 'block' : 'hidden'
              }`}
            >
            
            <li  > <Link onClick={closeMobileMenu} href={'/'}> Home </Link> </li>
             <li>
                 <Link onClick={closeMobileMenu} href={`/landings`}  > Landings </Link>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>

              <li>
              <Link onClick={closeMobileMenu} href={`/pages`}>Pages </Link>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li> <Link onClick={closeMobileMenu} href={`/docs`}>  Docs</Link></li>
              <li> <Link onClick={closeMobileMenu} href={`/help`}> Help</Link></li>
                 <li className= {`px-3 py-2 ring-2 font-semibold text-[14px] text-[#1565D8] `}> <Link href='/getinnew'> Get in new</Link>  </li>
             
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"> TravaUX</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li> <Link  href={'/'}>  Home  </Link></li>
            <li>
              <details>
                <summary>
                <p   onClick={toggleDrawer('top', true)} >Landings</p>  
                 
                </summary>
                {/* <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul> */}
              </details>
            </li>
            <li>
              <details>
                <summary>
                  Pages 
                </summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li> <Link href={`/docs`}> Docs </Link> </li>
            <li> <Link href={`/help`}  > Help</Link></li>
            <li className= {`px-3 py-2 ring-2 font-semibold text-[14px] text-[#1565D8] bg-none `}> <Link href='/getinnew'> Get in new</Link>  </li>
             
            
          </ul>
        </div>
        {/* <div className="navbar-end">
        
        <span>{isChecked ? 'Dark' : 'Light'}</span>
        <Switch  {...label} checked={isChecked} onChange={handleSwitchClick} />
     
        </div> */}
        <DrawerNavMenu toggleDrawer={toggleDrawer} state={state}/>
    </div>
</nav>
    )
  }
  
  export default ResponsiveNavBar