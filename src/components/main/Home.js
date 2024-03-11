import React, {Fragment, useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFoodList,fetchPage} from "../../actions/foodActions";
import Pagination from "react-js-pagination/src/components/Pagination";
function Home() {
    const [curpage,setCurpage]=useState(1)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFoodList(curpage)); // => foodAction
        dispatch(fetchPage())
    }, []); // useEffect를 한 번만 실행하도록 빈 의존성 배열을 전달합니다.

    // store에서 데이터 열기
    const foodList = useSelector((state) => state.foods.food_list);
    const total = useSelector((state) => state.foods.total);
    const handlePageChange=(page)=>{
        setCurpage(page)
    }
    const html = foodList.map((food) => (
        <div className="col-md-4" key={food.id}>
            <div className="thumbnail">
                <link to={"/food/food_detail/"+food.fno}>
                    <img src={'http://www.menupan.com' + food.poster} style={{ "width": "100%" }} alt={food.name} />
                    <div className="caption">
                        <p>{food.name}</p>
                    </div>
                </link>
            </div>
        </div>
    ));

    return (
        <Fragment>
        <div className="row">
            {html}
        </div>
            <div style={{"height":"20px"}}>
                <div className={"text-center"}>
                    <Pagination
                        activePage={curpage}
                        itemsCountPerPage={12}
                        totalItemsCount={total}
                        pageRangeDisplayed={10}
                        prevPageText={"<"}
                        nextPageText={">"}
                        onChange={handlePageChange()}
                    />
                </div>
            </div>
        </Fragment>
    );
}

export default Home;
