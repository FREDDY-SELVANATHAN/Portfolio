## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-freddy.git
cd portfolio-freddy
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables if needed.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-freddy/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── fonts/
│   └── models/
├── package.json
├── tailwind.config.js
└── next.config.js
```

## Technologies Used

- Next.js 14
- React Three Fiber
- Three.js
- Tailwind CSS
- Framer Motion
- TypeScript

## Customization

1. Replace the 3D models in the `public/models` directory with your own models
2. Update the project information in `app/projects/page.tsx`
3. Modify the color scheme in `tailwind.config.js`
4. Update the about section in `app/about/page.tsx`

## License

MIT 