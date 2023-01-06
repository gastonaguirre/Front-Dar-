import { Search } from '@mui/icons-material';
import Link from 'next/link';
import SearchAppBar from './page';

const Route = [{
  label: 'Home',
  route:'/'
},{
  label:'Landing',
  route:'/landing'
},
 //{
//   label:'Profesional',
//   route:'/components/profesional'
// },{
//   label:'Crear Perfil',
//   route:'/components/crearPerfil'
// }
]

export default function RootLayout({children,}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      
      <body>
<header>
 <nav>
<SearchAppBar/>
</nav> 
</header>
          {children}
      <Link href='/components/citas'>
        Ver Cita 
      </Link>
   
  
      </body>
    </html>
  )
}
