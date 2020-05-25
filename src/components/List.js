import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions/index";
import { v4 as uuidv4 } from "uuid";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";

const List = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const { data, dataError } = useSelector(state => state.main);

  useEffect(() => {
    if (isEmpty(data)) dispatch(getData());
  }, []);

  const handlePageChange = page => {
    setCount(page * 5);
  };

  const Pagination = () => {
    const arr = Array(Math.ceil(data.length / 5)).fill(1);

    const createClassName = i => {
      const active = count / 5 === i ? " active" : "";
      const name = "unisender__pagination-item";
      return name + active;
    };

    return (
      <div className="unisender__pagination">
        {arr.map((it, i) => (
          <div className={createClassName(i)} onClick={() => handlePageChange(i)} key={uuidv4()}>
            {i + 1}
          </div>
        ))}
      </div>
    );
  };

  if (isEmpty(data) && dataError) {
    return <div className="unisender__error">Data not recieved</div>;
  }

  return (
    <div className="unisender">
      <div className="unisender__container">
        {data.slice(count, count + 5).map(item => (
          <div className="unisender__item" key={item.node_id}>
            <div className="unisender__item-content">
              <div className="unisender__item-logo">
                <Link className="unisender__item-name" to={`/${item.login}`}>
                  <picture>
                    <img
                      src={
                        item.avatar_url ||
                        "https://pwcenter.org/sites/default/files/default_images/default_profile.png"
                      }
                      alt="avatar"
                    />
                  </picture>
                </Link>
              </div>
              <div className="unisender__additional">
                <Link className="unisender__item-name" to={`/${item.login}`}>
                  {item.login}
                </Link>
              </div>
            </div>
            <a href={item.html_url} className="unisender__item-button">
              Кнопка
            </a>
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default List;
