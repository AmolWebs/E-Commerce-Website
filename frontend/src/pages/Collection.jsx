import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {
    let fpCopy = [...filterProducts];

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products])

  useEffect(() => {
    sortProduct();
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t' >
      {/* filter options */}
      <div className='min-w-60' >
        <p onClick={() => { setShowFilter(!showFilter) }} className='my-2 text-xl flex items-center cursor-pointer gap-2' >FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* category filter  */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`} >
          <p className='mb-3 text-sm font-medium' >COLORS</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700' >

            {/* <p className='flex gap-2' >
              <label className="cursor-pointer w-[30%] ">
                <input
                  type="checkbox"
                  value="Red"
                  onClick={toggleCategory}
                  className="hidden"
                />

                <div className={ `bg-red-500 w-[100%] h-5 rounded-full text-white font-medium text-center ${category.includes('Red') ? " text-black " : ""}`}>Red</div>
              </label>

            </p> */}
            <label className={`flex items-center gap-3 border-2 rounded-md  p-2  w-1/2 cursor-pointer ${category.includes('Red') ? " border-black " : ""} ` }>
              <div className='h-8 w-9 rounded-md bg-red-500' >

              </div>
              <input
                  type="checkbox"
                  value="Red"
                  onClick={toggleCategory}
                  className="hidden" // Hides the checkbox
                />
              <div className={ `h-5 rounded-full  font-medium text-center}`}>Red</div>
            </label>
            <label className={`flex items-center gap-3 border-2 rounded-md  p-2  w-1/2 cursor-pointer ${category.includes('Green') ? " border-black " : ""} ` }>
              <div className='h-8 w-9 rounded-md bg-green-500' >

              </div>
              <input
                  type="checkbox"
                  value="Green"
                  onClick={toggleCategory}
                  className="hidden" // Hides the checkbox
                />
              <div className={ `h-5 rounded-full  font-medium text-center`}>Green</div>
            </label>
            <label className={`flex items-center gap-3 border-2 rounded-md  p-2  w-1/2 cursor-pointer ${category.includes('Pink') ? " border-black " : ""} ` }>
              <div className='h-8 w-9 rounded-md bg-pink-500' >

              </div>
              <input
                  type="checkbox"
                  value="Pink"
                  onClick={toggleCategory}
                  className="hidden" // Hides the checkbox
                />
              <div className={ `h-5 rounded-full  font-medium text-center`}>Pink</div>
            </label>
          </div>
        </div>
        {/* subcategory filter   */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`} >
          <p className='mb-3 text-sm font-medium' >TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700' >
            <label className='cursor-pointer flex gap-2' >
              <input className='w-3' type="checkbox" value={'Potli'} onClick={toggleSubCategory} /> Potli
            </label>
            <label className='cursor-pointer flex gap-2' >
              <input className='w-3' type="checkbox" value={'Clutch'} onClick={toggleSubCategory} /> Clutch
            </label>
          </div>
        </div>
      </div>

      {/* Right Side   */}
      <div className='flex-1' >
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Sort   */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low </option>
          </select>
        </div>
        {/* Map Products  */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
