# enzyme-context-helpers

[![Greenkeeper badge](https://badges.greenkeeper.io/stevenfitzpatrick/enzyme-context-helpers.svg)](https://greenkeeper.io/)

## 💻 Installation

First include the dependency in your project as dev-dependency.

npm

```bash
$ npm i @sfitzpatrick/enzyme-context-helpers -D
```

Yarn

```bash
$ yarn add @sfitzpatrick/enzyme-context-helpers -D
```

## 📦 Usage

### Styled Components

First you need to `init` once to pass your Styled Components theme.

```js
import { init } from '@sfitzpatrick/enzyme-context-helpers';
// Change path to where your Theme is saved
import theme from '../src/theme/theme';

init({ theme });
```

Then when you want test your styled components, which are dependent on theme context, you can use the following helpers to test with `shallow` and `mount`. These functions will automatically inject the Theme into your components.

```js
import {
  mountWithTheme,
  shallowWithTheme,
  renderWithTheme
} from '@sfitzpatrick/enzyme-context-helpers';

const mountedWrapper = mountWithTheme(component);
const shallowWrapper = shallowWithTheme(component);
const snapshotWrapper = renderWithTheme(component).toJSON();
```

## 👊 Author

* Steven Fitzpatrick [@Fitzy_longhorn](https://twitter.com/Fitzy_longhorn)

## 📃 License

This project is licensed under the MIT License - see the [Licence.md](Licence.md) file for details.

## 📜 Change log

The change log can found on the [CHANGELOG](https://github.com/stevenfitzpatrick/enzyme-context-helpers/blob/master/CHANGELOG.md) page.

## ✍️ Contributions

Feel free to contribute and submit pull requests.test
