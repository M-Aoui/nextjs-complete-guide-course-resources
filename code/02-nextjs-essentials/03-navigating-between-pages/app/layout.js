import './globals.css'

// important at least one ROOT layout, which comprises the various nested page.js's. Nested layouts may be added too.
// metadata takes care of Header block.
export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
