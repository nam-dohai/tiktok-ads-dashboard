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

const influencers = [
  {
    rank: 1,
    title: "7colorhousequeen_uk",
    image_url: "https://t-img.picturehaven.net/tikmeta/e69ffa9f-99c7-4dff-8301-4d7625abb8d1-20230722.jpeg?imageMogr2/auto-orient/thumbnail/100x/strip/format/WEBP/quality/75!/ignore-error/1",
    previousSale: 1,
    currentSale: '2.7K',
    follower: '4.0K',
    revenue: '24.51K',
  },
  {
    rank: 2,
    title: "Superb",
    image_url: "https://t-img.picturehaven.net/tikmeta/0fe8f86c-274c-40c0-9869-89aed0f3b74d-20230611.jpeg?imageMogr2/auto-orient/thumbnail/100x/strip/format/WEBP/quality/75!/ignore-error/1",
    previousSale: 3,
    currentSale: '1.8K',
    follower: '22.2K',
    revenue: '26.21K',
  },
  {
    rank: 3,
    title: "cfyhvf",
    image_url: "https://t-img.picturehaven.net/tikmeta/a19afc14-ffd7-421b-9bff-239a0b836100-20230629.jpeg?imageMogr2/auto-orient/thumbnail/100x/strip/format/WEBP/quality/75!/ignore-error/1",
    previousSale: 3,
    currentSale: '190',
    follower: '3.6K',
    revenue: '4.19K',
  },
  {
    rank: 4,
    title: "Zara J",
    image_url: "https://t-img.picturehaven.net/tikmeta/e69ffa9f-99c7-4dff-8301-4d7625abb8d1-20230722.jpeg?imageMogr2/auto-orient/thumbnail/100x/strip/format/WEBP/quality/75!/ignore-error/1",
    previousSale: 1,
    currentSale: '465',
    follower: '4.0K',
    revenue: '24.51K',
  },
  {
    rank: 5,
    title: "vanfi_fashion",
    image_url: "https://t-img.picturehaven.net/tikmeta/e6588ed0-b78e-4042-868a-6a1ad3791378-20230723.jpeg?imageMogr2/auto-orient/thumbnail/100x/strip/format/WEBP/quality/75!/ignore-error/1",
    previousSale: 2,
    currentSale: '450',
    follower: '925',
    revenue: '8.42K',
  },
  {
    rank: 6,
    title: "Hollie",
    image_url: "https://t-img.picturehaven.net/tikmeta/5c39c48d-2013-4606-bdbd-da45ae9d5f6a-20230725.jpeg?imageMogr2/auto-orient/thumbnail/100x/strip/format/WEBP/quality/75!/ignore-error/1",
    previousSale: 2,
    currentSale: '239',
    follower: '4.14K',
    revenue: '26.1K',
  },
  {
    rank: 7,
    title: "katelynkays_",
    image_url: "https://t-img.picturehaven.net/tikmeta/67cc8c32-07b6-4f42-bbc6-2ba68b8d6a81-20230719.jpeg?imageMogr2/auto-orient/thumbnail/100x/strip/format/WEBP/quality/75!/ignore-error/1",
    previousSale: 2,
    currentSale: '200',
    follower: '922',
    revenue: '1.26K',
  },
  {
    rank: 8,
    title: "Caitlin Muirhead",
    image_url: "https://t-img.picturehaven.net/tikmeta/1ff058d4-fced-411f-944a-e45f9c1eaba3-20230709.jpeg?imageMogr2/auto-orient/thumbnail/100x/strip/format/WEBP/quality/75!/ignore-error/1",
    previousSale: 1,
    currentSale: '56',
    follower: '280.4K',
    revenue: '476.32K',
  },
  {
    rank: 9,
    title: "Han",
    image_url: "https://t-img.picturehaven.net/tikmeta/ebf95a73-7dbc-494e-8615-1f1792355ab6-20230723.jpeg?imageMogr2/auto-orient/thumbnail/100x/strip/format/WEBP/quality/75!/ignore-error/1",
    previousSale: 6,
    currentSale: '320',
    follower: '126.2K',
    revenue: '4.39K',
  },
  {
    rank: 10,
    title: "Zoe Hague",
    image_url: "https://t-img.picturehaven.net/tikmeta/602c41e5-4c3b-4794-b08f-196b7e997554-20230702.jpeg?imageMogr2/auto-orient/thumbnail/100x/strip/format/WEBP/quality/75!/ignore-error/1",
    previousSale: 1,
    currentSale: '50',
    follower: '91.0K',
    revenue: '1.20K',
  },
]

export default function InfluencerPage() {
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
              <TableHeaderCell>Influencer</TableHeaderCell>
              <TableHeaderCell>Previous Sales</TableHeaderCell>
              <TableHeaderCell>Current Sales</TableHeaderCell>
              <TableHeaderCell>Followers</TableHeaderCell>
              <TableHeaderCell>Revenue</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {influencers.map((influencer, index) => (
              <TableRow key={index}>
                <TableCell>{influencer.rank}</TableCell>
                <TableCell>
                  <div className='flex flex-row items-center'>
                    <Image
                      className='h-16 w-16 rounded-full items-center'
                      width={720}
                      height={480}
                      alt='product_image'
                      src={influencer.image_url}
                    />
                    <Bold className='ml-4 max-w-xs truncate w-56'  style={{ fontSize: 14 }}>{influencer.title}</Bold>
                  </div>
                </TableCell>
                <TableCell>{influencer.previousSale}</TableCell>
                <TableCell>{influencer.currentSale}</TableCell>
                <TableCell>{influencer.follower}</TableCell>
                <TableCell>{influencer.revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      {/* <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
      </Grid> */}
      {/* <Chart /> */}
    </main>
  );
}
