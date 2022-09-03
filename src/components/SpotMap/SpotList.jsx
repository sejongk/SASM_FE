import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import ItemCard from "./SpotList/ItemCard.js";
import SearchBar from "./SpotList/SearchBar.js";
import nothingIcon from "../../assets/img/nothing.svg";
import Pagination from "../common/Pagination";
import { useCookies } from "react-cookie";
import axios from "axios";
import Loading from "../common/Loading";

const SpotListSection = styled.div`
  // background-color: blue;
  position: relative;
  margin: 15px 0px 15px 15px;
  grid-area: spotlist;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const SearchFilterBar = styled.div`
  // background-color: red;
  width: 100%;
  min-height: 5%;
  border: 1px solid #99a0b0;
  box-sizing: border-box;
`;
const FilterOptions = styled.div`
  width: 100%;
  min-height: 25%;
  border-left: 1px solid #99a0b0;
  border-right: 1px solid #99a0b0;
  border-bottom: 1px solid #99a0b0;
  box-sizing: border-box;
`;
const NothingSearched = styled.div`
  // background-color: yellow;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;
const RecommendTitle = styled.div`
  width: 100%;
  min-height: 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #99a0b0;
  border-right: 1px solid #99a0b0;
  border-bottom: 1px solid #99a0b0;
  box-sizing: border-box;
`;
const SpotsWrapper = styled.div`
  // background-color: yellow;
  width: 100%;
  min-height: 30%;
  // height: 90%;
  overflow: auto;
  border-left: 1px solid #99a0b0;
  border-right: 1px solid #99a0b0;
  border-bottom: 1px solid #99a0b0;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
`;

const SpotList = (props) => {
  const totalCount = props.Itemcard.count;
  const Item = props.Itemcard.results;
  // console.log("Item", Item);
  const [item, setItem] = useState([]);
  const [searchedItems, setSearchedItems] = useState([...Item]);
  const [cookies, setCookie, removeCookie] = useCookies(["name"]);
  const [filterToggle, setFilterToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const token = cookies.name; // 쿠키에서 id 를 꺼내기
  const [loading, setLoading] = useState(true);

  const handleFilterToggle = () => {
    setFilterToggle(!filterToggle);
  };
  const handleSearchToggle = () => {
    setSearchToggle(true);
  };

  //현재 page data 요청
  const pagePlacelist = async () => {
    let newPage;
    if (page == 1) {
      newPage = null;
    } else {
      newPage = page;
    }
    //토큰 만료 or 없을 경우
    let headerValue;
    if (token === undefined) {
      headerValue = `No Auth`;
    } else {
      headerValue = `Bearer ${token}`;
    }
    setLoading(true);
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/places/place_list/",

        {
          params: {
            page: newPage,
          },

          headers: {
            Authorization: headerValue,
          },
        }
      );
      // console.log("data!!@", response);
      setItem(response.data.results);
      setLoading(false);
    } catch (err) {
      console.log("Error >>", err);
    }
  };

  // page가 변경될 때마다 page를 붙여서 api 요청하기
  useEffect(() => {
    pagePlacelist();
  }, [page]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <SpotListSection>
          <SearchFilterBar>
            <SearchBar
              handleFilterToggle={handleFilterToggle}
              handleSearchToggle={handleSearchToggle}
            />
          </SearchFilterBar>

          {filterToggle ? <FilterOptions></FilterOptions> : null}

          {searchToggle ? (
            <SpotsWrapper>
              {searchedItems.length === 0 ? (
                <NothingSearched>
                  <img src={nothingIcon} style={{ marginBottom: "10px" }} />
                  해당하는 장소가 없습니다!
                </NothingSearched>
              ) : (
                searchedItems.map((itemdata, index) => (
                  // 필요 정보 : 이미지,?, 카테고리, ?, 위치, 영업시간
                  <ItemCard
                    key={index}
                    ImageURL={itemdata.rep_pic}
                    StoreName={itemdata.StoreName}
                    StoreType={itemdata.StoreType}
                    OpeningHours={itemdata.OpeningHours}
                    Address={itemdata.Address}
                  />
                ))
              )}
            </SpotsWrapper>
          ) : (
            <></>
          )}

          <RecommendTitle>이런 장소는 어떠세요?</RecommendTitle>
          <SpotsWrapper>
            {item.map((itemdata, index) => {
              return (
                <ItemCard
                  key={index}
                  id={itemdata.id}
                  ImageURL={itemdata.rep_pic}
                  StoreName={itemdata.place_name}
                  StoreType={itemdata.category}
                  open_hours={itemdata.open_hours}
                  Address={itemdata.address}
                  place_review={itemdata.place_review}
                  place_like={itemdata.place_like}
                />
              );
            })}

            <Pagination
              total={totalCount}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </SpotsWrapper>
        </SpotListSection>
      )}
    </>
  );
};
export default SpotList;
