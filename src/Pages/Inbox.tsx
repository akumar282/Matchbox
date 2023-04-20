import React, { createContext, useContext, useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import "./CSS/Inbox.css";
import { Button, TextField, Typography } from "@mui/material";
import { Formik, useFormik } from "formik";
import { getAllConversations } from '../backend/queries/conversationQueries'
import { getUserById } from '../backend/queries/userQueries';
import { getAllMessages} from '../backend/queries/messageQueries'
import { createMessage } from '../backend/mutations/messageMutations'
import * as yup from "yup";
import { getImage } from "../backend/storage/s3";
import { refresh } from "aos";

// Test Data


export default function Inbox() {
    const [refresh, setRefresh] = useState(false);
    const [convos, setConvosQuery] = useState<any[]>([]);
    const [convoIndex, setConvoIndex] = useState(0);
    const [convo, setConvo] = useState(convos.at(0));
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
        setConvo(convos.at(convoIndex));
       
    }, [convoIndex]);
    useEffect(() => {
        setConvo(convos.at(0));
    }, [convos]);
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
                        <CustomConversation convo = {convo} shouldRefresh = {refresh} refreshed = {setRefresh}/>
                    </div>
                  
                        <CustomMessageSender convo = {convo} CallRefresh = {setRefresh} shouldRefresh = {refresh}/>
                </div>
            </div>
            <Button onClick = {() => console.log(refresh)}>
                Press
            </Button>
        </div>
    );
}

function CustomButtons(props: any) {
    //query for username
    const [user, setUser] = useState<any>("");
    const [imageSrc, setImageSrc] = useState("");
    let OppoUser = props.Convo.user_one === localStorage.getItem('uuid') ? props.Convo.user_two : props.Convo.user_one;
    //This is where you query for the username
    useEffect(() => {
        const fetchUser = async () => {
          const userObj = await getUserById(OppoUser)
          setUser(userObj.data.getUsersModel)
        }
        fetchUser();
    }, []);
    useEffect (() => {
        const fetchImage = async () => {
            const src = await getImage(user.profile_image);
            setImageSrc(src);
            };
            fetchImage();
    }, [user]);
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
                <img className="InboxUserImage" src = {imageSrc} />
                <Typography>
                    {user.user_name}
                </Typography>
            </Button>
        </li>
    );
}

function CustomMessageSender(props: any) {

    async function sendMessage(message: string) {
      const result = await createMessage({
        input: {
          message: message,
          conversationID: props.convo.id!,
          to: props.convo.user_one === localStorage.getItem('uuid') ? props.convo.user_two : props.convo.user_one,
          from: localStorage.getItem('uuid')!,
          message_date: new Date().toISOString()
        }
      })
      console.log(result)
    }
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
            sendMessage(values.message);
            props.CallRefresh(!props.shouldRefresh);
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

function CustomConversation(props: any) {
    const [messages, setMessages] = useState<any[]>([]);
    const [ForceRun, setForceRun] = useState(true);
    useEffect(() => {
      const fetchMessages = async () => {
        const userMessages = await getAllMessages({
          filter: {
            conversationID: { eq: props.convo.id }
          }
        })
        const filterMessages = userMessages.data.listMessageModels.items.filter(x => x._deleted !== true);
        setMessages(filterMessages);
      }
      fetchMessages();
      
    }, [props.convo]);
    // skipping on
    useEffect(() => {
        console.log(props.shouldRefresh);

        if (ForceRun) {
            setForceRun(false);
        } else {
            setForceRun(true);
        }
    }, [props.shouldRefresh]);

    useEffect(() => {
        const fetchMessages = async () => {
            const userMessages = await getAllMessages({
              filter: {
                conversationID: { eq: props.convo.id }
              },
              limit: 200
            })
            const filterMessages = userMessages.data.listMessageModels.items.filter(x => x._deleted !== true);
            console.log(userMessages);
            setMessages(filterMessages);
          }
          const delay = setTimeout(() => {
            fetchMessages();
          }, 200);
          
          // Clean up the timeout
          return () => clearTimeout(delay);
    }, [ForceRun]);
    

    
    //sort by time
    function sort (array: any[]) {
        return array.sort((a: any, b: any) => {
          return  new Date(a.message_date).getTime() - new Date(b.message_date).getTime();
        }
        );
      }

    let Sortedmessages = sort(messages);
    //add query for messages
    if (messages.length !== 0) {
    return (
        <div className = "InboxConversationMessages">
            {Sortedmessages.map((message) => (
                <MyMessage message = {message}/>
            ))}

        </div>
    );
            } else 
    return (
        <></>
    );

}

function MyMessage(props: any) {
        if(props.message.from === localStorage.getItem('uuid')) {
        return (
            <div className = "InboxConversationMessage">
                <div className = "InboxMessageContainer">
            <Typography sx = {{
                fontSize: 16,
         
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                color: 'white',
            }}>
                {props.message.message}
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
                    {props.message.message}
                </Typography>
                </div>
            </div>
            );
        }
    }
