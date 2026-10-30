import { useParams } from "react-router";

function ProductDetail() {
    // 사용자가 "저 상품 상세 내용을 보고 싶어"를 요청한 상황
    // 벡엔드에게 "저 상품"의 상세 내용을 받아야 함
    // "저 상품" 예를 들어 4번 상품이라고 한 정보는 "경로"에 있음

    const { id } = useParams(); // 경로상 동적 라우팅의 값을 react-router가 갖고 있고 그 정보를 받아와야 함

    // 4라는, 사용자가 원하는 상품 번호를 알아왔으니까
    // 벡엔드에게 4번 상품 정보를 요청, 가공, 저장
    //화면에 출력

    // 직접 구현

    return (
        <>
            <div>eeee</div>
        </>
    );
}

export default ProductDetail;
