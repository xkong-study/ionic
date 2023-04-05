import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import './Tab4.css';
import {Button,CapsuleTabs} from "antd-mobile";
import { Instructor } from "../request/api";
import axios from 'axios';

const Tab4: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCompress, setIsCompress] = useState(false);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setIsOpen(!isOpen);
        setCount(1)
    };

    useEffect(()=>{
        if(isOpen==true){
            axios.post('http://localhost:8100/instruction?type=0')
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        if(isOpen==false){
            axios.post('http://localhost:8100/instruction?type=1')
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }

        if(isCompress==true){
            axios.post('http://localhost:8100/instruction?type=2')
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }

    },[isOpen,isCompress])

    const handleCompress = () => {
        setIsCompress(!isCompress);
        setCount(0)
    };


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle style={{width:"100%",textAlign:"center"}}>Bin A</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <CapsuleTabs style={{marginTop:"1rem"}}>
                    <CapsuleTabs.Tab title='Open/Close' key='fruits'>
                        <div className="bin-container">
                            <div
                                id="bin-lid"
                                className={isOpen ? 'bin-lid open' : 'bin-lid'}
                            ></div>
                            <div className="bin-body"></div>
                        </div>
                        <Button onClick={handleClick}style={{marginLeft:"29%",backgroundColor:"#af9e99",borderRadius:"20px",color:"white"}}>Open/Close Bin</Button>
                    </CapsuleTabs.Tab>
                    <CapsuleTabs.Tab title='Compression' key='vegetables'>
                        <div className="bin-container">
                            <div
                                id="bin-lid"
                                className={isCompress ? 'bin-lid compress' : 'bin-lid'}
                            ></div>
                            <div className="bin-body"></div>
                        </div>
                        <Button onClick={handleCompress}style={{marginLeft:"30%",backgroundColor:"#af9e99",borderRadius:"20px",color:"white"}}>Compress Bin</Button>
                    </CapsuleTabs.Tab>
                </CapsuleTabs>
            </IonContent>
        </IonPage>
    );
};

export default Tab4;
