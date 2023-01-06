import Navegation from './components/navegation';
export default function RootLayout({ children, }: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Navegation />
        {children}
      </body>
    </html>
  )
}
