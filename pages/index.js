import React from 'react';
import Layout from "../components/layout";
import ProductItems from "../components/productItems"
import data from "../utils/data"

export default function Home() {
    const {products} = data
  return (
    <Layout>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-çols-4">
            <ProductItems product={products}/>
        </div>

    </Layout>
  )
}
