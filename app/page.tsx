'use client';

import { Card, Metric, Text, Title, BarList, Flex, Grid, TableRow, TableHead, TableHeaderCell, TableBody, Table, TableCell } from '@tremor/react';
import Chart from './dashboard/chart';

const categories = [
  { name: 'Beauty & Personal Care', value: '3420000', percentOfSales: 30, },
  { name: 'Womenswear & Underwear', value: '2200000', percentOfSales: 18, },
  { name: 'Home Supplies', value: '608580', percentOfSales: 5,},
  { name: 'Health', value: '518940', percentOfSales: 5,},
  { name: 'Sports & Outdoor', value: '512530', percentOfSales: 5, }
];

const subCategories = [
  { name: 'Makeup & Perfume', value: '1.65M', growthRate: -6},
  { name: 'Skincare', value: '485.39K', growthRate: -7},
  { name: 'Hair Care & Styling', value: '352.32K', growthRate: -5},
  { name: 'Bath & Body Care', value: '212.50K', growthRate: 14},
  { name: 'Nasal & Oral Care', value: '4.22K', growthRate: -5 },
];

// const data = [
//   {
//     category: 'Website',
//     stat: '10,234',
//     data: website
//   },
//   {
//     category: 'Online Shop',
//     stat: '12,543',
//     data: shop
//   },
//   {
//     category: 'Mobile App',
//     stat: '2,543',
//     data: app
//   }
// ];

export default function PlaygroundPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={2} className="gap-6">
        <Card>
          <Title>Category</Title>
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="space-x-2"
          >
            {/* <Metric>{item.stat}</Metric> */}
            <Text>Total revenue</Text>
          </Flex>
          <Flex className="mt-6">
            <Text>Category</Text>
            <Text className="text-right">Revenue</Text>
          </Flex>
          <BarList
            data={categories.map(item => {
              return {
                'name': item.name,
                'value': item.value
              }
            })}
            valueFormatter={(number: number) =>
              Intl.NumberFormat('us').format(number).toString() + "$"
            }
            className="mt-2"
          />
        </Card>
        <Card>
          <Title>Subcategory</Title>
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="space-x-2"
          >
            <Text>Total revenue & Growth rate</Text>
          </Flex>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Subcategory</TableHeaderCell>
                <TableHeaderCell>Revenue</TableHeaderCell>
                <TableHeaderCell>Growth rate</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subCategories.map((subCategory, index) => (
                <TableRow key={index}>
                  <TableCell>{subCategory.name}</TableCell>
                  <TableCell>{subCategory.value}</TableCell>
                  <TableCell>{subCategory.growthRate > 0 ? `+${subCategory.growthRate}` :  subCategory.growthRate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Grid>
      <Chart />
    </main>
  );
}
