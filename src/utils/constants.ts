export const API_BASE_URL = 'https://frontend-take-home-service.fetch.com'

export const APP_TITLE = 'Homeward Hound'
export const APP_DESCRIPTION = 'Take home code challenge for Fetch'

export const BACK_LOGIN_TEXT = 'Go back to Login'

export const ERROR_PAGE_HEADING = ' Oops! Something went wrong'

export const IMG_PLACEHOLDER =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='

export const NOT_FOUND_TEXT = {
  HEADING: 'Page Not Found',
  SUBHEADING: `There's nothing to see here. We promise.`,
}

export const FOOTER = {
  MAIN_TEXT: 'Made by Rory for the Fetch take home challenge.',
  SUBTEXT: 'See it on',
  GITHUB_LINK: 'https://github.com/aurorahager/homeward-hound',
}

export const LOGIN_TEXT = {
  HEADING: 'Welcome!',
  SUBHEADING: 'Your perfect canine companion awaits',
  FORM_TEXT: 'Please enter your name and email to login.',
}

export const MODAL_MESSAGES = {
  HEADING: `It's a Match!`,
  TEXT: (name: string, age: number, breed: string): string =>
    `You and ${name} (a lovable ${age}-year-old ${breed}) are meant to be!`,
  SUB_TEXT: (zipCode: string): string =>
    ` Ready to meet your new best friend in ${zipCode}?`,
}

export const SORT_OPTIONS = [
  { value: 'breed:asc', label: 'Breed: A - Z' },
  { value: 'breed:desc', label: 'Breed: Z - A' },
  { value: 'age:asc', label: 'Age: Youngest - Oldest' },
  { value: 'age:desc', label: 'Age: Oldest - Youngest' },
  { value: 'name:asc', label: 'Name: A - Z' },
  { value: 'name:desc', label: 'Name: Z - A' },
]

export const VALIDATION_MESSAGES = {
  NAME: {
    REQUIRED: 'Name is required',
    NO_NUM: 'Name can only contain letters and hyphens',
  },
  EMAIL: { REQUIRED: 'Email is required', INVALID: 'Email is not valid' },
  AGE: {
    NO_LETTERS: '',
    NO_NEG: 'Age cannot be negative',
    MIN: 'Cannot be greater than max age',
    MAX: 'Cannot be less than min age',
  },
}
