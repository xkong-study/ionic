import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import './Tab4.css';
import {Button,CapsuleTabs} from "antd-mobile";

const Tab4: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCompress, setIsCompress] = useState(false);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setIsOpen(!isOpen);
        setCount(1)
    };

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
