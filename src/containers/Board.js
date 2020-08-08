import React from 'react';
import styled from 'styled-components';
import withDataFetching from '../withDataFetching';
import Lane from '../components/Lane/Lane';

const BoardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Board = ({ lanes, loading, error, data }) => (
  <BoardWrapper>
    {lanes.map(lane =>
      <Lane
        key={lane.id}
        title={lane.title}
        loading={loading}
        error={error}
        tickets={data.filter(ticket => ticket.lane === lane.id)}
      />
    )}
  </BoardWrapper>
);

export default withDataFetching(Board);
