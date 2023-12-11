import Image from 'next/image'
import  "./top.css"

export default function Top() {
    return (
     <>
      <h1>
        Merry<br></br>
        Chiristmas<br></br>
        With lots of love.
      </h1>
      <Image
        src='/xmastree.jpg'
        layout='fill'
        alt='top image'
      />
      <p>クリスマスは、愛と平和のメッセージを伝える日でもあります。<br></br>
        あなたは誰に感謝の気持ちを伝えますか？<br></br>
        私たちは、あなたにこのメッセージを贈ります。
      </p>
      <p>
        あなたにとって暖かく幸せなクリスマスとなりますように。<br></br>
        そして良い一年をお過ごしください。<br></br>
        Merry Christmas!!
      </p>
      <img src='xmaspresent.jpg'></img>
      <h2>
        私たちもあなたに何か贈りたくて、<br></br>
        クスッと少しでも笑顔になれるような<br></br>
        ちょっとしたプレゼントを作りました。
      </h2>
      <p>AIのやついれる</p>
     </>
    )
  }