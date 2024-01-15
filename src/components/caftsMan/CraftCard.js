import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
 
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Image from 'next/image';

export default function CraftCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Image
        src={`/images/carftsMan.jpg`}
        width={200}
        height={140}
        layout="responsive"
        alt ='image'
        />   
      
        <CardContent>
          <div className='flex justify-between'>
             <p className= "text-[16px] text-[#000]">Plumbing</p>
              <p className='text-[#004AAD] underline'>Start</p>
          </div>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}