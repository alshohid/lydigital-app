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

const steps = [
  'Your Project',
  'Supply and Installation',
  'Project Detail',
  'Your contact details'
];

export default function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div>
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
                              color: activeStep === index ? 'black' : 'black',
                             
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
