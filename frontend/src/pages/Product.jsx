import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'
import ReactImageMagnify from 'react-image-magnify';

const Product = () => {
  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('')

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProductData();
  }, [productId, products]);
  


  const itemBoxColor = (i) => {
    const colors = {
      S: 'bg-red-500',
      M: 'bg-blue-500',
      L: 'bg-green-500',
      XL: 'bg-violet-500',
      XXL: 'bg-orange-500'
    };

    return colors[i] || 'bg-red-500'; // Default color if not found
  };


  // const itemColor = (i) => {
  //   let c;
  //   if (i === 'S') {
  //     c = 'Red'
  //   }
  //   else if (i === 'M') {
  //     c = 'Blue'
  //   }

  //   else if (i === 'L') {
  //     c = 'Green'
  //   }
  //   else if (i === 'XL') {
  //     c = 'Violet'
  //   }

  //   else if (i === 'XXL') {
  //     c = 'Orange'
  //   }
  //   else {
  //     c = 'Red'
  //   }
  //   return c;
  // }

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100' >
      {/* product Data   */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row' >
        {/* product images   */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row' >
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full' >
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink cursor-pointer' alt="" />
              ))
            }

          </div>
          {/* <div className='w-full sm:w-[80%]' >
            <img className='w-full h-auto' src={image} alt="" />
          </div> */}

          <div>
          <div>
                    <ReactImageMagnify {...{
                         smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: image,
                            // srcSet: this.srcSet,
                            sizes: '(max-width: 480px) 0vw, (max-width: 1200px) 30vw, 360px'
                        },
                        largeImage: {
                            src: image,
                            width: 2000,
                            height: 2000
                        },
                        enlargedImageContainerDimensions: window.innerWidth <= 768 ? { width: "0%", height: "0%" } : { width: "200%", height: "100%" },
                    }} />
                </div>
          </div>

        </div>
        {/* prduct info */}
        <div className="flex-1">
          <h1 className='font-medium text-2xl mt-2' >{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2' >
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2' >(122)</p>

          </div>
          <p className='mt-5 text-3xl font-medium' >{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5' >{productData.description}</p>
          <div className='flex flex-col gap-4 my-8' >
            <p>Select Color</p>
            <div className='flex gap-2' >
              {productData.sizes.map((item, index) => (
                <button style={{ backgroundColor: item }} onClick={() => setSize(item)} className={`text-white py-2 px-4 border-2 rounded-md  ${item === size ? 'border-gray-700' : ''}`} key={index} >{
                  item
                }</button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm rounded active:scale-50'>
          ADD TO CART
          

          </button>
          <hr className='mt-8 sm:w-4/5 ' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1' >
            <p>100% Original Product</p>
            <p>Cash on delivery available on this product.</p>
            <p>Easy return and exchange policy within 7 days</p>

          </div>

        </div>
      </div>
      {/* description and review section  */}
      <div className='mt-20' >
        <div className="flex">
          <b className='border px-5 py-3 text-sm' >Description</b>
          
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quis natus quas quam labore. Ducimus aliquid beatae minima, eos enim corporis expedita ullam dolores sunt quo accusantium dolorum ex. Natus!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis perferendis architecto ipsa possimus recusandae hic.</p>

        </div>
      </div>
      {/* display related products  */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='opacity-0' ></div>
}

export default Product