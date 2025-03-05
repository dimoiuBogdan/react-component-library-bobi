# React Component Library

A simple React component library built with TypeScript and Vite.

## Installation

```bash
npm install react-component-library
```

## Usage

```jsx
import { Button, Input } from 'react-component-library';

function App() {
  return (
    <div>
      <Button 
        label="Click Me" 
        onClick={() => console.log('Button clicked!')} 
      />
      
      <Input 
        placeholder="Enter text..." 
        onChange={(e) => console.log('Input changed:', e.target.value)} 
      />
    </div>
  );
}
```

## Components

### Button

A customizable button component.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | required | Button text |
| onClick | function | undefined | Click handler |
| type | 'button' \| 'submit' \| 'reset' | 'button' | Button type |
| disabled | boolean | false | Disabled state |
| className | string | '' | Additional CSS class |

### Input

A customizable input component.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| placeholder | string | '' | Input placeholder |
| value | string | '' | Input value |
| name | string | '' | Input name |
| type | string | 'text' | Input type |
| onChange | function | undefined | Change handler |
| disabled | boolean | false | Disabled state |
| className | string | '' | Additional CSS class |

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build
```

## License

MIT #
