
import Product from './components/Product';
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
    return (
        <div className="App">
            <div></div>
            <navbar></navbar>

            <BrowserRouter>
                <Routes>
                    <Route path="/product/:id" element={<Product/>} />
                    <Route path="/product-detail/:id?" element={<Product/>} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
