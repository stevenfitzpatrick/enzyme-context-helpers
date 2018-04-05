// @flow
import PropTypes from 'prop-types';
import * as React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

export let Theme = null;

type initArgs = {
  theme: Object
};

export function init({ theme }: initArgs = {}) {
  Theme = theme;
}

export const EMPTY_THEME_WARNING =
  'Please ensure you have called init({theme: yourTheme}) prior to trying to call mountWithTheme';

/**
 * Helper to wrap ThemeProvider for shallow / mount for enzyme
 */
function _wrapWithThemeAndRouter(fn: Function, children) {
  if (!Theme) {
    /* eslint no-console: 0 */
    console.warn(EMPTY_THEME_WARNING);
    return;
  }
  const context = shallow(<ThemeProvider theme={Theme} />)
    .instance()
    .getChildContext();

  return fn(children, {
    context: {
      ...context,
      router: {
        history: {
          push: () => {},
          replace: () => {},
          createHref: () => {}
        }
      }
    },
    childContextTypes: {
      router: PropTypes.object.isRequired,
      ...ThemeProvider.childContextTypes
    }
  });
}

/**
 * Helper to wrap ThemeProvider for shallow / mount for enzyme
 */
function _wrapWithTheme(fn: Function, children) {
  if (!Theme) {
    /* eslint no-console: 0 */
    console.warn(EMPTY_THEME_WARNING);
    return;
  }

  const context = shallow(<ThemeProvider theme={Theme} />)
    .instance()
    .getChildContext();

  return fn(children, {
    context,
    childContextTypes: ThemeProvider.childContextTypes
  });
}

/**
 * Helper for React Create Renderer with theme
 */
export function renderWithTheme(component: React.Node) {
  return renderer.create(
    <ThemeProvider theme={Theme}>{component}</ThemeProvider>
  );
}

/**
 * Helper for shallow mount with theme
 */
export function shallowWithTheme() {
  return _wrapWithTheme(shallow, ...arguments);
}

/**
 * Helper for full mount with theme
 */
export function mountWithTheme() {
  return _wrapWithTheme(mount, ...arguments);
}

/**
 * Helper for shallow mount with theme and router
 */
export function shallowWithRouter() {
  return _wrapWithThemeAndRouter(shallow, ...arguments);
}

/**
 * Helper for full mount with theme and router
 */
export function mountWithRouter() {
  return _wrapWithThemeAndRouter(mount, ...arguments);
}
