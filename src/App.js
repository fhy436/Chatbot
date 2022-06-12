import MainSection from './Components/MainSection/MainSection';
import NavBar from './Components/NavBar/NavBar';
import KommunicateChat from './chatbot';
import ImageCards from './Components/ImageCards/ImageCards';



function App() {
  return (
    <>
    <NavBar></NavBar>
    <MainSection></MainSection>
    <KommunicateChat></KommunicateChat>
    <ImageCards></ImageCards>
    </>
  );
}

export default App;
