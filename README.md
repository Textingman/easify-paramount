# Gulf Coast Capital

Investment advisory website for Gulf Coast Capital, built with Next.js.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run build
```

## Configuration

All brand-specific settings are in `config/site.ts`:

- `brandName` - Display name of the brand
- `legalEntityName` - Full legal entity name
- `address` - Business address
- `supportEmail` - Support email address
- `smsUseCase` - SMS use case for 10DLC compliance

## Pages

- `/` - Home page
- `/about` - About page
- `/contact` - Contact page with SMS opt-in form
- `/privacy` - Privacy Policy
- `/terms` - Terms & Conditions
