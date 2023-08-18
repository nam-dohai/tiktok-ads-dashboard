'use client';

import { Tab } from '@headlessui/react';
import { Card, Metric, Text, Title, BarList, Flex, Grid, Table, TableHeaderCell, TableBody, TableHead, TableRow, TableCell, Bold } from '@tremor/react';
import Image from 'next/image';
// import Chart from './chart';

const website = [
  { name: '/home', value: 1230 },
  { name: '/contact', value: 751 },
  { name: '/gallery', value: 471 },
  { name: '/august-discount-offer', value: 280 },
  { name: '/case-studies', value: 78 }
];

const shop = [
  { name: '/home', value: 453 },
  { name: '/imprint', value: 351 },
  { name: '/shop', value: 271 },
  { name: '/pricing', value: 191 }
];

const app = [
  { name: '/shop', value: 789 },
  { name: '/product-features', value: 676 },
  { name: '/about', value: 564 },
  { name: '/login', value: 234 },
  { name: '/downloads', value: 191 }
];

const tabs = [
  {
    title: 'Top Sales Products',
  },
  {
    title: 'Hot Products',
  },
  {
    title: 'New Products',
  }
];

const countries = [
  {
    name: 'Vietnam',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png',
  },
  {
    name: 'Indonesia',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg',
  },
  {
    name: 'Thailand',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg',
  },
]

const categories = [
  {
    title: "All",
  },
  {
    title: "Home supplies",
  },
  {
    title: "Kitchenware",
  },
  {
    title: "Household Appliances",
  },
  {
    title: "Womenswear & Underwear",
  },
]

const times = [
  {
    code: "24H",
    title: "1 Day"
  },
  {
    code: "1W",
    title: "Weekly"
  },
  {
    code: "1M",
    title: "Monthly"
  },
  
]

const products = [
  {
    rank: 1,
    title: "65% Off - Blursh Liquid Blush",
    image_url: "https://t-img.picturehaven.net/product/709e9639-5ee8-487d-b251-8bcef04d3544-20230723.jpeg",
    price: 6.36,
    sale: '8.2K',
    revenue: '52.10K',
  },
  {
    rank: 2,
    title: "Blursh Lights - Liquid Blusher/Highlighter",
    image_url: "https://t-img.picturehaven.net/product/63c0922e-5e18-468a-ad6c-e1d7266be8f8-20230715.jpeg",
    price: 12.72,
    sale: '2.9K',
    revenue: '37.16K',
  },
  {
    rank: 3,
    title: "1 Piece Ice Cube Tray with Lid, Reusable Ice Tray, Round Ice Ball Maker Mold",
    image_url: "https://t-img.picturehaven.net/product/5e3050cc-b393-41d1-b7f9-c7d7892d319c-20230731.jpeg",
    price: 1.87,
    sale: '2.6K',
    revenue: '4.77K',
  },
  {
    rank: 4,
    title: "Cluster Lashes Kit",
    image_url: "https://t-img.picturehaven.net/product/62332fcb-a9cf-4d25-a294-f464c07a13b6-20230725.jpeg",
    price: 12.71,
    sale: '2.1K',
    revenue: '26.81K',
  },
  {
    rank: 5,
    title: "Blursh Bronzed - Liquid Bronzer/Contour",
    image_url: "https://t-img.picturehaven.net/product/d20cf60b-3bfe-4c05-a7cd-9886ba050063-20230807.jpeg",
    price: 12.72,
    sale: '1.9K',
    revenue: '24.07K',
  },
  {
    rank: 6,
    title: "Free Soul Apple Cider Vinegar Gummies Gluten Free GMO Free",
    image_url: "https://t-img.picturehaven.net/product/136d9616-6db3-44c7-ab6b-be0b068f93b8-20230606.jpeg",
    price: 12.71,
    sale: '1.8K',
    revenue: '22.53K',
  },
  {
    rank: 7,
    title: "3pcs/set Water Bottle, Portable Gradient Sport Bottle, Fitness Sports Water Bottle",
    image_url: "https://t-img.picturehaven.net/product/f7219326-cc4a-418d-b1bf-7ee812c92438-20230731.jpeg",
    price: 8.91,
    sale: '1.3K',
    revenue: '11.87K',
  },
  {
    rank: 8,
    title: "1 Piece Weekly Notebook, Spiral Notebook, Weekly Planner Book",
    image_url: "https://t-img.picturehaven.net/product/41c07099-b1aa-4543-8410-20dcce047e8d-20230731.jpeg",
    price: 1.15,
    sale: '1.4K',
    revenue: '1.61K',
  },
  {
    rank: 9,
    title: "OUTFIT DRESS TOP TROUSER JUMPSUIT",
    image_url: "https://t-img.picturehaven.net/product/a4193bd1-3a2b-4e60-8079-c5755ab695ba-20230623.jpeg",
    price: 8.91,
    sale: '1.3K',
    revenue: '11.87K',
  },
  {
    rank: 10,
    title: "Nature Spell Rosemary Oil For Hair 150ml",
    image_url: "https://t-img.picturehaven.net/product/4f16327d-faa1-455b-9745-e9b2d7edfdc4-20230811.jpeg",
    price: 9.16,
    sale: '1.2K',
    revenue: '11.06K',
  },
]

