import React from "react"
import Dcard from "./Dcard"

const Discount = () => {
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAZlBMVEX///8AAADk5OQ3Nzf39/dmZmakpKRAQEDq6upra2vQ0NAcHBzMzMz6+vrV1dVvb2/d3d2dnZ1dXV0LCwvw8PAhISGXl5e6urqCgoJXV1eOjo4sLCyzs7Oqqqp0dHRGRkZPT08UFBSe6fkeAAADu0lEQVRoge2ba7eqIBCG827eTdTUsvz/f/J0AlR0ALU6a5215v3UBoYnmBlAcp9OGkW50xlFeWmjWNf0rThqL2VhdE4ebWovFalCY9TQ+loDvx0mg7Iix9F1aQgKc41BHooGZX2QHF+NlRrVSEizNrhu89QSfV739Bp6IDUIQsjgfASeQj29dJO0v0nap/vRObe1qsj0E3eazxZs305+cRPfjCqL/60LkpV8ZjhFS+SNPgTaj7Hhjak1Rqo+PUSxGX/O7OJWDh/R7cy9/vPQrBM2ajGsa9m0j99KzCnCRr4vzZm3k0VxVjBGJRRXrLTIFu2TIx6/vG0uq3LC4e6s0OXo9fhk/Shk086AFZnw8J1mlyeXBUxtRKvsHWwa5SHkJ5/BC+6PgE2FBYUzCXdHevC26MA6sxPikMeTZYKtaWP5YrhWpGDzAGJevLC/lmEmsPdsp4mKzZ1o3F+f74Y0NGbsZb6oRNN7kLnJHceazb4GJHN4V+9JcJs6UbZtnHpKfNoP+kG6ctEcKPfE+Ynun56sOmZMtmh60n3SU381UCxnpQPn8Wao3anrBlSsjt7ZFmsolkweDTuPD2x3KGSZyWf9pYesa77qwBu+QnzhvkqCfZp1yYwTvq8We9FjEr8iBR67w6odsDboR/sD5/SZR602WWcJH/h62HbSWpPx7iPTX1XGTF5fmws+XQMWi59t1r03NxR3+s1anjwfaRURm0VWTGi0PQgvsElUpY+Fzb70mokfuARZjdP3adONBV2T9r3TWEDb595j4lyBA/S4Vc72rdNOgpWSpAYedDbpWSdQh9DSTtoO7KIYDrKHAizu2tWm5i+D5Hd6LIMAiqpf6Smia73FFyU+QcgeOn8jcT+ncWZ5ShXKRjS/C3UXtJG4FtJjdBTbCrHHggxuFNPN2iKqLmK6Q4UQW5X+J5uy4XP461hI2eqjGbKRjWxkIxvZyP42W3MdtImt7iIB2PS5rknPKg0b2IOyh5Q+aJSCIb+h2yA1e5PEu9273uCLbPE2Lh7+IXtYXNAkepOvsVchnW11+afsC3Rvlt3YLeDdBZWXG9hlDhvf6ZOPd8skN2L0JlN2L/tZftNoPsuq2bWVK6n9bF2jd8/whRiykY1sZCMb2chGNrKRjWxkIxvZyEY2spGNbGQjG9nIRvb/wY43sWUvRm9j58QHZVJ2ANf69H8zLBOuJbmGPb2//Cv1UvaOX2QPSvrb28mHXyn9ngrFO8K53vwjKd8Hr/T2H0jzPnh2LfV9HFJ5Xf4A/Ac26kSRIDCf/AAAAABJRU5ErkJggg==' />
              <h2>Big Discounts</h2>
            </div>
            <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  )
}

export default Discount
