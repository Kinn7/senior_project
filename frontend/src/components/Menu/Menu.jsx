import React , { useState , useEffect} from "react";
import Categories from "./Categories";
import Cards from "./Cards";
import Cart from "./Cart";


const Menu = () => {
    //category state to set in the sidebar
    const [category , setCategory] = useState([{

    }])

    //menuItem state to set it in the middle of the page to get food lists i.e get's list of food from categoryId
    const [menuItem, setMenuItem] = useState([{}])

    //foodId state to change re render cards component when clicking on the different categories
    const [foodId, setFoodId] = useState(0)


    //this function accepts id of category from Categories component and passed it to setFoodId to set foodId state
    function getMenuItem(id){
        setFoodId(id) //setting foodId will trigger useEffect and re-render the component of Cards.jx to get the food items
    }


    //this useEffect runs to get api of food items based on category id 
    useEffect(() => {
       console.log('use effect run')
        fetch(`http://localhost:3000/api/menuitem/Category/${foodId}`)
        .then(res => res.json())
        .then(data => setMenuItem(data.menuitem))
    },[foodId])
  
    //this useEffect runs to get the category from api and use it in the sidebar 
    useEffect(() => {
      fetch("http://localhost:3000/api/category")
        .then(res => res.json())
        .then(data => setCategory(data.category))
    },[])







 
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">

                {/* Categories  component passes two properties category to iterate the categories from api and handleClick to get id of the category from the Categories component*/}
                <Categories category = {category} handleClick={getMenuItem}/>
              
                {/* Cards component that passes property of menuItem to iterate the foodLists in the Cards component */}
                <Cards menuItem = {menuItem} />

                {/* Cart Component */}
                <Cart />
                
            </div>
        </div>
    )
}

export default Menu