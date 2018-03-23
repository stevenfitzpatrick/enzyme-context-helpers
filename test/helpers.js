import styled from 'styled-components';
import React from 'react';
import { mount } from 'enzyme';

import { mountWithTheme } from '../src/index';

export const MockTheme = {
  dark: { bg: 'palevioletred' }
};

export const Button = styled.button`
  display: 'block';
  background-color: ${props => props.theme.dark.bg};
`;

/**
 * Helper function to enzyme mount dummy component
 */
export function withoutHelper() {
  mount(<Button />);
}

/**
 * Helper function to mount dummy component with helper context lib
 */
export function withHelper() {
  return mountWithTheme(<Button />);
}
