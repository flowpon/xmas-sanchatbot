import Image from "next/image";
import "./top.css";

export default function Top() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="desgin-box">
          <img src="/xmastree.jpg" className="w-3/5 title-image" />
          <h1 className="title">
            Merry<br></br>
            Chiristmas<br></br>
            With lots of love.
          </h1>
        </div>
      </div>
      <div className="main">
        <p className="main-text">
          クリスマス<br></br>
          愛と平和のメッセージを伝える日<br></br>
          あなたは誰に感謝の気持ちを伝えますか？<br></br>
          私たちはこのメッセージを<br></br>
          あなたへ届けます
        </p>
        <p className="sub-text">
          あなたにとって暖かく幸せなクリスマスとなりますように<br></br>
          そして、良い一年をお過ごしください<br></br>
          Happy Merry Christmas!!
        </p>
      </div>
      <div className="present">
        <div className="flex items-center present-box">
          <img src="/xmaspresent.jpg" className="w-3/5 present-image" />
          <h2 className="present-text">
            実は....<br></br>
            私たちもあなたに何か贈りたくて、<br></br>
            クスッと少しでも笑顔になれるような<br></br>
            ちょっとしたプレゼントを作りました。<br></br>
          </h2>
        </div>
        <a href="#" className="btntextchange">
          <span>ここを押してね</span>
          <span>Ho!Ho!Ho!</span>
        </a>
      </div>
    </div>
  );
}
