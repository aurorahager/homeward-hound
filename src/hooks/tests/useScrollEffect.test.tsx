import { renderHook, act } from '@testing-library/react'
import useScrollEffect from '@/hooks/useScrollEffect'

describe('useScrollEffect', () => {
  beforeEach(() => {
    window.scrollY = 0
  })

  it('should return initial background color', () => {
    const { result } = renderHook(() => useScrollEffect())
    expect(result.current).toBe('rgba(255, 255, 255, 0.05)')
  })

  it('should change background color when scroll is beyond threshold', () => {
    const { result } = renderHook(() => useScrollEffect(40))

    act(() => {
      window.scrollY = 100
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current).toBe('rgba(197, 229, 190, 0.35)')
  })

  it('should not exceed max opacity', () => {
    const { result } = renderHook(() => useScrollEffect(40))

    act(() => {
      window.scrollY = 1000
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current).toBe('rgba(197, 229, 190, 0.95)')
  })

  it('should revert to initial color when scroll is below threshold', () => {
    const { result } = renderHook(() => useScrollEffect(100))

    act(() => {
      window.scrollY = 50
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current).toBe('rgba(255, 255, 255, 0.05)')
  })

  it('should clean up event listener on unmount', () => {
    const spy = jest.spyOn(window, 'removeEventListener')
    const { unmount } = renderHook(() => useScrollEffect())

    unmount()

    expect(spy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
