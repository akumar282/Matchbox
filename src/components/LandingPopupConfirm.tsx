import * as React from 'react'
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    IconButton,
  } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./LandingConfirmPopup.css";

export default function LandingPopupConfirm(props: { setTrigger: (arg0: boolean) => void; trigger: boolean; }) {
    function handleClose() {
        props.setTrigger(false);
    }

    return props.trigger ? (
        <Dialog className='popup-form' open={props.trigger} maxWidth="md" fullWidth={true}>
          <IconButton
            sx={{
              width: "40px",
              height: "40px",
              display: "flex",
              justifySelf: "right",
              alignSelf: "right",
              marginLeft: "auto",
              marginRight: "1%",
              marginTop: "1%"
            }}
            onClick={() => handleClose()}
          >
            <HighlightOffIcon fontSize="large" />
          </IconButton>
          <DialogTitle
            id="dialog-create"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2rem",
            }}
          >
            {"Success 🎉"}
          </DialogTitle>
          <DialogContent className='popup-subtext'>
            {"You will be notified upon the product release!"}

          </DialogContent>
        </Dialog>
        
      ) : (
        <React.Fragment>
        </React.Fragment>
        
      )
}
    
