import React from 'react';
import GameCarousel from '../components/GameCarousel';
import Filter3 from '../components/Filter3';
import ProfileView from '../components/ProfileView';
import BotCard from '../components/BotCard';

const Home = () => {
  return (
    <>
      {/* <section>
        <GameCarousel />
      </section> */}
      <section>
        <ProfileView />
        <div className="chat-bot-wrapp">
          <div className="chat-bot-active owl-carousel mb-20">
            {/* <BotCard /> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home