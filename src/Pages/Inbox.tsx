import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import "./CSS/Inbox.css";
import { Button, TextField, Typography } from "@mui/material";
import { Formik, useFormik } from "formik";
import { getAllConversations } from '../backend/queries/conversationQueries'
import { getUserById } from '../backend/queries/userQueries';
import { getAllMessages} from '../backend/queries/messageQueries'
import * as yup from "yup";

// Test Data


export default function Inbox() {

    const [convos, setConvosQuery] = useState<any[]>([]);
    const [convoIndex, setConvoIndex] = useState(0);
    const [convo, setConvo] = useState(convos[convoIndex]);

    useEffect(() => {
      const fetchConvos = async () => {
        const userConvos = await getAllConversations({
          filter: {
            or: [
              { user_one: { eq: localStorage.getItem('uuid')! } },
              { user_two: { eq: localStorage.getItem('uuid')! } }
            ]
          }
        })
        const filterConvos = userConvos.data.listConversationModels.items.filter(x => x._deleted !== true);
        setConvosQuery(filterConvos);
      }
      fetchConvos();
      

    }, []);
    useEffect(() => {
        setConvo(convos[convoIndex]);
       
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
                            {convos.map((Sender, index) => (
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
    //query for username
    const [user, setUser] = useState<any>("");
    //This is where you query for the username
    useEffect(() => {
        let OppoUser = props.Convo.user_one === localStorage.getItem('uuid') ? props.Convo.user_two : props.Convo.user_one;

        //query here for username
    }, []);
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
                    {user}
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
    
    //add query for messages
    return (
        <div className = "InboxConversationMessages">
            
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
