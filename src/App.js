import './App.css';
import {useEffect} from 'react'; 
import Header from './components/Header/Header';
import HexWrap from './components/HexWrap/HexWrap';
import Intro from './components/Intro/Intro';
import Aos from 'aos';
import "aos/dist/aos.css";
import Footer from './components/Footer/Footer';
import Brands from './components/Brands/Brands';
import Stack from './components/Stack/Stack';
import Export from './components/Export/Export';
import Blog from './components/Blog/Blog';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800
    });
  }, [])
  
  return (
    <div className="App">
      <section className="site_header">
      <Header />
      <Intro />
      </section>
      <section id="section-about" data-aos="fade-down" className="site_about">
        <div className="u-align-center u-margin-bottom-lg">
          <p className="heading_primary site_about_heading">About</p>
        </div>
        <HexWrap />
        <div className="u-margin-top-lg companies_info">
        <p className="heading_secondary brand_heading">I'm proud to have worked with some awesome companies:</p>
        <Brands />
        </div>
        <div id="skills_container" className="u-margin-top-lg">
        <p className="heading_secondary brand_heading u-margin-bottom-md">Skills</p>
        <Stack />
        </div>
       <Export />
       </section>
        <section className="u-margin-top-md">
          <div className="u-align-center u-margin-bottom-lg">
            <p className="heading_primary site_about_heading">Blog</p>
          </div>
          <Blog />
        </section>
        <section className="footer_section u-margin-top-md">
        <Footer />
      </section>
      
    </div>
  );
}

export default App;
