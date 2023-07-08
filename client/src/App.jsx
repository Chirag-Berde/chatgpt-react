import { useState } from 'react'
import './index.css'
import sendImg from "./assets/send.svg"
import userImg from "./assets/user.png"
import botImg from "./assets/bot.png"
import loaderImg from "./assets/loader.svg"

function App() {
  const getValue = e => console.log(e.target.value)

  return (
    <main className='chatGPT-app'>
      <section className='chat-container'>
        <div className="layout">
          <div className="chat-bubble">
            <div className="avatar">
              <img src={userImg} alt="" />
            </div>
            <div className="post">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, sit voluptate est commodi vel nemo minima qui magni eius. Deleniti eveniet corrupti in voluptatibus magnam, quidem tenetur voluptates aliquam, mollitia est facere, officiis quam?
            </div>
          </div>
          <div className="chat-bubble bot">
            <div className="avatar">
              <img src={botImg} alt="" />
            </div>
            <div className="post">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, sit voluptate est commodi vel nemo minima qui magni eius. Deleniti eveniet corrupti in voluptatibus magnam, quidem tenetur voluptates aliquam, mollitia est facere, officiis quam?
            </div>
          </div>
        </div>
      </section>
      <footer>
        <input type="text" className='composebar' autoFocus placeholder='Ask me anything ...' onChange={getValue} />
        <div className="send-button">
          <img src={sendImg} alt="sendImg" />
        </div>
      </footer>
    </main>
  )
}

export default App
