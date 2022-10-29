import React from 'react';
import './Products.css'

// getting data as props
const Products = ({data}) => {
    return (

    <div className='block'>
    {/* getting each recipe  */}
        {data.map(data =>
            <div className='data_image'>
                <div id="images">
                    {/* recipe image */}
                <img src={data.recipe.image} alt=""/>
                </div>
                <div className='data_details'>
                    <center>
                        {/* recipe name  */}
                        <h5 className='label'>{data.recipe.label}</h5>
                        <p className='calories'>
                            Calories : {Math.round(data.recipe.calories)}
                        </p>
                        {/* button to buy  */}
                        <div className='btn-buy'>
                        <a href = "#" id="btn">Buy</a>
                        </div>
                    </center>
                </div>

            </div>)}
    </div>

    )
}
export default Products;