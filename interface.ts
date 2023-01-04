 //citas
 export interface Appointment{
    id_appoinment:number,
    name_pacient: String,
    social_name:String,
    estado_cita:String,
    nombre_tratamiento:String,
    date:Date,
    inicial_hour:number,
    final_hour: number,
    id_profesional :number,
    nombre_dentista:string,
    id_sucursal:number,
    name_sucursal:string,
    motivo_atencion:string,
    nombre_sillon:string,
    lugar_atencion:string,
    comentarios:string

}
//Pagos
export interface Payment {
    id_payment:number
    nombre_pagador:string,
    tipo_pagador:string,
    nombre_paciente:string,
    monto_pago:number,
    nombre_banco:string,
    fecha_recepcion:Date,
    fecha_vencimient:Date,
    fecha_creacion:Date,
    rut_emisor:number    
}
//profesionales
export interface Professional {
id_professional:number,
usuario:usuario,
sucursal:sucursal,
rut:number,
nombre:string,
apellido:string,
movil:string,
phone:string,
city:string,
comuna:string,
address:string,
email:string,
especialidad:especialidad,
citas:Appointment[]
getcitas(): Appointment[]
}

export interface usuario{
    id_usuario:string,
    nombre_usuario:string
}

export interface sucursal{
    id_sucursal:number,
    nombre_sucursal:string
}
export interface especialidad{
    id_especialidad:number,
    nombre_especialidad:string
}