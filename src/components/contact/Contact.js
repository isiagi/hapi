import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import './contact.css';

const Contact = () => {
  return (
    <div className="contact__wrapper container">
      <div className="contact__first">
        <h2>Our Contact</h2>
      </div>
      <div className="contact__sec">
        <div className="contact__details">
          <div className="contact__form">
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
               
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <Box
                sx={{
                  width: 900,
                  maxWidth: '100%',
                }}
              >
                <TextField fullWidth label="fullWidth" id="fullWidth" />
              </Box>
            </Box>
          </div>
          <div className="contact__info">
            <div className="place__items__center contact__info1">
              <div>hello</div>
              <div>
                <h4>Office Address</h4>
                <p>Ham Tower, Makerere Road</p>
                <p>Kampala, Uganda</p>
              </div>
            </div>
            <div className="place__items__center contact__info1">
              <div>hello</div>
              <div>
                <h4>Office Address</h4>
                <p>Ham Tower, Makerere Road</p>
                <p>Kampala, Uganda</p>
              </div>
            </div>
            <div className="place__items__center contact__info1">
              <div>hello</div>
              <div>
                <h4>Office Address</h4>
                <p>Ham Tower, Makerere Road</p>
                <p>Kampala, Uganda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
