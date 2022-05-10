# Frontend

### Setup and Running

1. Copy the file `.env.example` into `.env`. Change `NEXT_PUBLIC_API_URL` into your backend instance's url
2. Install dependencies: `yarn`
3. Run application locally: `yarn dev`

For production:

- `yarn build`
- `yarn start`

### Architecture

To start with, this React app uses the following tools/libraries:

- **Typescript** - Using typescript makes the runtime less error-prone through the use of types and static analysis
- **[Next.js](https://nextjs.org/)** - Provides great tooling and simplicity for React apps, while having minimal footprint. Brings better developer experience than `create-react-app` out of the box
- **[Recoil.js](https://recoiljs.org/)** - State management library with simple hooks-based API and out of the box support for code splitting 
- **[Material UI](https://mui.com/)** - UI library

#### Application structure

While this app has reasonably simple functionality, it's structured in a way that it will be easy to add more features while keeping code maintainability to the maximum. The directory structure consists of:

- **modules** - are vertical slices of functionality. Each module:
  - is scoped to a single feature (SRP).
  - has its own directory and contains components, hooks, state, and other related files.   
  - can access and use other modules.
  - has a public interface (`index.ts`) that exports publicly-accessible parts of the module. non-publicly-accessible parts can only be accessed internally within the module itself.
  
- **pages** - contain page components that are mapped to routes. We can think of pages as component files containing presentational markup and where **modules** are composed

### Further enhancements / Roadmap

- [ ] API throttling/debounce (to improve performance)
- [ ] Integration testing (using `react-testing-library`)
- [ ] end-to-end testing using `cypress`
- [ ] Prevent FOUC (flash of unstyled content) and commulative layout shift (CLS) on initial load
