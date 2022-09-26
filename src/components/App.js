import React, { useState } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";

/*
Client Side Routing
- URLs
- REST - REpresentation State Transfer

npm install react-router-dom
https://reactrouter.com/web/guides/quick-start
*/

function App() {
    const [page, setPage] = useState("/")
    
    function getCurrentPage() {
        switch(page) {
            case "/":
                return <Home />
            case "/about":
                return <About />
            case "/projects":
                return <ProjectList />
            default:
                return <h1>404 not found</h1>
        }
    }
    
    return (
        <div>
            <NavBar onChangePage={setPage} />
            {getCurrentPage()}
        </div>
    );
}

export default App;