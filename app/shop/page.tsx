'use client';

import { Tab } from '@headlessui/react';
import { Card, Metric, Text, Title, BarList, Flex, Grid, Table, TableHeaderCell, TableBody, TableHead, TableRow, TableCell, Bold } from '@tremor/react';
import Image from 'next/image';
// import Chart from './chart';


const tabs = [
  {
    title: 'Breakout Influencer',
  },
  {
    title: 'Top Video Creator',
  },
  {
    title: 'Top Live Streamer',
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

const shops = [
  {
    rank: 1,
    title: "FSG Electronic Supermarket",
    image_url: "https://t-img.picturehaven.net/product/shop/8a51d294-4bf2-4440-9a23-49f3af504a9c-20230805.jpeg",
    previousSale: 13,
    currentSale: '502',
    salesGrowthRatio: "3761.54%",
    videos: 3,
    products: 50,
  },
  {
    rank: 2,
    title: "Pokemon Bundles UK",
    image_url: "https://t-img.picturehaven.net/product/shop/6b136b6b-2554-4786-acb1-58572fe6a561-20230707.jpeg",
    previousSale: 18,
    currentSale: '412',
    salesGrowthRatio: "2188.89%",
    videos: 43,
    products: 329,
  },
  {
    rank: 3,
    title: "Celestia Collectables",
    image_url: "https://t-img.picturehaven.net/product/shop/a5d2929f-2f74-4abc-b101-8c4b0b0ea1a6-20230731.jpeg",
    previousSale: 21,
    currentSale: '210',
    salesGrowthRatio: "900.00%",
    videos: 56,
    products: 47,
  },
  {
    rank: 4,
    title: "Porte a Porte fashion",
    image_url: "https://t-img.picturehaven.net/product/shop/a6229c77-236a-4d7d-905b-35182d9731f5-20230711.jpeg",
    previousSale: 43,
    currentSale: '574',
    salesGrowthRatio: "1266.67%",
    videos: 949,
    products: 304,
  },
  {
    rank: 5,
    title: "anessa05",
    image_url: "https://t-img.picturehaven.net/product/shop/5893ed20-c222-41c4-bb92-b9e0fba51f3a-20230801.jpeg",
    previousSale: 21,
    currentSale: '209',
    salesGrowthRatio: "895.24%",
    videos: 59,
    products: 103,
  },
  {
    rank: 6,
    title: "Intwine Inclusive",
    image_url: "https://t-img.picturehaven.net/product/shop/5893ed20-c222-41c4-bb92-b9e0fba51f3a-20230801.jpeg",
    previousSale: 64,
    currentSale: '612',
    salesGrowthRatio: "856.25%",
    videos: '1.2K',
    products: 181,
  },
  {
    rank: 7,
    title: "Sase Boutique",
    image_url: "https://t-img.picturehaven.net/product/shop/d16019ed-d822-4ad3-933d-19c69d8a281e-20230801.jpeg",
    previousSale: 350,
    currentSale: '2.9K',
    salesGrowthRatio: "735.14%",
    videos: 79,
    products: 99,
  },
  {
    rank: 8,
    title: "Tingran",
    image_url: "https://t-img.picturehaven.net/product/shop/5893ed20-c222-41c4-bb92-b9e0fba51f3a-20230801.jpeg",
    previousSale: 13,
    currentSale: '502',
    salesGrowthRatio: "3761.54%",
    videos: 3,
    products: 50,
  },
  {
    rank: 9,
    title: "Urchoice.show",
    image_url: "https://t-img.picturehaven.net/product/shop/37d691e0-3084-45bb-992a-18683aeaf6d2-20230806.jpeg",
    previousSale: 40,
    currentSale: '263',
    salesGrowthRatio: "557.50%",
    videos: 1,
    products: 27,
  },
  {
    rank: 10,
    title: "DOCHAK",
    image_url: "https://t-img.picturehaven.net/product/shop/4f6378da-2ad3-4213-b6bd-506c289f178f-20230807.jpeg",
    previousSale: 13,
    currentSale: '81',
    salesGrowthRatio: "523.08%",
    videos: 33,
    products: 41,
  },
]

export default function ShopPage() {
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
              <TableHeaderCell>Shop</TableHeaderCell>
              <TableHeaderCell>Previous Sales</TableHeaderCell>
              <TableHeaderCell>Current Sales</TableHeaderCell>
              <TableHeaderCell>Sales Growth Ratio</TableHeaderCell>
              <TableHeaderCell>Videos</TableHeaderCell>
              <TableHeaderCell>Products</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shops.map((shop, index) => (
              <TableRow key={index}>
                <TableCell>{shop.rank}</TableCell>
                <TableCell>
                  <div className='flex flex-row '>
                    <Image
                      className='h-20 w-20 rounded-md items-center'
                      width={720}
                      height={480}
                      alt='product_image'
                      src={shop.image_url}
                    />
                    <Bold className='ml-4 max-w-xs truncate w-56'  style={{ fontSize: 14 }}>{shop.title}</Bold>
                  </div>
                </TableCell>
                <TableCell>{shop.previousSale}</TableCell>
                <TableCell>{shop.currentSale}</TableCell>
                <TableCell>{shop.salesGrowthRatio}</TableCell>
                <TableCell>{shop.videos}</TableCell>
                <TableCell>{shop.products}</TableCell>
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
      {/* <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
      </Grid> */}
      {/* <Chart /> */}
    </main>
  );
}
