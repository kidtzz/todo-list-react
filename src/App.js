import "../src/css/App.css";

import Header from "./components/header";
// import Main from "./components/main";
import AddAcitivites from "./components/AddActivities";

function App() {
    return (
        <div className="App">
            <Header />
            {/* <Main /> */}
            <AddAcitivites />
        </div>
    );
}

export default App;
