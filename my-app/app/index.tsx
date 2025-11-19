import { useState } from "react";
import Splash from "./src/screens/Splash";

export default function App(){
  const [ShowSplash,setShowSplash]= useState(true);

  if(ShowSplash){
  return <Splash onFinish={()=> setShowSplash(false)}/>
  }

}