import React from "react";

function PlaceOrder() {
  return (
    <div>
      <form action="">
       <div> <div>
          <p>title deleinfo</p>
          <p></p>
        </div>
        <div>
          <input type="text" placeholder="firstname" />
          <input type="text" placeholder="last name" />
        </div>
        <div>
          <input type="email" placeholder="email" />
          <input type="text" placeholder="street" />
        </div>
        <div>
          <input type="text" placeholder="city" />
          <input type="text" placeholder="state" />
        </div>
        <input type="text" placeholder="phone" /></div>
        <div>
          <p>cartTotal</p>
        </div>

        <button>procced to payment</button>
      </form>
    </div>
  );
}

export default PlaceOrder;
