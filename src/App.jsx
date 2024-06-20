import LeftMenu from "./components/LeftMenu.jsx";
import ChatBot from "./pages/ChatBot.jsx";
import Chatting from "./pages/Chatting.jsx";
import Home from "./pages/Home.jsx";

function App() {

  return (
    <>
      <section>
        <div className="w-full">
          <div className="flex">
            <div className="lg:w-3/12 md:w-3/12 w-4/12 fix-width-menu">
              <LeftMenu />
            </div>
            <div className='lg:w-9/12 md:w-9/12 w-8/12 px-6 grow'>
              {/* <Home /> */}
              {/* <ChatBot /> */}
              <Chatting />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
