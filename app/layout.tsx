import Link from 'next/link';

const Route = [{
  label: 'Home',
  route:'/'
},{
  label:'Landing',
  route:'/landing'
},{
  label:'Pagos',
  route:'/components/pagos'
},{
  label:'Profesional',
  route:'/components/profesional'
},{
  label:'Crear Perfil',
  route:'/components/crearPerfil'
}]

export default function RootLayout({children,}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <title>Hola Mundo</title>
      <body>
<header>
<nav>
<ul>
  {Route.map(({label, route}) => (
    <li key ={route}>
      <Link href={route}>
        {label}
      </Link>
    </li>
  ))}
</ul>
</nav>
</header>
        {children}
      </body>
    </html>
  )
}
