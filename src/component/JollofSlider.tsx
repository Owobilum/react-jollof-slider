import {
  FC,
  forwardRef,
  memo,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  Ref,
  useEffect,
  useRef,
  useState,
} from 'react'

import { SliderProvider, useSliderContext } from './context'
import { useWindowDimensions } from './hooks'
import { BackwardIcon, ForwardIcon } from './icons'

const FLEX_GAP = 16
const ROOT_EL = 16
export type ItemWidthType = { xs?: number; sm?: number; lg?: number }
type directionType = 'forward' | 'backward'
export interface ISlider {
  children: ReactNode
  numberOfItems: number
  customWidth?: ItemWidthType
  isAutoplay?: boolean
  isShowDotNav?: boolean
  isShowArrowNav?: boolean
  forwardIcon?: ReactNode
  backwardIcon?: ReactNode
  autoPlayInterval?: number
  flexgap?: number
  themeColor?: string
}

export const SliderItem: FC<PropsWithChildren> = ({ children }) => {
  const { itemWidth, translateValue, setIsHovered } = useSliderContext()

  return (
    <div
      className="JS_item"
      style={{
        minWidth: `${itemWidth / ROOT_EL}rem`,
        transform: `translateX(-${translateValue / ROOT_EL}rem)`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  )
}

const Slider = forwardRef(function _Slider(
  props: ISlider,
  ref: Ref<HTMLDivElement> | undefined,
): ReactElement {
  const {
    children,
    numberOfItems,
    customWidth,
    isAutoplay = false,
    isShowDotNav = false,
    isShowArrowNav = true,
    forwardIcon,
    backwardIcon,
    autoPlayInterval = 3,
    flexgap,
    themeColor,
  } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const { width: screenWidth } = useWindowDimensions()
  const timeoutRef = useRef<NodeJS.Timeout | number>()

  const activePlayInterval =
    autoPlayInterval && autoPlayInterval >= 1 && autoPlayInterval <= 120
      ? autoPlayInterval * 1000
      : 3000

  let itemWidth: number
  if (!screenWidth || screenWidth >= 600) {
    itemWidth = customWidth?.lg || 490
  } else if (screenWidth >= 370) {
    itemWidth = customWidth?.sm || 340
  } else {
    itemWidth = customWidth?.xs || 240
  }

  const activeGap = (flexgap || flexgap === 0) && flexgap >= 0 ? flexgap : FLEX_GAP
  const translateValue = itemWidth * currentIndex + currentIndex * activeGap

  const handleChangeIndex = (direction: directionType, itemsLength: number) => {
    if (direction === 'forward') {
      setCurrentIndex((prev) => (prev < itemsLength - 1 ? prev + 1 : 0))
    } else if (direction === 'backward') {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : itemsLength - 1))
    }
  }

  useEffect(() => {
    if (!isAutoplay) return
    if (isAutoplay && isHovered) {
      clearInterval(timeoutRef.current)
      return
    }
    timeoutRef.current && clearInterval(timeoutRef.current)

    const timeoutId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % numberOfItems)
    }, activePlayInterval)

    timeoutRef.current = timeoutId

    return () => clearInterval(timeoutId)
  }, [numberOfItems, isAutoplay, activePlayInterval, isHovered])

  const renderNavDots = (): JSX.Element[] => {
    const dots = []
    for (let i = 0; i < numberOfItems; i++) {
      dots.push(
        <button
          aria-label={`view item ${i + 1}`}
          key={i}
          onClick={() => setCurrentIndex(i)}
          style={themeColor && currentIndex === i ? { backgroundColor: themeColor } : {}}
          className={`JS_nav_btn ${currentIndex === i && 'JS_active'}`}
        />,
      )
    }

    return dots
  }

  return (
    <SliderProvider value={{ itemWidth, translateValue, isHovered, setIsHovered }}>
      <div className="JS_slider_container" ref={ref}>
        <div style={{ gap: `${activeGap / ROOT_EL}rem`, display: 'flex' }}>{children}</div>
        {!!isShowDotNav && <div className="JS_nav_btn_container">{renderNavDots()}</div>}
        {!!isShowArrowNav && (
          <div className="JS_arrow_btn_container" style={themeColor ? { color: themeColor } : {}}>
            <button
              aria-label="backward"
              className="JS_icon_btn JS_grow JS_fit"
              onClick={() => handleChangeIndex('backward', numberOfItems)}
            >
              {backwardIcon ?? <BackwardIcon fill={themeColor} />}
            </button>
            <button
              aria-label="forward"
              className="JS_icon_btn JS_grow JS_fit"
              onClick={() => handleChangeIndex('forward', numberOfItems)}
            >
              {forwardIcon ?? <ForwardIcon fill={themeColor} />}
            </button>
          </div>
        )}
      </div>
    </SliderProvider>
  )
})

export default memo(Slider)
