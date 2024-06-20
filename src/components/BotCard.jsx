import React from 'react';
import { 
    robot,
    gpt4,
    gemini,
    claude,
    gptDark,
    novel,
    plus2,
    rating,
    comment
} from '../utils/Images';

const BotCard = () => {
  return (
    <div className="chat-bot-items">
        <div className="chat-bot-hover">
            <a href="#">Official</a>
            <a href="#"><img src={plus2} alt="Add" /></a>
        </div>
        <div className="chat-bot-img">
            <img src={gpt4} alt="Chat Bot" />
        </div>
        <h5>AskPandia Assistant</h5>
        <div className="chat-bot-rating">
            <a href="#"><img src={rating} alt="Rating" />4.9 Rating</a>
            <span>.</span>
            <a href="#"><img src={comment} alt="Reviews" />1.8K Reviews</a>
        </div>
        <p>OpenAI's most powerful model. Stronger than GPT-3.5 in quantitative questions, creative writing, and many other...</p>
    </div>
  )
}

export default BotCard