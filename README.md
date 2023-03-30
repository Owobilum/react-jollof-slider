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

| Name                 | Type    | Default Value            | Description                                                                                                                                                                             |
| -------------------- | ------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \*_numberOfItems_    | number  |                          | Number of items to be displayed in the slider                                                                                                                                           |
| **customWidth**      | object  | `{xs:240,sm:340,lg:490}` | The width of the slider component at different screen szies. lg: min-width(600px), sm: min-width(370px), xs: screens below 370px width . The width values should be provided in pixels. |
| **isAutoplay**       | boolean | `false`                  | Add autoplay functionality                                                                                                                                                              |
| **isShowDotNav**     | boolean | `false`                  | Show navigation with dots which also indicate current slider position                                                                                                                   |
| **isShowArrowNav**   | boolean | `true`                   | Show buttons for moving slides forward and backward                                                                                                                                     |
| **children**         | node    | `null`                   | slider items                                                                                                                                                                            |
| **forwardIcon**      | node    | `undefined`              | Icon for the forward navigation button                                                                                                                                                  |
| **backwardIcon**     | node    | `undefined`              | SIcon for the backward navigation button                                                                                                                                                |
| **autoPlayInterval** | number  | `3`                      | Interval (in seconds) between slide changes during autoplay.                                                                                                                            |
| **flexgap**          | number  | `16`                     | Gap (in pixels) between slider items                                                                                                                                                    |
| **themeColor**       | string  | `#000000`                | color of elements like buttons and indicators in the slider                                                                                                                             |
