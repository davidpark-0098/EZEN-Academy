import React, { memo, useEffect, useState } from "react";
import axios from "axios";

import NewsList from "../components/NewsList";
import Spinner from "../components/Spinner";

const News = memo(() => {
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);

            let json = null;

            try {
                const response = await axios.get("/news");
                json = response.data;
            } catch (e) {
                console.error(e);
                alert(`데이터 요청에 실패하였습니다.\n${e.message}`);
                return;
            } finally {
                setLoading(false);
            }

            setNewsList(json);
        })();
    }, []);

    return (
        <div>
            <Spinner loading={loading} width={70} height={70} color={"#000000"} glassColor={"#ffffff"} />
            <NewsList news={newsList} />
        </div>
    );
});

export default News;
