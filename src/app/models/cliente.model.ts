export class cliente{
    public idcliente:string;
    public numero:string;
    public alias:string;
    public provincia:string;
    public poblacion:string;
    public direccion:string;
    public comercial:string;
    public documento:string;
    public razon_social:string;
    public telefono:string;
    public email:string;
    public activo:boolean;
    public notas:string;

    constructor(json:any){
       this.idcliente = json.idcliente ?? ''; 
       this.numero = json.numero ?? ''; 
       this.alias = json.alias ?? ''; 
       this.provincia = json.provincia ?? ''; 
       this.poblacion = json.poblacion ?? ''; 
       this.direccion = json.direccion ?? ''; 
       this.comercial = json.comercial ?? ''; 
       this.documento = json.documento ?? ''; 
       this.razon_social = json.razon_social ?? ''; 
       this.telefono = json.telefono ?? ''; 
       this.email = json.email ?? ''; 
       this.activo = json.activo ?? ''; 
       this.notas = json.notas ?? ''; 
    }
    clean(){
        this.idcliente = ''; 
       this.numero = ''; 
       this.alias = ''; 
       this.provincia = ''; 
       this.poblacion = ''; 
       this.direccion = ''; 
       this.comercial = ''; 
       this.documento = ''; 
       this.razon_social = ''; 
       this.telefono = ''; 
       this.email = ''; 
       this.activo = false; 
       this.notas =''; 
    }
}