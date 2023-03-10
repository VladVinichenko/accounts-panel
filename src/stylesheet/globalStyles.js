import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html {
  overflow: overlay;
  scrollbar-width: thin;
  
  -webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }
  -webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 10px;
  }

  -webkit-scrollbar-track {
    background: transparent;
  }
  -webkit-scrollbar-button {
    display: none;
  }
  
}

body {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin: 0;
  background-color: rgb(20,20,30);

}



* {
  box-sizing: border-box;
  font-family: 'Circe', sans-serif;
  
  &::before, &::after {
    box-sizing: border-box;
  }
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}


p {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  text-transform: none;
  color: inherit;
  transition: .3s linear;
}

button {
  cursor: pointer;
}



`
