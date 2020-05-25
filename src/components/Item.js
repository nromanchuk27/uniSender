import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions/index";
import { isEmpty } from "lodash";

const Item = () => {
  const dispatch = useDispatch();
  const { dataItem, dataError } = useSelector(state => state.main);

  useEffect(() => {
    const str = window.location.href;
    let pos = -1;
    const target = "/";
    let id = "";
    while ((pos = str.indexOf(target, pos + 1)) !== -1) {
      id = str.slice(pos + 1);
    }
    dispatch(getData(id));
  }, []);

  if (isEmpty(dataItem) && dataError) {
    return <div className="unisender__error">Data not recieved</div>;
  }

  const getTime = isoDate => {
    const d = new Date(isoDate);
    return "From " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
  };
  return (
    <div className="unisender">
      <div className="unisender__container">
        {
          <div className="unisender__item" key={dataItem.node_id}>
            <div className="unisender__item-content">
              <div className="unisender__item-logo">
                <picture>
                  <img
                    src={
                      dataItem.avatar_url ||
                      "https://pwcenter.org/sites/default/files/default_images/default_profile.png"
                    }
                    alt="avatar"
                  />
                </picture>
              </div>
              <div className="unisender__additional">
                <div className="unisender__item-name">{dataItem.name}</div>
                {dataItem.company ? (
                  <div className="unisender__item-company">{dataItem.company}</div>
                ) : null}
                {dataItem.created_at ? (
                  <div className="unisender__item-from">{getTime(dataItem.created_at)}</div>
                ) : null}
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Item;
