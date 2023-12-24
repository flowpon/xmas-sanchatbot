"use client";

import  "./message.css"
import { useVisualViewportHeightEffect } from "./keybord";
import { ChangeEventHandler, useEffect, useState } from "react";
import { getSantaMessage } from "@/app/api/cahtbot";

type MessageBox = {
  user: string,
  message: string
}

type Message = {
  message: string
}

export default function Message() {
  const [userMessage, setUserMessage] = useState("");
  const [display, setDisplay] = useState<MessageBox[]>([]);
  const [isBtn, setIsBtn] = useState(false);
  useVisualViewportHeightEffect();

  function addDisplay(value: MessageBox) {
    console.log(value)
    setDisplay((display => 
      [
        ...display,
        {
          user: value.user,
          message: value.message
        }
      ]))
  }

  function action() {
    setUserMessage("");
    addDisplay({user: "user", message: userMessage});
    setIsBtn(true);
    sendMessage(); 
  }

  async function sendMessage() {
    const _santaMessage = await getSantaMessage(userMessage);
    addDisplay({user: "santa", message: _santaMessage});
    setIsBtn(false);
  };

  const handleMessageChnage: ChangeEventHandler<HTMLInputElement> = ({
    target
  }) => {
    setUserMessage(target.value);
  };

  useEffect(() => {
    submitType()
  })

  const submitType = () => {
    if(isBtn) {
      return (<input type='submit' className='ml-3 bg-slate-400 font-bold text-white px-1.5 h-7 rounded-lg text-sm' disabled />)
    } else {
      return (<input type='submit' className='ml-3 bg-blue-800 font-bold text-white px-1.5 h-7 rounded-lg text-sm' />)
    }
  }
  
  return (
    <>
      <header className='bg-green-500 flex justify-center items-center'><img src='/star.png' className='h-12'/><p className='font-desgin px-8'>XmasAI</p></header>
      <div className='message-body'>
        {
          display.map((data, index) => {
            if(data.user == "santa") {
              return <SantaMessage key={index} message={data.message}/>
            } else {
              return <MyMessage key={index} message={data.message} /> 
            }
          })
        }
      </div>
      <form action={action}>
        <footer>
          <div className='flex justify-center items-center w-full mt-3 bg-slate-400 h-12'>
            <input type='text' name="message" className='w-10/12 h-7 rounded-lg' value={userMessage} onChange={handleMessageChnage}/>
            {submitType()}
          </div>
        </footer>
      </form>
    </>
  )
}

export function MyMessage({message}: Message) {
  return(
    <>
      <div className='my-message-box'><p className='my-message'>{message}</p></div>
    </>
  )
}

export function SantaMessage({message}: Message) {
  return(
    <>
      <div className='santa-message-box'><p className='santa-message'>{message}</p></div>
    </>
  )
}

/**
 * Sets a var `--visual-viewport-height` to the `<html>` element.
 */
