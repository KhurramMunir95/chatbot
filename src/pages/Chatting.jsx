import React from 'react';
import  { chevronRightBig, pencil, share2, copy, client4, zoom, sendMessage, luffyModal, client2, client1 } from '../utils/Images';

const Chatting = () => {
  return (
    <div className="flex flex-wrap">
      <div className="xl:w-8/12 lg:w-7/12">
        <div className="messege-title">
          <h3>
            <img src={chevronRightBig} alt="" />Your chat with Luffy
          </h3>
          <a href="#">
            <img src={zoom} alt="" />
          </a>
        </div>
        <div className="messege-boxx">
          <div className="messege-wrapper mb-20">
            <a href="#">
              <img src={client4} className='rounded-full' alt="" />
            </a>
            <div className="messege-wrap-text">
              <h3>
                Luffy <span>March 21, 2024</span>
              </h3>
              <p>
                Quisque aliquet lorem lorem, non volutpat orci lobortis in. Phasellus euismod orci sit amet orci porta
                pulvinar. Etiam ut commodo massa, at gravida dui. Nam tristique fringilla est, vel sagittis sapien
                ultrices eget. Fusce fermentum mi at felis rutrum, vel aliquet urna pretium. Duis elementum sagittis
                felis non sollicitudin. Quisque sit amet nisi non mauris dapibus fringilla. Vivamus dignissim placerat
                mi a hendrerit.
              </p>
              <div className="messege-social">
                <a href="#">
                  <img src={copy} alt="" />
                </a>
                <a href="#">
                  <img src={pencil} alt="" />
                </a>
                <a href="#">
                  <img src={share2} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="messege-wrapper mb-20">
            <a href="#">
              <img src={client2} className='rounded-full' alt="" />
            </a>
            <div className="messege-wrap-text">
              <h3>
                Alonzo Tiger <span>March 21, 2024</span>
              </h3>
              <p>
                The chatbot is highly versatile, capable of assisting with everything from answering complex questions
                to providing creative writing prompts
              </p>
              <div className="messege-social">
                <a href="#">
                  <img src={copy} alt="" />
                </a>
                <a href="#">
                  <img src={pencil} alt="" />
                </a>
                <a href="#">
                  <img src={share2} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="messege-wrapper mb-20">
            <a href="#">
              <img src={client1} className='rounded-full' alt="" />
            </a>
            <div className="messege-wrap-text">
              <h3>
                Alonzo Tiger <span>March 21, 2024</span>
              </h3>
              <p>
                The chatbot is highly versatile, capable of assisting with everything from answering complex questions
                to providing creative writing prompts
              </p>
              <div className="messege-social">
                <a href="#">
                  <img src={copy} alt="" />
                </a>
                <a href="#">
                  <img src={pencil} alt="" />
                </a>
                <a href="#">
                  <img src={share2} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="messege-send-chatbot">
          <input type="text" placeholder="Message Luffy" />
          <a href="#">
            <img src={sendMessage} alt="" />
          </a>
        </div>
      </div>
      <div className="xl:w-4/12 lg:w-5/12">
        <div className="messege-big-img">
          <img src={luffyModal} alt="" />
        </div>
        <div className="messege-btn">
          <h4>Luffy</h4>
          <div className="messege-btn-link">
            <a href="#">
              <img src="assets/img/user.svg" alt="" />
              Following
            </a>
            <a href="#">
              <img src="assets/img/share.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="messege-contenttt">
          <a href="#">
            <img src="assets/img/messege-client1.png" alt="" />
            Stygian Styx
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo ante, lobortis a maximus nec, scelerisque
            eu lorem. Nunc sodales erat dapibus lacinia tempus. Phasellus volutpat mi mauris, non commodo neque placerat
            at. Vivamus sollicitudin erat lectus, sit amet tincidunt orci dictum id. Donec nec lectus sit amet sem
            rutrum pharetra ac sit amet tellus. Aenean ante odio, efficitur vel lacinia et, tincidunt eu purus.
          </p>
          <p>
            Phasellus varius suscipit nibh, id cursus neque euismod at. Praesent pharetra diam eu diam tincidunt.{' '}
            <a href="#">show more</a>
          </p>

          <div className="messege-profile-select">
            <button className="-messegeclick-select dropdown_toogler">
              <img src="assets/img/select-img1.png" alt="" />
              ChatGPT <img src="assets/img/angle-down.svg" alt="" />
            </button>

            <div className="open-select-menu">
              <ul>
                <li>
                  <a href="#">
                    <img src="assets/img/select-img1.png" alt="" />
                    ChatGPT
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/select-img2.png" alt="" />
                    GPT-4 Turbo
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/select-img3.png" alt="" />
                    Google Gemini
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/select-img4.png" alt="" />
                    Claude V2
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chatting