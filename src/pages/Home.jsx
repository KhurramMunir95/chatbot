import React from 'react';
import GameCarousel from '../components/GameCarousel';
import Filter1 from '../components/Filter1';
import ProfileView from '../components/ProfileView';
import BotCard from '../components/BotCard';

const Home = () => {
  return (
    <>
      <section>
        <GameCarousel />
      </section>
      <section>
        <Filter1 />
        <div className="chat-bot-wrapp">
          <div className="flex flex-wrap mb-20">
            <div className='lg:w-4/12'>
              <BotCard />
            </div>
            <div className='lg:w-4/12'>
              <BotCard />
            </div>
            <div className='lg:w-4/12'>
              <BotCard />
            </div>
            <div className='lg:w-4/12'>
              <BotCard />
            </div>
            <div className='lg:w-4/12'>
              <BotCard />
            </div>
            <div className='lg:w-4/12'>
              <BotCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home