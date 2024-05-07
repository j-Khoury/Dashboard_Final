'use client'

import SigninForm from '@/components/forms/signin/SigninForm'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table'
import { TrashIcon } from '@radix-ui/react-icons'

const page = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Arabica Blend',
      image: '/assets/images/arabica.jpg',
      description: 'A rich, smooth blend of premium Arabica beans.',
      price: '$12.99',
      inventory: '500 in stock',
    },
    {
      id: 2,
      name: 'Roasted Espresso',
      image: '/assets/images/espresso.jpg',
      description:
        'A bold, intense espresso blend with notes of dark chocolate.',
      price: '$14.99',
      inventory: '300 in stock',
    },
    {
      id: 3,
      name: 'Decaf Blend',
      image: '/assets/images/decaf.jpg',
      description:
        'A smooth, decaffeinated blend with a balanced flavor profile.',
      price: '$10.99',
      inventory: '400 in stock',
    },
  ])

  const addProduct = () => {
    // Create a new product object with dummy data
    const newProduct = {
      id: products.length + 1, // Generate unique ID
      name: 'New Product',
      image: '/assets/images/placeholder.jpg',
      description: 'A new product added dynamically.',
      price: '$9.99',
      inventory: '100 in stock',
    }

    // Update the products state with the new product
    setProducts([...products, newProduct])
  }

  const deleteProduct = (id: number) => {
    // Filter out the product with the specified ID
    const updatedProducts = products.filter((product) => product.id !== id)
    // Update the products state with the filtered products
    setProducts(updatedProducts)
  }

  return (
    // <div className="w-screen h-screen flex flex-col bg-primary items-center justify-center">
    <>
      {/* <SigninForm /> */}
      <div className="flex flex-col min-h-screen">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Products</h1>
            <Button className="ml-auto" onClick={addProduct} size="sm">
              Add product
            </Button>
          </div>
          <div className="border bg-secondary shadow-sm rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Image</TableHead>
                  <TableHead className="max-w-[150px]">Name</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Description
                  </TableHead>
                  <TableHead className="hidden md:table-cell">Price</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Inventory
                  </TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <img
                        alt="Product image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src={product.image}
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {product.description}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {product.price}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {product.inventory}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          className="text-red-500"
                          size="icon"
                          variant="outline"
                          onClick={() => deleteProduct(product.id)}
                        >
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </>
  )
}

export default page
