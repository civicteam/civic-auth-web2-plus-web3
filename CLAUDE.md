# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production (runs TypeScript build and Vite build)
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview production build

## Project Overview
This is a hybrid web2/web3 application built with React and TypeScript. It features:
- User profile management using Civic Auth
- Cryptocurrency tip jar for Solana and Ethereum using QR codes
- Integration with Civic's embedded wallet provider

## Code Style Guidelines
- **TypeScript**: Strict mode enabled with noUnusedLocals, noUnusedParameters, noFallthroughCasesInSwitch
- **Imports**: Group imports by external packages first, then internal modules, then assets/CSS
- **Components**: Use functional components with React hooks
- **Naming**: Use PascalCase for components/interfaces, camelCase for variables/functions
- **Formatting**: Use JSX fragments (<>) for multiple elements, ES6 arrow functions for handlers
- **Error Handling**: Prefer explicit error handling with try/catch where appropriate
- **Types**: Use explicit return types on functions, prefer type inference for variables
- **File Structure**: Component files should export a single default component matching filename
- **Web3**: Keep crypto-specific logic in dedicated hooks and utilities
- **Environment Variables**: Use VITE_CIVIC_CLIENT_ID for Civic authentication

The project uses Vite, React 19, TypeScript 5.7, and ESLint 9 with Civic Auth and web3 libraries.