 import Styles from './Footer.module.css'
 import FacebookIcon from '@mui/icons-material/Facebook';
 import LocalSeeIcon from '@mui/icons-material/LocalSee';
 import YouTubeIcon from '@mui/icons-material/YouTube';
 import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <div className={`${Styles.footerContainer}`}>
        
          <div className='flex justify-between '>
          <div className='text-[#D9DBE1] text-[14px] leading-[24px]'>© 2022 PRO POS. All rights reserved</div>
            <div className='text-[#FFFFFF]'>TaravaUX</div>
            <div className='flex space-x-6 text-white'>
              <FacebookIcon/>
              <LocalSeeIcon/>
              <TwitterIcon/>
              <YouTubeIcon/>

            </div>
          </div>
      
    </div>
  )
}

export default Footer