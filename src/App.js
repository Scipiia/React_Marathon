import React from 'react';
import Content from './components/ContentBlock/Content';
import Footer from './components/FooterBlock/Footer';
import HeaderBlock from "./components/HeaderBlock"


const App = () => {
  
  return (
    <React.Fragment>
      <HeaderBlock 
      title = "3 причины любить программирование"
      />
      
      <HeaderBlock 
      title = "3 причины ненавидеть программирование"
      hideBackground
      />

      <Content
      title = "3 причины идти работать на завод"
      />

      <Footer
      title = "Кто поидет к такому мальчику на завод, заполните анкету"
      />

      
    </React.Fragment>
  );
};


export default App;
