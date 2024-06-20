import React from 'react';
import { client2, message, followUser, share, luffy, luffyUser, luffyModal, chevronRight } from '../utils/Images';

const ChatBot = () => {
  return (
    <>
    {/* <div className="flex">
        <div className="w-full lg:w-12/12">
            <div class="back-page">
                <a href="#"><img src="assets/img/left-arrow.svg" alt="" />Back</a>
            </div>
        </div>
    </div> */}
    <div className="flex flex-wrap">
        <div className="w-full lg:w-5/12">
            <div className="luffy-text">
                <div class="back-page py-5">
                    <a href="#" className='flex items-center'><img src={chevronRight} alt="" />Back</a>
                </div>
                <h2>Luffy</h2>
                <a href="#"><img src={client2} className='rounded-full' alt="Luffy Logo" />Stygian Styx</a>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo ante, lobortis a maximus nec, scelerisque eu lorem. Nunc sodales erat dapibus lacinia tempus. Phasellus volutpat mi mauris, non commodo neque placerat at. Vivamus sollicitudin erat lectus, sit amet tincidunt orci dictum id. Donec nec lectus sit amet sem rutrum pharetra ac sit amet tellus. Aenean ante odio, efficitur vel lacinia et, tincidunt eu purus.
                </p>
                <p>
                Phasellus varius suscipit nibh, id cursus neque euismod at. Praesent pharetra diam eu diam tincidunt fermentum. Aliquam erat volutpat. Mauris suscipit urna arcu, nec sagittis velit pretium non. Etiam id eleifend turpis. Pellentesque facilisis orci sed nunc fringilla, eu fermentum purus vulputate. Nulla pulvinar diam quis posuere porta. Aliquam eu vehicula elit, sed aliquet odio.
                </p>

                <div className="luffy-comment">
                <a href="#"><img src={message} alt="Start Chat" />Start Chat</a>
                <a href="#"><img src={followUser} alt="Follow" />Follow</a>
                <a href="#"><img src={share} alt="Share" /></a>
                </div>
            </div>
        </div>
        <div className="w-full lg:w-7/12">
            <div className="luffy-charecter">
                <div className="luffy-charecter-img">
                <img src={luffy} alt="Luffy" />
                </div>
                <div className="luffy-folwer-section">
                <ul>
                    <li data-bs-toggle="modal" href="#exampleModalToggle" role="button"><a href="#"><img src={luffyUser} alt="User" /></a></li>
                    <li><a href="#">Conversations<span>4.9K</span></a></li>
                    <li><a href="#">Reviews<span>105</span></a></li>
                    <li><a href="#">Popularity<span>27.3K</span></a></li>
                    <li><a href="#">Category<span>Character</span></a></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ChatBot