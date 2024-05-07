import SigninForm from '@/components/forms/signin/SigninForm'
import Image from 'next/image'
import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { MdStackedLineChart } from 'react-icons/md'
import { PieChartIcon } from '@radix-ui/react-icons'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const page = () => {
  return (
    // <div className="w-screen h-screen flex flex-col bg-primary items-center justify-center">
    <>
      {/* <SigninForm /> */}
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 p-4 md:p-6 grid gap-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Total Sales</CardTitle>$
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$145,231</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  +12% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Orders</CardTitle>$
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2,345</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  +8% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Average Order Value</CardTitle>$
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$62.00</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  +5% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Top Selling Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div>Espresso Beans</div>
                    <div className="font-semibold">1,234</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>Drip Coffee Maker</div>
                    <div className="font-semibold">987</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>Latte Cups</div>
                    <div className="font-semibold">765</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sales Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <MdStackedLineChart className="aspect-[16/9]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customer Demographics</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChartIcon className="aspect-[16/9]" />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  )
}

export default page
