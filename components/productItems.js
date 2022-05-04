import Link from 'next/link'


import React from 'react';

const ProductItems = ({product}) => {
    return (
       <>
           {
               product && product.map((product, index) => (

                   <div className='mb-5 block rounded-lg border Iborder-gray-200 shadow-md' key={index}>
                       <Link href={`/product/${product.slug}`}>
                           <a>
                               <img
                                   src={product.image}
                                   alt={product.name}
                                   className='rounded shadow'
                               />
                           </a>
                       </Link>
                       <div className='flex flex-col items-center justify-center'>
                           <Link href={`/product/${product.slug}`}>
                               <a><h2 className='text-lg'>{product.name}</h2></a>
                           </Link>
                           <p className='mb-2'>{product.brand}</p>
                           <p className='mb-2'>${product.price}</p>
                           <button className='rounded bg-amber-300 py-2 px-4 shadow outline-none hover:bg-amber-400 active:bg-amber-500' type='button'>
                               Add to Cart
                           </button>

                       </div>

                   </div>

               ))
           }
       </>

    );
};

export default ProductItems;

