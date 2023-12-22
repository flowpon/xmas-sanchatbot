import Image from 'next/image'
import  "./message.css"

export default function Message() {
  return (
    <>
      <header className='bg-green-500 flex justify-center items-center'><img src='/star.png' className='h-12'/><p className='font-desgin px-8'>XmasAI</p></header>
      <div className='overflow-auto'>
        <MyMessage />
        <SantaMessage />
      </div>
      <SendMessage />
    </>
  )
}

export function MyMessage() {
  return(
    <>
      <div className='my-message-box'><p className='my-message'>ここにユーザーのメッセージが表示されます。</p></div>
    </>
  )
}

export function SantaMessage() {
  return(
    <>
      <div className='santa-message-box'><p className='santa-message'>ここにサンタからのメッセージが表示されます。</p></div>
    </>
  )
}

export function SendMessage() {
  return(
    <>
      <footer>
        <div className='flex justify-center items-center w-full mt-3 bg-slate-400 h-12'>
          <input type='text' className='w-10/12 h-7 rounded-lg' />
          <input type='submit' className='ml-3 bg-blue-800 font-bold text-white px-1.5 h-7 rounded-lg text-sm' />
        </div>
      </footer>
    </>
  )
}