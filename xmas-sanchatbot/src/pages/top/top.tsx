import Image from 'next/image'
import  "./top.css"

export default function Top() {
    return (
     <>
      <div className="container">
        <div className='desgin-box'>
          <img src='/xmastree.jpg' className="w-3/5 title-image"/>
          <h1 className='title'>
            Merry<br></br>
            Chiristmas<br></br>
            With lots of love.
          </h1>
        </div>
      </div>
      
      <p>クリスマスは、愛と平和のメッセージを伝える日でもあります。<br></br>
        あなたは誰に感謝の気持ちを伝えますか？<br></br>
        私たちは、あなたにこのメッセージを贈ります。
      </p>
      <p>
        あなたにとって暖かく幸せなクリスマスとなりますように。<br></br>
        そして良い一年をお過ごしください。<br></br>
        Merry Christmas!!
      </p>
      <div className='present'>
        <div className='present-box'>
          <img src='/xmaspresent.jpg' className="w-3/5 main-image"/>
        </div>
        <h2 className='present-text'>
          私たちもあなたに何か贈りたくて、<br></br>
          クスッと少しでも笑顔になれるような<br></br>
          ちょっとしたプレゼントを作りました。
        </h2>
      </div>
      <p>AIのやついれる</p>
     </>
    )
  }