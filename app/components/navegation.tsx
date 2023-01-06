import Link from "next/link"

const Route = [{
    label: 'Home',
    route:'/'
  },{
    label:'Landing',
    route:'/landing'
  }
]
export default function Navegation(){
        return (   
           <Link href='/components/citas'>
                  Ver Cita 
             </Link>
        
      )
    }
    