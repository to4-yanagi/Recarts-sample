import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceDot,
  ReferenceArea
} from 'recharts';
import styled from 'styled-components'

const data = [
  { rank: 'Iron', score: 1, count: 0 },
  { rank: 'Bronze', score: 4, count: 620 },
  { rank: 'Silver', score: 15, count: 550 },
  { rank: 'Gold', score: 50, count: 400 },
  { rank: 'Platinum', score: 200, count: 300 },
  { rank: 'Diamond', score: 300, count: 0 }
];

const Wrapper = styled.section`
  width: 100%;
`;

const Inner = styled.section`
  width: 80%;
  max-width: 900px;
  height: 400px;
  margin: 50px auto;
  padding: 30px;
  box-shadow: 0px 3px 6px #2c28281c;
  border-radius: 4px;
`;


const App = () => (
  <Wrapper>
    <Inner>
      <ResponsiveContainer>
        <AreaChart data={data} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="score" axisLine={false} tickLine={false} tick={false} />
          <YAxis dataKey="count" axisLine={false} tickLine={false} tick={false} />
          <Area
            type="natural"
            dataKey="count"
            stroke="#178BCA"
            strokeWidth={5}
            fill="#178BCA"
            fillOpacity={0.2}
          />
          <ReferenceDot x={15} y={550} stroke="red" fill="red" onMouseOver={() => console.log("aaa")} />
          <ReferenceArea x1={1} x2={4} stroke="red" strokeOpacity={0.3} fill="#FFF" label="Iron" />
          <ReferenceArea x1={4} x2={15} stroke="blue" strokeOpacity={0.3} fill="#FFF" label={"Bronze"} />
        </AreaChart>
      </ResponsiveContainer>
    </Inner>
  </Wrapper>
);

export default App
