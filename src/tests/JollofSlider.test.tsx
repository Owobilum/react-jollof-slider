import { act, fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { JollofSlider, SliderItem } from '../component'

const items = [1, 2, 3, 4, 5]

function renderComponent() {
  render(
    <JollofSlider numberOfItems={items.length}>
      {items.map((item) => (
        <SliderItem key={item}>{item}</SliderItem>
      ))}
    </JollofSlider>,
  )
}
function renderComponentWithDotNav() {
  render(
    <JollofSlider numberOfItems={items.length} isShowArrowNav={false} isShowDotNav>
      {items.map((item) => (
        <SliderItem key={item}>{item}</SliderItem>
      ))}
    </JollofSlider>,
  )
}
function renderComponentWithAutoplay() {
  render(
    <JollofSlider numberOfItems={items.length} isAutoplay autoPlayInterval={1}>
      {items.map((item) => (
        <SliderItem key={item}>{item}</SliderItem>
      ))}
    </JollofSlider>,
  )
}

function renderComponentWithIcons() {
  render(
    <JollofSlider
      numberOfItems={items.length}
      forwardIcon={<span>Advance</span>}
      backwardIcon={<span>Retreat</span>}
    >
      {items.map((item) => (
        <SliderItem key={item}>{item}</SliderItem>
      ))}
    </JollofSlider>,
  )
}

describe('JollofSlider with default props', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })
  it('renders the slider', () => {
    renderComponent()
    expect(screen.getByText('2')).toBeInTheDocument()
  })
  it('moves the items forward on direction click', () => {
    renderComponent()
    const nextButton = screen.getByRole('button', { name: /forward/i })
    const itemTwo = screen.getByText('2')

    fireEvent.click(nextButton)
    expect(itemTwo).toHaveStyle({ transform: 'translateX(-31.625rem)' })
  })
  it('moves the items backward on direction click', () => {
    renderComponent()
    const backButton = screen.getByRole('button', { name: /backward/i })
    const itemTwo = screen.getByText('2')

    fireEvent.click(backButton)
    expect(itemTwo).toHaveStyle({ transform: 'translateX(-126.5rem)' })
  })
})

describe('JollofSlider with dotnav', () => {
  it('renders dot navigation', () => {
    renderComponentWithDotNav()
    expect(screen.getAllByRole('button', { name: /view item/i })).toHaveLength(5)
  })
  it('moves items when dot nav is clicked', () => {
    renderComponentWithDotNav()
    const itemTwo = screen.getByText('1')
    const itemFourButton = screen.getByRole('button', { name: 'view item 4' })

    fireEvent.click(itemFourButton)
    expect(itemTwo).toHaveStyle({ transform: 'translateX(-94.875rem)' })
  })
})

describe('Jollof slider with autoplay', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })
  it('autoplays slider', async () => {
    renderComponentWithAutoplay()
    const itemTwo = screen.getByText('2')

    expect(itemTwo).toHaveStyle({ transform: 'translateX(-0rem)' })

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(itemTwo).toHaveStyle({ transform: 'translateX(-31.625rem)' })
  })
  it('pauses autoplay on item hover', async () => {
    renderComponentWithAutoplay()
    const itemTwo = screen.getByText('2')

    expect(itemTwo).toHaveStyle({ transform: 'translateX(-0rem)' })

    fireEvent.mouseEnter(itemTwo)

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(itemTwo).toHaveStyle({ transform: 'translateX(-0rem)' })
  })
})

describe('JollofSlider with custom icons', () => {
  it('renders custom forward icon component', () => {
    renderComponentWithIcons()
    const nextButton = screen.getByRole('button', { name: /forward/i })
    expect(within(nextButton).getByText(/advance/i)).toBeInTheDocument()
  })
  it('renders custom backward icon component', () => {
    renderComponentWithIcons()
    const backButton = screen.getByRole('button', { name: /backward/i })
    expect(within(backButton).getByText(/retreat/i)).toBeInTheDocument()
  })
})
