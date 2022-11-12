import React, { memo, useEffect, useRef } from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// 무한스크롤
import { useInView } from "react-intersection-observer";

// hooks
import { useQueryString } from "../hooks/useQueryString";

// components
import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import SearchForm from "../components/SearchForm";
import ImageList from "../components/ImageList";
import ImageView from "../components/ImageView";

// slice
import { getKakaoSearch } from "../slices/ImageSearchSlice";

const ImageSearch = memo(() => {
  const { query } = useQueryString();

  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.ImageSearchSlice);

  // 무한스크롤 inView는 스크롤이 끝인지 알려주는 true, false boolean값이다.
  const [isEnd, inView] = useInView();

  // 무한스크롤 페이지 이동
  const navigate = useNavigate();
  const page = useRef(1);

  // 검색 데이터 요청
  useEffect(() => {
    if (query) {
      page.current = 1;
      dispatch(
        getKakaoSearch({
          query: query,
          page: page.current
        })
      );
      window.scrollTo(0, 0);
    }
  }, [query]);

  // 무한스크롤 페이지 갱신
  useEffect(() => {
    if (!data?.meta?.isEnd && !loading && inView) {
      console.log("스크롤이 맨 끝에 도착하였습니다.");

      page.current++;

      dispatch(
        getKakaoSearch({
          query: query,
          page: page.current
        })
      );
      navigate(`${window.location.pathname}?query=${query}&page=${page.current}`);
    }
  }, [inView]);

  return (
    <div>
      <Spinner loading={loading} />
      <SearchForm />

      {error ? (
        <ErrorView error={error} />
      ) : (
        query &&
        data && (
          <ImageList>
            {data.documents.map(({ doc_url, image_url, thumbnail_url, display_sitename, collection, width, height, datetime }, i) => {
              return (
                // 무한스크롤 속성값
                <li className="list-item" key={i} {...(!data?.meta.isEnd && !loading && data.documents.length - 1 === i ? { ref: isEnd } : {})}>
                  <a className="list-item-link" href={doc_url} target="_blank" rel="noreferrer">
                    <div className="thumbnail">
                      <ImageView src={thumbnail_url} alt={display_sitename} />
                    </div>
                    <div className="content">
                      <h3>{display_sitename}</h3>
                      <ul>
                        <li>{collection}</li>
                        <li>
                          이미지 크기: {width}x{height}
                        </li>
                        <li>{dayjs(datetime).format("YYYY-MM-DD hh:mm")}</li>
                      </ul>
                    </div>
                  </a>
                </li>
              );
            })}
          </ImageList>
        )
      )}
    </div>
  );
});

export default ImageSearch;
