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
import YourProjectForm from '../yourProject/YourProjectForm';
import SupplyAndInstall from '../supplyInstall/SupplyAndInstall';
import ProjectDetails from '../projectDetails/ProjectDetails';
import ContactDetails from '../contactDetails/ContactDetails'
 

const steps = [
  'Your Project',
  'Supply and Installation',
  'Project Detail',
  'Your contact details'
];

export default function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);
  console.log('active step = ', activeStep)

  return (  

    <>  
    <div className='bg-[#FFF] w-full space-y-6 mb-5 p-5'>
      <Box sx={{ width: '80%', margin: 'auto' }} className='mb-3'>
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
               <span   className={`${activeStep === index ? 'text-[#004AAD] font-semibold'  : 'text-black '}`}>  {label} </span>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

     <div style={{width:'80%',margin:'auto'}} className='space-y-6'>
      {
        activeStep === 0 && <YourProjectForm/>
      }
       {
        activeStep === 1 && <SupplyAndInstall/>
      }
       {
        activeStep === 2 &&    <ProjectDetails/>
      }
       {
        activeStep ===3 && <ContactDetails/>
      }
         
     </div>

    </div>
    <div className='border' style={{width:'80%' , margin:'auto'}}></div>
    <div className="text-center mt-3 mb-4">
        <Button
          variant="outlined"
          sx={{ mr: 1 }}
          onClick={() => setActiveStep((prevStep) => prevStep + 1)}
          disabled={activeStep === steps.length }
        >
          Next
        </Button>
      </div>
          

          



     
    </>
  );
}
