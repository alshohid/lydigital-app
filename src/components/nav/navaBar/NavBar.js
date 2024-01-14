'use client'

 
import Styles from './navBar.module.css'
import NavMenuItem from "../NavMenuItem";
 
 const NavBar = () => {
   
    const menuItems = [
        { id: 1, label: 'Home', link: '/' },
        { id: 2, label: 'Landings', link: '/landings', subMenu: ['Product 1', 'Product 2', 'Product 3'] },
        { id: 3, label: 'Docs', link: '/docs' },
        { id: 4, label: 'Pages', link: '/pages', subMenu: ['Page 1', 'Page 2', 'Page 3'] },
        { id: 5, label: 'Help', link: '/help' },
      ];
       

   return (
     <div className={Styles.navContainer}>
        <div>
            <h1>Logo</h1>
        </div>
        <div>
           <NavMenuItem menuItems={menuItems}/>
        </div>

     </div>
   )
 }
 
 export default NavBar


        

        
