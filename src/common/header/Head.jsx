import React from 'react';
import './Header.css';

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
            <div className="left row">
                <i className="fa fa-phone"></i>
                <label htmlFor="">+2347069981779</label>
                <i className="fa fa-envelope"></i>
                <label htmlFor="">chinonsochibuzor5@gmail.com</label>
            </div>

            <div className="right row RText">
            <span>🏳️‍⚧️</span>
            <label htmlFor="">EN</label>
            <span>🏳️‍⚧️</span>
            <label htmlFor="">USD</label>
            </div>
        </div>
      </section>
    </>
  )
}

export default Head
