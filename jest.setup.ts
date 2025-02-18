import '@testing-library/jest-dom'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: jest.fn(),
})
