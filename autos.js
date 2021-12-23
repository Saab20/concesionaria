let autos=require('./listaautos/lista')
let personas=require('./listapersonas/personas')

const concesionaria = {
  autos: autos,
  personas:personas,

  buscarAuto: function(patente) {
    for (let i = 0; i < autos.length; i++) {
      if (autos[i].patente == patente) {
        return autos[i]
      }
      else{

        if (patente != autos[i].patente && i == (autos.length - 1)) 
          return null;
        
          
      }
    }
    
  },
  venderAuto: function (patente) { 
    let buscar = this.buscarAuto(patente);
   if (buscar ){
      buscar.vendido = true  ;
   }

    return buscar  
      
   },
   autosParaLaVenta:function(autos){
    let autovendido= this.autos.filter(function(elemento){
       return  elemento.vendido!=true
    })
    return autovendido
   },

   autosNuevos : function(autos){
    let  auto0km = this.autosParaLaVenta().filter(function(elemento){
       return elemento.km<100
    })
    return auto0km
    },

    listaDeVentas: function listaDeVentas(){
      let vendidos = concesionaria.autos.filter(function(auto){
         return auto.vendido == true;
      })
      let lista = []
      vendidos.forEach (function(valor){
         lista.push(valor.precio)
      })
      return lista;
      },
      totalDeVentas: function(){
        let total=0
        let ventas=this.listaDeVentas()
          if (ventas.length!=0){
             total=ventas.reduce(function(a, e){
                return a+e
             })
          }   
         return total   
         },

         puedeComprar: function(autos,personas){
          if(personas.capacidadDePagoTotal>=autos.precio 
            && persona.capacidadDePagoEnCuotas>auto.precio/autos.cuotas){
             return true
          }
           else{
              return false
           }
          },

          autosQuePuedeComprar:function(persona){
            let autoparavender= this.autosParaLaVenta()
         let x=[]
          for (let i=0;i<=autoparavender;i++){
             if(this.puedeComprar(i,persona)==true){
                x.push([i])
             }
         
          }
         
          return x
         }
      
  }
console.log ("BUSCO AUTO POR PATENTE")  
console.log(concesionaria.buscarAuto("JJK116"))
console.log ("VENDO EL AUTO POR PATENTE")  
console.log(concesionaria.venderAuto('APL123'))
console.log ("BUSCO AUTO NO VENDIDOS") 
console.log(concesionaria.autosParaLaVenta())
console.log ("BUSCO AUTO NUEVOS NO VENDIDOS") 
console.log(concesionaria.autosNuevos())
console.log ("LISTA DE VENTAS") 
console.log(concesionaria.listaDeVentas())
console.log ("TOTAL VENTAS")
console.log(concesionaria.totalDeVentas())
console.log ("PUEDE COMPRAR")
console.log(concesionaria.puedeComprar("","mario"))
console.log ("AUTOS QUE PUEDE COMPRAR")
console.log(concesionaria.autosQuePuedeComprar("mario"))

