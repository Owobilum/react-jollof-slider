import './App.css'

import {JollofSlider, SliderItem} from './component'

const items = [1,2,3,4,5]
function App() {

  return (
    <div className="App">
        Hello
        <JollofSlider items={items} isAutoplay isShowArrowNav={false} isShowDotNav>
      {
        items.map((t,i)=>(
          <SliderItem key={i}>
              <div style={{backgroundColor:'#000',color:'#c4c4c4', width:'100%', height:'100px', padding: '40px'}}>
                  {t}
              </div>
          </SliderItem>
        ))
      }
     </JollofSlider>
    </div>
  )
}

export default App
