 'use client'
 
import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import CardYorProject from '../yourProject/CardYorProject';

const steps = [
  'Your Project',
  'Supply and Installation',
  'Project Detail',
  'Your contact details'
];

export default function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className='bg-[#FFF] w-full h-[100vh]'>
      <Box sx={{ width: '80%', margin: 'auto' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                StepIconComponent={(props) => {
                  return (
                    <div style={{ position: 'relative' }}>
                      {props.icon ? (
                        <>
                         <div style={{width:'37px',height:'37px',borderRadius:'100%',
                         background:`${activeStep === index ?'#004AAD' :'white'}`}}>
                         <CircularProgress
                            {...props}
                             
                            variant={activeStep === index ? 'indeterminate' : 'determinate'}
                            value={activeStep === index ? undefined : 100}
                          />
                          <Typography
                            variant="body2"
                            style={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              color: activeStep === index ? 'white' : 'black',
                             
                            }}
                          >
                            {index + 1}
                          </Typography>
                         </div>

                        </>
                      ) : null}
                    </div>
                  );
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

     <div style={{width:'80%',margin:'auto'}}>
         <h3 className='text-[24px] text-[#363636]'>Select the type of work you want to carry out</h3>
         <div className="  border-b border-blue-500 h-[1.5px] bg-blue-500 "></div>
         <div className='space-y-4'>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 space-y-3'>
               <CardYorProject/>
               <CardYorProject/>
               <CardYorProject/>
               <CardYorProject/>
               <CardYorProject/>
               <CardYorProject/>
               <CardYorProject/>
               <CardYorProject/>

            </div>

         </div>

          
     </div>




      <div className="text-center">
        <Button
          variant="outlined"
          sx={{ mr: 1 }}
          onClick={() => setActiveStep((prevStep) => prevStep + 1)}
          // disabled={activeStep === steps.length }
        >
          Next
        </Button>
      </div>
    </div>
  );
}
