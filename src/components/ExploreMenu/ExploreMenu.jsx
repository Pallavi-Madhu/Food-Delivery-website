import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id="explore-menu">
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Explore our diverse menu crafted with the finest ingredients, offering a delightful fusion of flavors to tantalize your taste buds. Whether you're craving a hearty meal or a light snack, we have something special for everyone!</p>
        <div className='explore-menu-list'>
          {menu_list.map((item,index) => {
            return (
                <div onClick={()=> setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} key ={index} className="explore-menu-list-items">
                    <img className={category===item.menu_name?'active':""}src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
          })}  
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu
