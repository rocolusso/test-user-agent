import {useEffect, useState} from "react";


export default function Home() {
   const [userAgent,setUserAgent] = useState<string|null>(null);

  useEffect(()=>{

    if(window as any){
      const ua = window?.navigator.userAgent.toLowerCase();
      setUserAgent(ua)
    }


  },[setUserAgent])


  return (
    <div>
      hello
      <div>
        userAgent is : <p className={'p-3'}>{userAgent}</p>
      </div>
    </div>
  );
}
