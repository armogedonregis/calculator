import styled from "styled-components";
import tw from "twin.macro";
import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import Geo from '../../data/geo.json';

const Container = styled.div`
${tw`
    mb-[16px]
`}
`;

const Lab = styled.label`
${tw`
    lg:text-xl
    mb-[4px]
    uppercase
    text-sm
    text-gray
    flex
    items-center
`}
`;

const customStyles = {
  option: (provided: any) => ({
    ...provided,
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  }),
  menu: (provided: any) => ({
    ...provided,
    background:' rgba(255, 255, 255, 0.1)',
    border: '1px solid #A79BB1',
    backdropFilter: 'blur(6px)',
    borderRadius: '4px',
    zIndex: '100'
  }),
  menuList: (provided: any) => ({
    ...provided,
    scrollbarWidth: 'none',
    '::-webkit-scrollbar': {
      display: 'none'
    }
  }),
  control: (provided: any) => ({
    ...provided,
    color: 'white',
    background:' rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(6px)',
    borderRadius: '4px'
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: 'white'
  }),
}

export const SelectCountry: React.FC<{
  options?: any;
  value?: any;
  changeHandler?: any;
}> = ({ options, value, changeHandler }) => {
  
  

  return (
    <Container>
      <Lab>
            Geo
        </Lab>
     <Select styles={customStyles} options={options} onChange={changeHandler} />
    </Container>
  );
}
