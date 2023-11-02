import { useEffect, useState } from "react";
import zaWarudo from './zaWarudo.gif';

function Time() {
    const [time, setTime] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(time < 10){
                setTime(time + 1);
            }else{
            clearInterval(interval);
             const welcome = document.querySelector('.welcome');
             const title = document.querySelector('h1');
             welcome.style.backgroundColor = "black";
             title.style.color = "white";
             let subTitle = document.createElement('h2');
             subTitle.textContent = "ZA WARRUDO !";
             welcome.appendChild(subTitle);
             let img = document.createElement('img');
             img.setAttribute("src", zaWarudo);
             welcome.appendChild(img);
            }
        },1000);
        return ()=> clearInterval(interval);
        
    })
   
  return (
    <>
    <section className="time">
        <p>{time} sont passées</p>
    </section>
    </>
  )
}

export default Time