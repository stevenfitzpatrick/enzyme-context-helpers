/* eslint no-console: 0 */
import { init, Theme, EMPTY_THEME_WARNING } from '../index';

import {
  Button,
  MockTheme,
  withoutHelper,
  withHelper
} from '../../test/helpers';

describe('Styled Components Themes', () => {
  let outputData = '';
  let storeLog = inputs => (outputData += inputs);

  beforeEach(() => {
    console.warn = jest.fn().mockImplementation(storeLog);
    outputData = '';
    init();
  });

  afterEach(() => {
    console.warn.mockClear();
  });

  test('should be able to init Theme', () => {
    init({ theme: 'Hello !' });
    expect(Theme).toEqual('Hello !');
  });

  test('should throw error without mock Theme', () => {
    expect(withoutHelper).toThrowError(expect.anything());
  });

  test('should fire console message if no mock theme passed', () => {
    expect(withHelper).not.toThrowError();
    expect(outputData).toEqual(EMPTY_THEME_WARNING);
  });

  test('should render with theme and no console messages', () => {
    init({ theme: MockTheme });
    const wrapper = withHelper();
    expect(wrapper.exists(Button)).toBeTruthy();
    expect(wrapper).toHaveStyleRule('background-color', 'palevioletred');
    expect(outputData).toBeFalsy();
  });
});
