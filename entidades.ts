import { type } from "os"

 //citas
 export type Cita= {
    id_cita:number,
    paciente:Paciente,
    estado_cita:String,//
    tratamiento:Tratamiento,//
    fecha:Date,
    horario_inicial:number,
    horario_final: number,
    profesional:Profesional,
    sucursal:Sucursal ,
    motivo_atencion:string,
    nombre_sillon:string,
    lugar_atencion:string,
    comentarios:string

}
export type Paciente={
    id_paciente:number,
    nombre_paciente:string,
    nombre_social:string
}
export type Tratamiento={
    id_tratamiento: number,
    nombre_tratamiento:string
}
//Pagos
export type Pagos = {
    id_pagos:number
    nombre_pagador:string,
    tipo_pagador:string,
    nombre_paciente:string,
    monto_pago:number,
    nombre_banco:string,
    fecha_recepcion:Date,
    fecha_vencimiento:Date,
    fecha_creacion:Date,
    rut_emisor:number    
}
//profesionales
export type Profesional= {
id_professional:number,
usuario:Usuario,
sucursal:Sucursal,
rut:number,
nombre:string,
apellido:string,
movil:string,
phone:string,
ciudad:string,
comuna:string,
domicilio:string,
email:string,  // validacion mail 
especialidad:Especialidad,
citas:Cita []
}

export type Usuario={
    id_usuario:string,
    nombre_usuario:string
}

export type Sucursal={
    id_sucursal:number,
    nombre_sucursal:string
}
export type Especialidad={
    id_especialidad:number,
    nombre_especialidad:string
}