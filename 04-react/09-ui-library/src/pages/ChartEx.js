import React, {memo} from 'react';
import styled from 'styled-components';
import {cloneDeep} from 'lodash';
import {
  Chart,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler,
  ArcElement
} from 'chart.js';

import {Bar, Line, Radar, Pie, Scatter} from 'react-chartjs-2';

Chart.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler,
  ArcElement
);

const PlotContainer = styled.div`
  width: 33.3%;
  padding: 20px;
  margin-top: 20px;
  box-sizing: border-box;
  height: 400px;
`;

const ChartEx = memo(() => {
  const defaultOption = {
    Responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  const hgraphOption = cloneDeep(defaultOption);
  hgraphOption.indexAxis = 'y';

  const readarOption = cloneDeep(defaultOption);

  const pieOption = cloneDeep(defaultOption);

  // 가로, 세로 막대 그래프를 위한 데이터 정의
  const grade = {
    labels: ['철수', '영희', '민수', '수현', '호영'],
    datasets: [{
        label: '국어',
        data: [98, 88, 92, 63, 100],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }, {
        label: '영어',
        data: [82, 90, 70, 60, 50],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgba(53, 162, 235, 1)',
        borderWidth: 1
    }, {
        label: '수학',
        data: [88, 62, 71, 31, 84],
        backgroundColor: 'rgba(258, 234, 153, 0.5)',
        borderColor: 'rgba(258, 234, 153, 1)',
        borderWidth: 1
    }]
};

const covid19 = {
  labels: ['06/18', '06/19', '06/20', '06/21', '06/22', '06/23', '06/24'],
  datasets: [{
    label: '서울시 확진자',
    data: [1237, 1108, 719, 2042, 1775, 1580, 1605],
    backgroundColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }, {
    label: '인천시 확진자',
    data: [260, 278, 222, 481, 404, 372, 366],
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
    borderColor: 'rgba(53, 162, 235, 1)',
    borderWidth: 1
  }]
};

const student = {
  labels: ['컴퓨터활용', '퍼블리싱', '프론트엔드', '백엔드', '데이터베이스'],
  datasets: [{
    label: '점수',
    data: [72, 95, 94, 77, 82],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
    ],
    borderColor: [
      'rgba(255, 99, 132)',
    ],
    borderWidth: 1
  }]
};

const studentPie = {
  labels: ['컴퓨터활용', '퍼블리싱', '프론트엔드', '백엔드', '데이터베이스'],
  datasets: [{
    label: '점수',
    data: [72, 95, 94, 77, 82],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 162, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
    ],
    borderColor: [
      'rgba(255, 99, 132)',
      'rgba(54, 162, 235)',
      'rgba(255, 162, 86)',
      'rgba(75, 192, 192)',
      'rgba(153, 102, 255)',
    ],
    borderWidth: 1
  }]
};

const studentScatter = {
  labels: [98, 88, 92, 63, 100],
  datasets: [{
    label: '영어',
    data: [82, 90, 70, 60, 50],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }, {
    label: '수학',
    data: [88, 62, 71, 31, 84],
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
    borderColor: 'rgba(53, 162, 235)',
    borderWidth: 1
  }]
}
  
  return (
    <div>
      <h2>Chart</h2>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <PlotContainer>
          <h3>세로 막대 그래프</h3>
          <Bar options={defaultOption} data={grade} />
        </PlotContainer>
        <PlotContainer>
          <h3>가로 막대 그래프</h3>
          <Bar options={hgraphOption} data={grade} />
        </PlotContainer>
        <PlotContainer>
          <h3>선 그래프</h3>
          <Line options={defaultOption} data={covid19} />
        </PlotContainer>
        <PlotContainer>
          <h3>레이더 그래프</h3>
          <Radar options={readarOption} data={student} />
        </PlotContainer>
        <PlotContainer>
          <h3>파이 그래프</h3>
          <Pie options={pieOption} data={studentPie} />
        </PlotContainer>
        <PlotContainer>
          <h3>산점도 그래프</h3>
          <Scatter options={defaultOption} data={studentScatter} />
        </PlotContainer>
      </div>
      
    </div>
  );
});

export default ChartEx;
