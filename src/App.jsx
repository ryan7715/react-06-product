import { BrowserRouter, Route, Routes } from "react-router";
import ProductList from "./pages/ProductList.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

function App() {
    // 페이지가 여러 개로 늘러나면서 App의 최상단 컴포넌트는
    // 교통정리만 하는 파일이 되었음

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<ProductList />} />
                <Route path={"/product/:id"} element={<ProductDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
