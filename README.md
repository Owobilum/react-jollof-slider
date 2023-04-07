# react-jollof-slider

[![npm version](https://img.shields.io/npm/v/react-jollof-slider)](https://www.npmjs.com/package/react-jollof-slider)
[![minified + gzip](https://img.shields.io/bundlephobia/minzip/react-jollof-slider/latest)](https://bundlephobia.com/package/react-jollof-slider@latest)
[![typescript](https://badgen.net/npm/types/react-jollof-slider)](https://unpkg.com/react-jollof-slider/dist/index.d.ts)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/owobilum/react-jollof-slider/blob/master/LICENSE)

A lightweight, responsive, SSR supported, well tested, React.js slider component with autoplay support (autoplay pauses when an item is hovered). [ Customizable](#props)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Demo](#demo)

## Installation

**npm**

```bash
npm install react-jollof-slider
```

**yarn**

```bash
yarn add react-jollof-slider
```

## Usage

#### Basic Example:

```js
import { JollofSlider, SliderItem } from 'react-jollof-slider'

const items = [1, 2, 3, 4, 5]

function App() {
  return (
    <div className="App">
      <JollofSlider numberOfItems={items.length} isAutoplay isShowArrowNav={false} isShowDotNav>
        {items.map((text) => (
          <SliderItem key={text}>
            <div
              style={{
                backgroundColor: '#000000',
                color: '#c4c4c4',
                width: '100%',
                height: '18.25rem',
                padding: '1rem',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <p style={{ fontSize: '2rem' }}>{text}</p>
            </div>
          </SliderItem>
        ))}
      </JollofSlider>
    </div>
  )
}

export default App
```

## Props

| Name                 | Type    | Default Value            | Description                                                                                                                                                                                |
| -------------------- | ------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \*_numberOfItems_    | number  |                          | Number of items to be displayed in the slider                                                                                                                                              |
| **customWidth**      | object  | `{xs:240,sm:340,lg:490}` | The width of individual slider items at different screen sizes. lg: min-width(600px), sm: min-width(370px), xs: screens below 370px width . The width values should be provided in pixels. |
| **isAutoplay**       | boolean | `false`                  | Add autoplay functionality                                                                                                                                                                 |
| **isShowDotNav**     | boolean | `false`                  | Show navigation with dots which also indicate current slider position                                                                                                                      |
| **isShowArrowNav**   | boolean | `true`                   | Show buttons for moving slides forward and backward                                                                                                                                        |
| **children**         | node    | `null`                   | slider items                                                                                                                                                                               |
| **forwardIcon**      | node    | `undefined`              | Icon for the forward navigation button                                                                                                                                                     |
| **backwardIcon**     | node    | `undefined`              | Icon for the backward navigation button                                                                                                                                                    |
| **autoPlayInterval** | number  | `3`                      | Interval (in seconds) between slide changes during autoplay.                                                                                                                               |
| **flexgap**          | number  | `16`                     | Gap (in pixels) between slider items                                                                                                                                                       |
| **themeColor**       | string  | `#000000`                | color of elements like buttons and indicators in the slider                                                                                                                                |

## Demo

[![Edit react-jollof-slider-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/Owobilum/slider-demo/main?file=README.md&workspace=%257B%2522activeFilepath%2522%253A%2522%252Fsrc%252FApp.js%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clg6nesxp000x3b6nxzo2lnvb%2522%253A%257B%2522key%2522%253A%2522clg6nesxp000x3b6nxzo2lnvb%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522clg6nfdqj00703b6n4w5vdw0q%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522key%2522%253A%2522clg6nfba4003s3b6njz1hdnge%2522%252C%2522isMinimized%2522%253Atrue%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clg6nesxp000x3b6nxzo2lnvb%2522%252C%2522spacesOrder%2522%253A%255B%2522clg6nesxp000x3b6nxzo2lnvb%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)
