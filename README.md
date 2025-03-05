# React Component Library

A modern, lightweight React component library built with TypeScript and Vite, designed for easy integration into React applications.

[![npm version](https://img.shields.io/npm/v/react-component-library-bobi.svg)](https://www.npmjs.com/package/react-component-library-bobi)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- 🚀 Lightweight and optimized bundle
- 📦 Tree-shakeable components
- 🔧 TypeScript support with full type definitions
- 🎨 Customizable styling
- ⚡ Built with Vite for fast development and optimized builds

## Installation

```bash
# npm
npm install react-component-library-bobi

# yarn
yarn add react-component-library-bobi

# pnpm
pnpm add react-component-library-bobi
```

## Usage

```tsx
import React from "react";
import { Button, Input } from "react-component-library-bobi";

function App() {
  return (
    <div>
      <Button label="Click Me" onClick={() => console.log("Button clicked!")} />

      <Input
        placeholder="Enter text..."
        onChange={(e) => console.log("Input changed:", e.target.value)}
      />
    </div>
  );
}
```

## Components

### Button

A customizable button component.

```tsx
import { Button } from "react-component-library-bobi";

<Button label="Submit" onClick={handleSubmit} disabled={isLoading} />;
```

#### Props

| Prop      | Type                            | Default   | Description          |
| --------- | ------------------------------- | --------- | -------------------- |
| label     | string                          | required  | Button text          |
| onClick   | function                        | undefined | Click handler        |
| type      | 'button' \| 'submit' \| 'reset' | 'button'  | Button type          |
| disabled  | boolean                         | false     | Disabled state       |
| className | string                          | ''        | Additional CSS class |
| children  | ReactNode                       | undefined | Child elements       |

### Input

A customizable input component.

```tsx
import { Input } from "react-component-library-bobi";

<Input
  placeholder="Username"
  value={username}
  onChange={handleUsernameChange}
  name="username"
/>;
```

#### Props

| Prop        | Type     | Default   | Description          |
| ----------- | -------- | --------- | -------------------- |
| placeholder | string   | ''        | Input placeholder    |
| value       | string   | ''        | Input value          |
| name        | string   | ''        | Input name           |
| type        | string   | 'text'    | Input type           |
| onChange    | function | undefined | Change handler       |
| disabled    | boolean  | false     | Disabled state       |
| className   | string   | ''        | Additional CSS class |

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run example app
npm run start:example

# Build the library
npm run build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
