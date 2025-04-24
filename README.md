# Hybrid Web2/Web3 Application

A single-page React application that combines traditional web authentication with cryptocurrency functionality. This app features two main sections:

1. **Profile Section**: Displays user profile information using Civic Auth for web2 authentication
2. **Web3 Section**: A cryptocurrency tip jar that allows users to receive Solana or Ethereum via QR codes

## Features

- User authentication via Civic Auth
- Profile management and display
- Cryptocurrency tip jar supporting both Solana and Ethereum
- QR code generation for easy crypto transfers
- Responsive design

## Technologies

- React 19
- TypeScript 5.7
- Vite 6
- Civic Auth React SDK
- Civic Wallet Provider
- Solana Web3.js
- Ethers.js
- QRCode.react

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd hybrid-web2-web3-app
```

2. Install dependencies
```bash
pnpm install
```

3. Create a `.env` file in the project root with your Civic Auth credentials:
```
VITE_CIVIC_CLIENT_ID=your_civic_client_id_here
```

4. Start the development server
```bash
pnpm dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React contexts for authentication and web3
├── pages/          # Main page components
├── App.tsx         # Main application component
├── main.tsx        # Application entry point
```

## Build

To build the application for production:

```bash
pnpm build
```

The build artifacts will be stored in the `dist/` directory.

## ESLint Configuration

This project uses ESLint with TypeScript integration. The configuration enables type-aware lint rules and includes React-specific plugins.

## License

This project is licensed under the MIT License - see the LICENSE file for details.