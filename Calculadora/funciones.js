import { suma,resta,mult,div } from "./calculadora";

function cudrado(x){
    return x*x;
}

const operacion=(v1,v2)=>{
    return suma(v1,v2)
} 

const cudrado=x=>x*x

function saludo(nombre="Fulano",hr){
    if(hr>=12){
        alert("buenas tardes"+nombre)
        return "buenas tardes"+nombre
    }else if(hr>=19){
        alert("buenas noches"+nombre)
        return "buenas noches"+nombre
        
    }else{
        alert("buenas dias"+nombre)
        return "buenos dias"+nombre
    }
}

const saludar=(nombre="Fulano",hr)=>{
    if(hr>=12&& hr<=18){
        alert("buenas tardes"+nombre)
        return "buenas tardes"+nombre
    }else if(hr>=19){
        alert("buenas noches"+nombre)
        return "buenas noches"+nombre
        
    }else{
        alert("buenas dias"+nombre)
        return "buenos dias"+nombre
    }
}
