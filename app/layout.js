import './globals.css';

export const metadata = {
  title: 'Piontech Systems - Coming Soon',
  description: 'Revolutionizing Technology Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}