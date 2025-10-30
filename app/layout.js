export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {children}
        </main>
      </body>
    </html>
  );
}