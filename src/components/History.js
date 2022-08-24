import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const History = (props) => {
  useEffect(() => {
    let amounts = [];
    props.item.map((e) => {
      amounts = [...amounts, parseFloat(e.amount)];
    });
    props.calc(amounts);
  }, [props.item]);

  return (
    <div className="history">
      <h2>History</h2>
      {props.item == "" ? (
        <p>There is no item.</p>
      ) : (
        props.item.map((e) => {
          return (
            <div
              key={e.id}
              className="item"
              style={{
                borderColor: e.amount < 0 ? "red" : "",
              }}>
              <div className="title-container">
                <p>
                  <FaTimes
                    className="x-mark"
                    onClick={() => props.delete(e.id)}
                  />
                </p>
                <p>{e.title}</p>
              </div>
              <p>${e.amount}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default History;
