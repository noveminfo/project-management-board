import React from 'react';
import styled from 'styled-components';
// import withDataFetching from '../withDataFetching';
import Ticket from '../components/Ticket/Ticket';
import useDataFetching from '../withDataFetching2';

const TicketsWrapper = styled.div`
display: flex;
align-content: flex-start;
flex-direction: row;
flex-wrap: wrap;
margin: 2%;

@media (max-width: 768px) {
  flex-direction: column;
}
`;

const Alert = styled.div`
text-align: center;
`;

const Tickets = ({ dataSource }) => {
  const [data, loading, error] = useDataFetching(dataSource);
  return (
  <TicketsWrapper>
    {(loading || error) && <Alert>{loading ? 'Loading...' : error}</Alert>}
    {data.map(ticket => <Ticket key={ticket.id} marginRight ticket={ticket} />)}
  </TicketsWrapper>
  )
};

export default Tickets;