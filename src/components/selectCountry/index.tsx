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
  control: (provided: any, { isFocused, isSelected }: any) => ({
    ...provided,
    background: 'rgba(255, 255, 255, 0.1)',
    borderColor: isFocused ? '#71FBE4' : '#A79BB1',
    backdropFilter: 'blur(6px)',
    borderRadius: '4px',
    '&:hover': {
      borderColor: !isFocused && '#FFFFFF',
    }
  }),
  input: (provided: any) => ({
    ...provided,
    color: 'white',
    paddingLeft: '24px',
  }),
  placeholder: (provided: any) => ({
    ...provided,
    marginLeft: '24px',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: 'white'
  }),
  indicatorSeparator: (provided: any, { isFocused }: any) => ({
    ...provided, 
    margin: '0',
    backgroundColor: isFocused ? '#71FBE4' : '#A79BB1',
    '&:hover': {
      backgroundColor: !isFocused && '#FFFFFF'
    }
  }),
  indicatorContainer: (provided: any, { isFocused }: any) => ({
    ...provided,
    transform: isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
    color: isFocused ? '#71FBE4' : '#A79BB1',
    '&:hover': {
      color: !isFocused && '#FFFFFF'
    },
  })
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
