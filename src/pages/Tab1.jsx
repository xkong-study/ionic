import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import {FreeCamera, Vector3, HemisphericLight, MeshBuilder, StandardMaterial, Color3} from "@babylonjs/core";
import "../less/bin.less";
import { UilTemperature, UilWater, UilBell, UilHourglass } from '@iconscout/react-unicons'
import './Tab1.css';

const Tab1: React.FC = () => {

        const [data, setData] = React.useState({ temperature: 36, humidity: 310, EmergencyLevel: 1 });
        const [temperature, setTemperature] = useState(null);
        const [humidity, setHumidity] = useState(null);
        const [emergencyLevel, setEmergencyLevel] = useState(null);
        const [time,setTime] = useState(null)

        useEffect(() => {
            const ws = new WebSocket('ws://localhost:8080/websocket/client');
            ws.onopen = function() {
                console.log("Connection open.");
            };
            ws.onmessage = (event) => {
                const data = JSON.parse(event.data);
                const time_change = Change_time()
                console.log(data,time)
                setTemperature(data.humiture.temperature);
                setHumidity(data.humiture.Humidity);
                setEmergencyLevel(data.EmergencyLevel);
                setTime(time_change)
            };
            return () => {
                ws.close();
            };
        }, []);

        function Change_time(){
            const now = new Date();
            const timestamp = now.getTime();
            const randomDelay = Math.floor(Math.random() * (50 - 5 + 1) + 5);
            const adjustedTimestamp = timestamp - randomDelay;
            const adjustedDate = new Date(adjustedTimestamp);
            const year = adjustedDate.getFullYear();
            const month = adjustedDate.getMonth() + 1;
            const day = adjustedDate.getDate();
            const hour = adjustedDate.getHours();
            const minute = adjustedDate.getMinutes();
            const second = adjustedDate.getSeconds();
            const time = `${year}-${month}-${day} ${hour}:${minute}:${second}`
            return time
        }


return (
    <IonPage>
      <IonHeader class="one">
        <IonToolbar>
          <IonTitle style={{width:"100%",textAlign:"center"}}>Bin A</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <div style={{width: "100%", height: "70%"}}>
          <img src="https://media.istockphoto.com/id/1138875155/vector/isolated-metallic-trash-can-vector-design-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=jRrVx3ev4_n2pErKMMLRmZbDZMe6bZpL2PEZUuG94NI=" alt=""
          style={{width: "auto", height: "30vh", marginTop: "5vh",marginLeft:"40%",transform:"translate(-5.8rem,0)"}}/>
          <p style={{position: "relative", left: "20%", fontFamily: 'Knewave', fontSize:'1.2rem'}}><UilTemperature style={{width:".4rem",height:".4rem",color:"#44A723",border:".2rem",borderStyle:"solid",borderRadius:"50%",marginRight:".3rem"}}/>Temperature: {temperature}</p>
          <p style={{position: "relative", left: "20%", fontFamily: 'Knewave', fontSize:'1.2rem'}}><UilWater style={{width:".4rem",height:".4rem",color:"#44A723",border:".2rem",borderStyle:"solid",borderRadius:"50%",marginRight:".3rem"}}/>Humidity: {humidity}</p>
          <p style={{position: "relative", left: "20%", fontFamily: 'Knewave', fontSize:'1.2rem'}}><UilBell style={{width:".4rem",height:".4rem",color:"#44A723",border:".2rem",borderStyle:"solid",borderRadius:"50%",marginRight:".3rem"}}/>EmergencyLevel: {emergencyLevel}</p>
          <p style={{position: "relative", left: "20%", fontFamily: 'Knewave', fontSize:'1.2rem'}}><UilHourglass style={{width:".4rem",height:".4rem",color:"#44A723",border:".2rem",borderStyle:"solid",borderRadius:"50%",marginRight:".3rem"}}/>Time: {time}</p>
          </div>
          <img src="https://i.328888.xyz/2023/04/04/ib3y1t.png" style={{width:"100%",height:"auto",position:"absolute",bottom:"5px",zIndex:"-2"}}/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
