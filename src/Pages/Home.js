import React from 'react';
import styled from 'styled-components';
import SearchComponent from '../components/Search/SearchComponent';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <HomeWrapper>
      <SearchComponent />
      <Hero />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  position: relative;
  top: 80px;
`;

export default Home;
