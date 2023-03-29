import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
} from 'react'

type SliderContextType = {
  itemWidth: number
  translateValue: number
  isHovered: boolean
  setIsHovered: Dispatch<SetStateAction<boolean>>
}
const SliderContext = createContext<SliderContextType>({} as SliderContextType)

const SliderProvider: FC<PropsWithChildren<{ value: SliderContextType }>> = (props) => {
  const {
    children,
    value: { itemWidth, translateValue, isHovered, setIsHovered },
  } = props

  const memoValue = useMemo(
    () => ({
      itemWidth,
      translateValue,
      isHovered,
      setIsHovered,
    }),
    [isHovered, itemWidth, setIsHovered, translateValue],
  )

  return <SliderContext.Provider value={memoValue}>{children}</SliderContext.Provider>
}

const useSliderContext = () => {
  const sliderContext = useContext(SliderContext)

  if (sliderContext === undefined) {
    throw new Error('Slider context must be used within a Slider Context Provider')
  }

  return sliderContext
}

export { SliderProvider, useSliderContext }
