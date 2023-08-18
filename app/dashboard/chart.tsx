'use client';

import { Card, AreaChart, Title, Text, BarChart } from '@tremor/react';

const data = [
  {
    Day: 'Aug 10',
    Sales: 126400,
    Revenue: 1300000
  },
  {
    Day: 'Aug 11',
    Sales: 115500,
    Revenue: 1200000
  },
  {
    Day: 'Aug 12',
    Sales: 134200,
    Revenue: 1400000
  },
  {
    Day: 'Aug 13',
    Sales: 126000,
    Revenue: 1200000
  },
  {
    Day: 'Aug 14',
    Sales: 116900,
    Revenue: 1100000
  },
  {
    Day: 'Aug 15',
    Sales: 127300,
    Revenue: 1200000
  },
  {
    Day: 'Aug 16',
    Sales: 163500,
    Revenue: 1500000
  },
];

export default function Example() {
  return (
    <>
      <Card className="mt-8">
        <Title>Revenue</Title>
        <AreaChart
          className="mt-4 h-80"
          data={data}
          categories={['Revenue']}
          index="Day"
          colors={['indigo', 'fuchsia']}
          valueFormatter={(number: number) =>
            `$ ${Intl.NumberFormat('us').format(number).toString()}`
          }
          yAxisWidth={60}
        />
      </Card>
      <Card className="mt-8">
        <Title>Sales</Title>
        <BarChart
          className="mt-4 h-80"
          data={data}
          categories={['Sales']}
          index="Day"
          colors={['indigo', 'fuchsia']}
          valueFormatter={(number: number) =>
            `$ ${Intl.NumberFormat('us').format(number).toString()}`
          }
          yAxisWidth={60}
        />
      </Card>
    </>
  );
}
