import 'tailwindcss/tailwind.css';
import Nav from "./components/Join/Nav";
import JoinLeague from "./components/Join/JoinLeague";
import Footer from './components/Join/Footer';



export default function App() {
  return (
    <div className="app">
      <div className="style={ImgStyle}" >
        <Nav />        
        <JoinLeague />
        <Footer />
      </div>      
    </div>
  );
}


const ImgStyle = {
  width: '100%',
  height: '1200px',
  backgroundImage: `url("https://images.unsplash.com/photo-1632946269126-0f8edbe8b068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80")`,
  backgroundSize: 'cover'
};

