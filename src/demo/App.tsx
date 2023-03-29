import './App.css'

import { JollofSlider, SliderItem } from '../component'

const items = [1, 2, 3, 4, 5]

function App() {
  return (
    <div className="App">
      <JollofSlider numberOfItems={items.length} isAutoplay isShowArrowNav={false} isShowDotNav>
        {items.map((text, i) => (
          <SliderItem key={i}>
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
