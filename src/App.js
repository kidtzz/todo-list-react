import "./css/App.css";

import Header from "./components/header";
// import Main from "./components/main";
import AddAcitivites from "./components/AddActivities";

function App() {
    return (
        <div className="App">
            <Header />
            <AddAcitivites />
            {/* <Routes>
                <Header />
                <Route path="/">
                    <AddAcitivites />
                    <Main />
                </Route>
            </Routes> */}
        </div>
    );
}

export default App;
