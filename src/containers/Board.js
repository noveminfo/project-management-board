import React from 'react';
import styled from 'styled-components';
// import withDataFetching from '../withDataFetching';
import Lane from '../components/Lane/Lane';
import useDataFetching from '../withDataFetching2';

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

// const Board = ({lanes, data, loading, error}) => {
const Board = ({lanes, dataSource}) => {
  const [tickets, loading, error, setTickets] = useDataFetching(dataSource);
  
  const onDragStart = (e, id) => {
    e.dataTransfer.setData('id', id);
  }

  const onDragOver = e => {
    e.preventDefault();
  }

  const onDrop = (e, laneId) => {
    const id = Number(e.dataTransfer.getData('id'));

    const new_tickets = tickets.filter(ticket => {
      if (ticket.id === id) {
        ticket.lane = laneId;
      }
      return ticket;
    });

    setTickets(new_tickets)
  }

  return (
    <BoardWrapper>
      {lanes.map(lane =>
        <Lane
          key={lane.id}
          laneId={lane.id}
          title={lane.title}
          loading={loading}
          error={error}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
          tickets={tickets.filter(ticket => ticket.lane === lane.id)}
        />
      )}
    </BoardWrapper>
  )
}

// export default withDataFetching(Board);
export default Board;
