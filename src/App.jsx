import { BrowserRouter, Route, Routes } from "react-router";
import ProductList from "./pages/ProductList.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

function App() {
    // 사용자의 주소를 읽어들여서
    // 주소와 컴포넌트의 매칭 처리를 하는 파일

    // 리액트는 주소를 읽어들이지 않음
    // BrowserRouter를 통해 사용자의 URl(주소)를 동기화(읽어드림)

    // 페이지가 여러 개로 늘러나면서 App의 최상단 컴포넌트는
    // 교통정리만 하는 파일이 되었음

    return (
        <BrowserRouter>
            <Routes>
                {
                    /*
                    Route의 path에는 무조건 string으로만 써쟈야 하고
                    element안에는 컴포넌트(화면단을 리턴하는 함수)가 들어가야 함

                    "/product/상품번호"
                     */
                }
                <Route path={"/"} element={<ProductList />} />
                <Route path={"/product/:id"} element={<ProductDetail />} />
                {
                    /*
                    path에 "/product/:id"라고 적게 되면,
                    사용자가 경로를 통해 화면을 요청할 때
                    경로의 첫째자리는 product이어야 하고,
                    두번째 자리는 아무 값이나 들어왔을 때,
                    그 '아무 값'을 id라는 이름으을 붙여서 저장해야 하고
                    <ProductDetail /> 컴포넌트를 실행해야 되는구나하고
                    react-router 는 생각함
                     */
                }
            </Routes>
        </BrowserRouter>
    );
}

export default App;