export default function ProductsPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Card>
        <div className='flex flex-row border-b border-slate-400'>
          {tabs.map((tab, index) => (
            <div key={index} className='flex flex-col mr-8'>
              <button>
                <Title>{tab.title}</Title>
                <div className={` ${index === 0 ? 'border-2 border-gray-800 mt-4' : 'null'}`}></div>
              </button>
            </div>
          ))}
        </div>
        
        <div className='flex flex-row mt-12 items-center'>
          <Title>Country</Title>
          {countries.map((country, index) => (
            <button key={index} className={`flex flex-row justify-center px-4 py-2 border border-gray-800 ml-8 self-center rounded-md ${index === 0 && 'bg-slate-200'}`}>
              <Image
                width={720}
                height={480}
                className="h-4 w-6 "
                src={country.icon}
                alt='country-icon'
                />
              <Text className='ml-2'>{country.name}</Text>
            </button>
          ))}
        </div>

        <div className='flex flex-row mt-12 items-center'>
          <Title>Category</Title>
          {categories.map((category, index) => (
            <button key={index} className={`flex ml-8 self-center px-4 py-2  self-center rounded-md ${index === 0 && 'bg-slate-200 border border-gray-800'}`}>
              <Text>{category.title}</Text>
            </button>
          ))}
        </div>

        <div className='flex flex-row mt-12 items-center'>
          {times.map((time, index) => (
            <button key={index} className={`flex flex-row justify-center px-4 py-2 border border-gray-800 mr-8 self-center rounded-md ${index === 0 && 'bg-slate-200'}`}>
                <Text>{time.title}</Text>
            </button>
          ))}
        </div>
      </Card>
      <Card className='mt-16'>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Ranking</TableHeaderCell>
              <TableHeaderCell>Product</TableHeaderCell>
              <TableHeaderCell>Price</TableHeaderCell>
              <TableHeaderCell>Sales</TableHeaderCell>
              <TableHeaderCell>Revenue</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell>{product.rank}</TableCell>
                <TableCell>
                  <div className='flex flex-row '>
                    <Image
                      className='h-20 w-20 rounded-md items-center'
                      width={720}
                      height={480}
                      alt='product_image'
                      src={product.image_url}
                    />
                    <Bold className='ml-4 max-w-xs truncate w-56'  style={{ fontSize: 14 }}>{product.title}</Bold>
                  </div>
                </TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>{product.sale}</TableCell>
                <TableCell>{product.revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      <div className='flex flex-row bg-white h-32 w-full self-center'>
        <div className='flex flex-col w-1/2 justify-center items-center'>
          <div className='flex flex-col justify-center'>
            <Title>Email: focman26@gmail.com</Title>
            <Title>Phone: +84358294904</Title>
          </div>
        </div>
        <div className='flex flex-col w-1/2 justify-center items-center'>
          <div className='flex flex-col justify-center'>
            <a href='privacy-policy'>
              <Title>Privacy and Policy</Title>
            </a>
            <a href='term-of-service'>
              <Title>Term of service</Title>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
