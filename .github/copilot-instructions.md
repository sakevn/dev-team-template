# AI Agent Instructions for React Tutorial Project

## Project Overview
This is a comprehensive React tutorial project built with Vite, containing multiple example implementations of React concepts and patterns. Each directory represents a separate lesson or concept.

## Key Architecture Patterns

### Component Organization
- Each tutorial section is organized in numbered directories (e.g., `14.1 props-part1/`, `20.2 useContext/`)
- Components are typically located in `src/components/` within each section
- Feature-specific components are grouped in subdirectories (e.g., `ShopUseContext/`)

### State Management
1. Context API Pattern (`20.2 useContext/`, `20.3 useContext - otherway/`):
```jsx
// Create context
const CartContext = createContext();

// Provider pattern with state
function CartContextProvider({children}) {
  const [state, setState] = useState(initialValue);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
```

2. Component State Pattern:
- useState for local component state
- Props for parent-child communication
- Context for global state management

### Styling Approaches
- CSS Modules (`17.4 CSS module/`)
- Styled Components (`17.5 CSS Styled components/`)
- Inline styling (`17.3 CSS - Inline styling/`)

## Development Workflow

### Project Setup
```bash
npm create vite@latest  # Create new project
cd [project-name]
npm install
npm run dev            # Start development server
```

### Common Patterns
1. React Hooks Usage:
- useEffect for side effects
- useContext for global state
- useCallback for memoized callbacks
- useMemo for expensive computations

2. Component Structure:
```jsx
import {useState, useEffect} from 'react';

export default function ComponentName({props}) {
  const [state, setState] = useState(initialValue);
  
  // Effects and handlers here
  
  return (
    <div>
      {/* JSX here */}
    </div>
  );
}
```

## Testing
- Test files should be co-located with components
- Use `.test.jsx` or `.spec.jsx` extension
- Example test structure in `26.0-react-app-start/`

## Best Practices
1. Always use named exports for components
2. Implement proper prop-types validation
3. Follow the container/presentational pattern where applicable
4. Use hooks for state management and side effects
5. Keep components focused and single-responsibility