"use client"
import React, { useEffect, useState } from 'react';
import Card from '../../components/card';
import { getAllProducts } from '../../fetch/productsList';
import { getAllcategories } from '../../fetch/categoryList';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProducts();
        const updatedProducts = await fetchProductAssets(productsData);
        setProducts(updatedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const categoriesData = await getAllcategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProductAssets = async (productsData) => {
    const updatedProducts = [];
    for (const product of productsData) {
      try {
        const asset = await fetchAsset(product.Image.asset._ref, productsData);
        const updatedProduct = {
          ...product,
          Image: {
            ...product.Image,
            asset: asset
          }
        };
        updatedProducts.push(updatedProduct);
      } catch (error) {
        console.error(error);
        updatedProducts.push(product);
      }
    }
    return updatedProducts;
  };

  const fetchAsset = async (ref, assetData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (assetData[ref]) {
          resolve(assetData[ref]);
        } else {
          reject(new Error(`Asset not found for reference ID: ${ref}`));
        }
      }, 1000);
    });
  };
  const getCategoryNameById = (categoryId) => {
    const category = categories.find((cat) => cat.Category_ID === categoryId);
    return category ? category.Name : '';
  };

  const productsByCategory = products.reduce((acc, product) => {
    const { Product_Category } = product;
    if (!acc[Product_Category]) {
      acc[Product_Category] = [];
    }
    acc[Product_Category].push(product);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(productsByCategory).map((category, index) => (
        <section key={index}>
          <h2>{getCategoryNameById(category)}</h2>
          <div className="grid grid-cols-3 gap-4 mx-8">
            {productsByCategory[category].slice(0, 3).map((product, index) => (
              <Card key={index} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductPage;
