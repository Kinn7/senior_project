import React from "react";

const Cart = (props) => {


// function handleChange(food){
//   props.food.filter(f => f!=food)
//     const f = props.food.filter(f => f!=food)
//     console.log(f)
    
//   }

  

    const foods = props.food.map((food,i) => (
        <li className="w-100 ps-5 " key={i} >
        <a href="#" className="nav-link px-0 text-dark" >
          <span className="d-none d-sm-inline text-dark" > {food}</span>
        </a>
        <div>
        <input type ="text" placeholder="add note here"/> <button onClick={() => {props.handleClick(food)} }>remove item</button> 
        </div>
      </li>
    ))


  
//      console.log(props.food)
    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-0 px-0  " style={{ backgroundColor : '#F5EEDC' }}>
        <div className="d-flex flex-column align-items-center align-items-sm-start px-0 pt-2 text-white min-vh-100">
               <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu" >
                    <li className="nav-item pt-5 " >
                      <span className="ms-5 d-none d-sm-inline  text-dark " style={{ fontStyle : "italic", fontWeight : "bold", fontSize : 32, fontFamily : 'pristina'  }}>your selections</span>
                    </li>
                    {/* <li className="w-100 ps-5 "  >
        <a href="#" className="nav-link px-0 text-dark" >
          <span className="d-none d-sm-inline text-dark" > {props.food}</span> 
        </a>
      </li> */}
      {foods}
                   
                  </ul>
                {/* <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu" >
                <span className=" d-none d-sm-inline text-dark ps-3  " style={{ fontSize : 37      }}>ABC  Restaurant</span>
  <li className="nav-item pt-5 " >
      <span className="ms-1 d-none d-sm-inline   text-dark " style={{ fontStyle : "italic", fontWeight : "bold", fontSize : 32, fontFamily : 'pristina'  }}>Foods</span>
  </li>
  <li>
    
    <ul style={{ backgroundColor : 'grey'  }}
      className="collapse show nav flex-column ms-1"
      id="submenu1"
      data-bs-parent="#menu"
    >
      <li className="w-100 ">
        <a href="#" className="nav-link px-0 text-dark">
          {" "}
          <span className="d-none d-sm-inline">Pasta Corner</span> 
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-0 text-dark">
          {" "}
          <span className="d-none d-sm-inline">Traditional</span> 
        </a>
      </li>
    </ul>
  </li>

  <li>

    <ul
      className="collapse nav flex-column ms-1"
      id="submenu2"
      data-bs-parent="#menu"
    >
      <li className="w-100">
        <a href="#" className="nav-link px-0">
          {" "}
          <span className="d-none d-sm-inline">Item</span> 1
        </a>
      </li>
      <li>
        <a href="#" className="nav-link px-0">
          {" "}
          <span className="d-none d-sm-inline">Item</span> 2
        </a>
      </li>
    </ul>
  </li>
</ul> */}
<hr />

</div>
</div> 
  
    )
}

export default Cart