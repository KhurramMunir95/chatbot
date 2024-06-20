import React from 'react';
import { filter, refresh, robot1, glowingStar, fairy, wavingHand, videoGame, rocket } from '../utils/Images';

const Filter2 = () => {
  return (
    <div className="explore-btn-overplow pt-8 pb-8">
        <div className="explore-btn-overscroll explore-btn-overscroll-explore">
            <div className="explore-btn-wrapp">
                <ul>
                    <li><a href="#"><img src={wavingHand} alt="For you" />For you</a></li>
                    <li><a href="#"><img src={glowingStar} alt="Featured" />Featured</a></li>
                    <li><a href="#"><img src={fairy} alt="Character" />Character</a></li>
                    <li><a href="#"><img src={videoGame} alt="Game" />Game</a></li>
                    <li><a href="#"><img src={rocket} alt="Productivity" />Productivity</a></li>
                    <li><a href="#"><img src={robot1} alt="AI Tools" />AI Tools</a></li>
                </ul>
            </div>
            <div className="chat-box-filter chat-box-filter-explore text-end pr-30">
                <a href="#"><img src={refresh} alt="Refresh" /> Refresh</a>
                <button className="click-here-filter">
                    <img src={filter} alt="Filters" /> Filters
                </button>
            </div>
        </div>
    </div>
  )
}

export default Filter2