import {Routes, Route, BrowserRouter} from "react-router-dom";
import Test from "./pages/Home/test/test.tsx";

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/test' element={<Test/>}/>
            </Routes>
        </BrowserRouter>
    );
}


export default App;