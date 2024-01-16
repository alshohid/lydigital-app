import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import FoundationIcon from '@mui/icons-material/Foundation';
 
export default function CardYorProject() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box className={`flex justify-between p-4`}>
         <div className=' bg-[#D8D8D8]  rounded-md'><FoundationIcon/></div>
         <div className='text-[#363636] text-[16px] font-semibold' >Construction - Rénovation</div>
      </Box>
       
    </Card>
    
  );
}