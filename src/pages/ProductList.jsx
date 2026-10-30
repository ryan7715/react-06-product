import { useEffect, useState } from "react";


function ProductList() {
    // 사용자가 "/"로 주소로 들어왔을 때 뜨는 컴포넌트 => 사용자가 목록을 보고 싶어하는 상황
    // 목록을 띄어주기 위해 목록 데이터를 백엔드에게 요청
    // 받아 와서 가공하고 state에 저장한 뒤
    // 화면에 띄우면 됨


    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=12")
            .then((res) => { return res.json() }) // string -> 객체 / 배열 상태로 가공
            .then(json => {
                setList(json.products);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, []);


    if (loading) {
        return <div>LOADING...</div>
    }

    // loading은 끝났고 (false),
    // 백엔드에게 받아온 데이터가 정상적으로 list에 자장된 경우
    // fetch 중간에 에러가 있어서 List에 저장이 안 된 경우

    if (List.length === 0) {
        return <div>상품을 찾을 수 없거나, 오류가 발생되었습니다.</div>
    }

    return (
        <div>
            <h1>상품 목록</h1>
            <div>
                {List.map((item) => {
                    return (
                        <div key={item.id}>
                            <img
                                src={item.thumbnail}
                                alt={item.title} />
                            <div>
                                <h3>{item.title}</h3>
                                <p>${item.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default ProductList;
