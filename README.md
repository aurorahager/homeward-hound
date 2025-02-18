# Homeward Hound

Homeward Hound is an application for people to find a match to an adoptable dog.
Made for the Fetch take home challenge

[Live Site](https://homeward-hound.vercel.app/)

## Table of Contents
1. [Description](#description)
2. [Technology](#technology)
3. [Setup](#setup)
4. [Tests](#tests)
5. [Next Steps](#next-steps)
6. [Final Thoughts](#final-thoughts)

## Description
A user is able to log in using a name and email. Once logged in they are able to view ans filter available dogs. They can filter by breed or age and can sort dogs by name, breed or age.
When a user finds a dog they like, they can favorite the dog. After two or more favorites they have the opportunity to generate a match based on their selection.



![adb49eee-a09a-4c53-9170-809d6685706a](https://github.com/user-attachments/assets/470f3b3d-2317-4f48-b4a8-c3d73249666d)


![0f1c0d8f-c316-4ae4-b644-143217289c3f](https://github.com/user-attachments/assets/29adec50-a1a5-4b3a-9ad2-46f398fe8049)




## Technology

- **Next.js** – Framework for React
- **React** – JavaScript library for building user interfaces
- **TypeScript** – A statically typed superset of JavaScript
- **Jest** – JavaScript testing framework
- **Axios** – Promise-based HTTP client
- **SWR** – React hooks library for data fetching
- **Material UI** – React component library for building UI
- **Emotion** – Library for writing CSS styles with JavaScript
- **React Hook Form** – Library for managing form state and validation in React
- **Yup** – JavaScript schema validator for object shapes, used with React Hook Form for validation
- **ESLint** – Linting tool for JavaScript and TypeScript

## Setup

To run this project locally:
1. Clone the repository:
```
git clone https://github.com/aurorahager/homeward-hound.git
```
2. Navigate into the project directory
```
cd homeward-hound
```
3. Install the dependencies
```
npm install
```
4. Run the development server
```
npm run dev
```

That's it! Now you can open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Tests

to run tests on this project:

```
npm run test
```

## Next Steps
### Known Bugs
- Mobile responsiveness does not account for all viewports
- There is not view for when there are no search results
- User authentication does not persist on reload, despite their cookies still being valid
- Text cuts of for dogs with longer breed names
### Future Features
- View to see and change all favorited dogs
- Search by location



## Final Thoughts
Due to this being a code challenge I would say that, were it a real app, it would probably be a bit over engineered for its size.
Given the small size, nearly the entirety of the app was required to be client side components and therefore very little server-side rendering is happening.
Overall a fun project.
I also enjoyed being able to just look at dogs, always a plus.

