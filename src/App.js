import React from "react";
import Todo from "./components/Pages/Todo/Todo";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
const App = () => {
  return (
    <div id="site-container">
      <Header />
      <main id="main-content">
        <Todo></Todo>
      </main>
      <Footer />
    </div>
  );
};
export default App;

/*
import React, { Fragment, createContext, useContext, useState } from "react";
import "./App.css";
const AppContext = createContext("hhhhhh");

const HeaderInner = () => {
  const [appcontext, changeTheme] = useContext(AppContext);

  return (
    <Fragment>
      Header Inner {appcontext.color}
      <button
        onClick={() => {
          const newColor = appcontext.color === "light" ? "dark" : "light";
          changeTheme({ ...appcontext, color: newColor });
        }}
      >
        Change Name
      </button>
    </Fragment>
  );
};

const Header = (props) => {
  return (
    <div>
      <HeaderInner></HeaderInner>
    </div>
  );
};

const App = () => {
  const themeHook = useState({ color: "light" });

  return (
    <AppContext.Provider value={themeHook}>
      <Fragment>
        <AppContext.Consumer>
          {(a) => <Header>{a[0].color}</Header>}
        </AppContext.Consumer>
      </Fragment>
    </AppContext.Provider>
  );
};
export default App;
*/

// ==================================================================================
/*


import React, { Fragment, createContext, useContext, useState } from "react";
import "./App.css";
const AppContext = createContext();

const HeaderInner = () => {
  const appcontext = useContext(AppContext);
  return (
    <Fragment>
      Header Inner {appcontext.theme}
      <button
        onClick={() =>
          appcontext.changeName(appcontext.theme === "light" ? "dark" : "light")
        }
      >
        Change Name
      </button>
    </Fragment>
  );
};

const Header = () => {
  return (
    <div>
      <HeaderInner></HeaderInner>
    </div>
  );
};

const App = () => {
  const [state, SetState] = useState({ theme: "light" });
  const changeName = (name) => {
    SetState({ ...state, theme: name });
  };

  return (
    <AppContext.Provider value={{ theme: state.theme, changeName }}>
      <Fragment>
        <AppContext.Consumer>
          {(a) => (
            <div className={a.theme}>
              <Header></Header>
            </div>
          )}
        </AppContext.Consumer>
      </Fragment>
    </AppContext.Provider>
  );
};
export default App;
*/
