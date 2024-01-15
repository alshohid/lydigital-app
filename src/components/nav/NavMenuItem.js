import React, { useState } from 'react';
import Styles from './navaBar/navBar.module.css';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { useTheme } from '@/components/themContext/ThemeProvider';
import Switch from '@mui/material/Switch';
import toggleDarkMode from '@/lib/toggleDarkMode';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const NavMenuItem = ({ menuItems }) => {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
  const [isChecked, setChecked] = useState(false);
  const { toggleTheme } = useTheme();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleMobileMenuToggle = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const handleSwitchClick = () => {
    toggleTheme();
    toggleDarkMode();
    setChecked(!isChecked);
  };

  return (
    <nav className={Styles.menuContainer}>
      {/* Desktop Navigation */}
      <div className='hidden md:flex space-x-4'>
        {menuItems.map((menuItem, index) => (
          <div className="relative group" key={index}>
            <span className="text-[#183B56] text-[16px] text-center font-sans font-semibold cursor-pointer">
              <Link href={menuItem.link}>{menuItem.label}</Link>
              {index === 1 || index === 3 ? (
                <span
                  onClick={() =>
                    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index)
                  }
                >
                  {openSubMenuIndex === index ? '▲' : '▼'}
                </span>
              ) : null}
            </span>

            {menuItem?.subMenu && openSubMenuIndex === index && (
              <div className='absolute left-0 hidden mt-2 space-y-2 group-hover:block bg-cyan-100 cursor-pointer p-3'>
                {menuItem.subMenu.map((subMenuItem, subIndex) => (
                  <div key={subIndex}>
                    <Link href={`#`}>{subMenuItem}</Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className='md:hidden flex space-x-4'>
        <div className="relative group">
          <span
            className="text-[#183B56] text-[16px] text-center font-sans font-semibold cursor-pointer"
            onClick={handleMobileMenuToggle}
          >
            ☰  
          </span>
        </div>

        {openMobileMenu && (
          <div className="flex flex-col space-y-2 bg-cyan-100 p-3">
            {menuItems.map((menuItem, index) => (
              <div className="relative group" key={index}>
                <span className="text-[#183B56] text-[16px] text-center font-sans font-semibold cursor-pointer">
                  <Link href={menuItem.link}>{menuItem.label}</Link>
                </span>

                {menuItem?.subMenu && (
                  <div className='mt-2 space-y-2'>
                    {menuItem.subMenu.map((subMenuItem, subIndex) => (
                      <div key={subIndex}>
                        <Link href={`#`}>{subMenuItem}</Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Common Elements for Both Desktop and Mobile */}
      <div >
        <Button className='text-[#1565D8] font-semibold text-[14px] lowercase  ' variant="outlined">Get it now</Button>
      </div>

      <div className=''>
        <span>{isChecked ? 'Dark' : 'Light'}</span>
        <Switch {...label} checked={isChecked} onChange={handleSwitchClick} />
      </div>
    </nav>
  );
};

export default NavMenuItem;
