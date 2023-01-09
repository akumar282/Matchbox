import { Button,  Dialog, DialogContent, DialogTitle} from "@mui/material"
import React from "react"
import "./LandingPopup.css"

export default function LandingPopupRegister(props) {
    const [name, setName] = React.useState('');
    function handleClose() {
        props.setTrigger(false);
    }
    return (props.trigger) ? (
        // this is the main container for the popup consider this like divs  dad
        <Dialog open={props.trigger} maxWidth= 'sm' fullWidth= "true">
            {/* as it said Dialog has its own form of objects 
            you are going to have to search up the documentation for them*/}
            <DialogTitle id="dialog-title" sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {"Register Your Account"}
            </DialogTitle>
            {/* consider this a div */}
            <DialogContent sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <form className="LoginForm">
                    <label>Username:
                        <input
                            type="text" 
                            userValue={name}
                            onChange={(e) => setName(e.target.userValue)}
                            onClose = {(e) => setName("")}
                            />
                    </label>
                    <label>Password:
                        <input
                            type="text" 
                            passValue={name}
                            onChange={(e) => setName(e.target.passValue)}
                            onClose = {(e) => setName("")}
                            />
                    </label>
                </form>
                <Button sx = {{ 
                    width: '10px',
                    height: '40px',
                }}
                    variant='contained' onClick= {handleClose}> 
                    Close
                </Button>  
            </DialogContent>
            
        </Dialog> 
    ) : "";
}