import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import Open_bin from "../bin/open_bin.jpg";
import {Avatar} from "antd-mobile";
import React from "react";
import { Button, Space, Swiper, Toast } from 'antd-mobile'
import bin_location from '../bin/bin_location.png'
import bin from '../bin/bin.png'
import operation from '../bin/operation.png'

const Tab2: React.FC = () => {
    const colors = [bin_location, bin, operation]

    const items = colors.map((color, index) => (
        <Swiper.Item key={index}>
            <div
                className="content"
                style={{ backgroundImage: `url(${color})`,backgroundSize:"contain",backgroundPosition:"center top -5px",width:"80%",margin:"0 auto",backgroundRepeat:"no-repeat",borderRadius:"25px"}}
                onClick={() => {
                    Toast.show(`你点击了卡片 ${index + 1}`)
                }}
            >
            </div>
        </Swiper.Item>
    ))

    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{textAlign:"center"}}>HomePage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <div className="home__img">
              <svg
                  className="home__blob"
                  viewBox="0 0 200 187"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                  <mask id="mask0" mask-type="alpha">
                      <path
                          d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                      />
                  </mask>
                  <g mask="url(#mask0)">
                      <image
                          className="home__blob-img"
                          x="0"
                          y="-30"
                          href="https://cdn.xxl.thumbs.canstockphoto.com/smiling-blue-recycle-bin-cartoon-mascot-character-holding-a-recycle-sign-vector-illustration-clip-art-vector_csp65121962.jpg"
                      />
                  </g>
              </svg>
          </div>
          <div className="backgroundBIN">
              <div className="bg_font">
                <h4>Smart bin</h4>
                  <p style={{fontSize:".6rem",width:"10rem"}}>Smart bin app is used to monitor</p>
                  <p style={{fontSize:".6rem",width:"10rem"}}>manage and optimize waste.</p>
                  <p style={{fontSize:".6rem",width:"10rem"}}>disposal processes</p>
              </div>
          </div>
          <div className="visit">
          <p style={{marginLeft:"1rem"}}>VISIT YOUR RECENT OPERATION</p>
          <div style={{display:"flex",flexDirection: "row"}}>
          <div className="card">
           <Avatar src={Open_bin} fit="contain" className="avatar"/>
           <div style={{width:"4rem"}}>
               <h6>Bin A</h6>
               <p style={{marginTop:"-.5rem",color:"#af9e99"}}>compress</p>
           </div>
          </div>
          </div>
              <Swiper autoplay className="play">{items}</Swiper>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
