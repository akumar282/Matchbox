import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import "./CSS/Inbox.css";
import { Button, TextField, Typography } from "@mui/material";
import { Formik, useFormik } from "formik";
import * as yup from "yup";

// Test Data
const selfuser = '111111';
const Convo1 = {
    id: '134325345345353',
    user1: '111111',
    user2: '222222',
    messages: [
        {
            id: '1',
            sender: '111111',
            text: 'Hello',
        },
        {
            id: '2',
            sender: '222222',
            text: 'Hi',
        },
        {
            id: '3',
            sender: '111111',
            text: 'How are you?',
        },
        {
            id: '4',
            sender: '222222',
            text: 'I am good, how are you?',
        },
        {
            id: '5',
            sender: '111111',
            text: 'I am good, thanks for asking dalkshjldkjsaljdlajsldkjaldjlajdlkasjdlksajldkajslkdjalkdjaslkdjasldjaldjaslkdsjlaskdjlkasjdlkajs',
        },
        {
            id: '6',
            sender: '222222',
            text: 'No problem',
        },
        {
            id: '7',
            sender: '111111',   
            text: 'What are you up to?',
        },
        {
            id: '8',
            sender: '222222',
            text: 'Nothing much, just chilling',
        },
        {
            id: '9',
            sender: '111111',
            text: 'Cool, I am going to go now',
        },
        {
            id: '10',
            sender: '222222',
            text: 'Ok, bye',
        },
        {
            id: '11',
            sender: '111111',
            text: 'Bye',
        },
        {
            id: '12',
            sender: '222222',
            text: 'YOUR MOM',
        },
        {
            id: '13',
            sender: '222222',
            text: 'YOUR MOM',
        },
        {
            id: '14',
            sender: '222222',
            text: 'YOUR MOM',
        },
        {
            id: '15',
            sender: '222222',
            text: 'YOUR MOM',
        },
        {
            id: '16',
            sender: '222222',
            text: 'YOUR MOM',
        },
        {
            id: '17',
            sender: '222222',
            text: 'YOUR MOM',
        },
        


    ]
};

const Convo2 = {
    id: '49230948920840',
    user1: '111111',
    user2: '333333',
    messages: [
        {
            id: '1',
            sender: '111111',
            text: 'Hello',
        },
        {
            id: '2',
            sender: '333333',
            text: 'YOUR MOM',
        }
    ]
};

export default function Inbox() { 
    const users = [Convo1, Convo2];
    const [convoIndex, setConvoIndex] = useState(0);
    const [convo, setConvo] = useState(users[convoIndex]);

    useEffect(() => {
        setConvo(users[convoIndex]);
        console.log(convo);
    }, [convoIndex]);

    return (
        <div className="InboxMain">
            <Navbar />
            <div className = "InboxConversationHolder">
                <div className = "InboxMessages">  
                    <div className = "InboxMessageHeader">
                        <Typography sx = {{
                            fontSize: 20,
                            fontWeight: 'bold',
                            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                            color: 'black',
                        }}> Messages </Typography>
                    </div>
                        <ul>
                            {users.map((Sender, index) => (
                                <CustomButtons Convo = {Sender} index = {index} setConvoIndex = {setConvoIndex}/>
                                
                            ))}
                        </ul>
                </div>
                <div className = "InboxConversation">
                    <div className = "InboxConversationHeader">
                        <Typography sx = {{
                            fontSize: 20,
                            fontWeight: 'bold',
                            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                            color: 'black',
                        }}> Conversation </Typography>
                    </div>
                    <div className = "InboxConversationBody">
                        <CustonConversation convo = {convo}/>
                    </div>
                    <CustomMessageSender />
                </div>
            </div>
        </div>
    );
}

function CustomButtons(props: any) {
    console.log(props.index);
    return (
        <li>
            <Button sx = {{
                display: 'flex',
                flexDirection: 'row',
                textDecoration: 'none',
                alignItems: 'center',
                justifyContent: 'left',
                color: 'black',
                width: '100%',
                height: '100%',
            }}
            disableRipple
            onClick={() => props.setConvoIndex(props.index)}
            >
                <img className="InboxUserImage" src = "images/Strom.jpg" />
                <Typography>
                    {props.Convo.user2}
                </Typography>
            </Button>
        </li>
    );
}

function CustomMessageSender() {
    const validationSchema = yup.object({
        message : yup
          .string()
          .required("Required")
          .max(1000, "Must be 1000 characters or less")
      });
    const formik = useFormik({
        initialValues: {
            message: '',
        },

        onSubmit: (values) => {
            if (values.message === '') {
                return;
            }
            formik.resetForm();
        },
    });

    return (
            <div className = "InboxMessageField">
                <TextField sx = {{
                    width: '60%',
                    outline: 'none',
                    border: 'none',

                }}
                size="small"
                placeholder = "Type a message..."
                id = "message"
                name = "message"
                type = "text"
                onChange = {formik.handleChange}
                value = {formik.values.message}
                />
                <Button sx = {{
                    width: '20%',
                    height: '80%',
                    color : 'black',

                    backgroundColor: 'white',
                }}
                disableRipple
                type = "submit"
                onClick = {() => formik.handleSubmit()}
                >
                    Send
                </Button>
            
            </div>
    );
}

function CustonConversation(props: any) {
    
    // add query for messages
    return (
        <div className = "InboxConversationMessages">
            {props.convo.messages.map((message) => (
                <MyMessage message = {message}/>
            ))}
        </div>
    );
}

function MyMessage(props: any) {
        if(props.message.sender === selfuser) {
        return (
            <div className = "InboxConversationMessage">
                <div className = "InboxMessageContainer">
            <Typography sx = {{
                fontSize: 16,
         
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                color: 'white',
            }}>
                {props.message.text}
            </Typography>
            </div>
        </div>
        );
        } else {
            return (
                <div className = "InboxConversationMessageNotUser">
                    <div className = "InboxMessageContainerNotUser">
                <Typography sx = {{
                    fontSize: 16,
                
                    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                    color: 'black',
                }}>
                    {props.message.text}
                </Typography>
                </div>
            </div>
            );
        }
    }
