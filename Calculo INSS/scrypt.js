var calcular = document.getElementById('btn')



function calcSalario(){
    var nome = document.getElementById('nome').value
    var vencimentos = document.getElementById('vencimentos').value
    var resultado = document.getElementById('resultado')

                  // * Desc INSS //

    if(nome !=='' && vencimentos !==''){
      var sal_liquido = vencimentos - desc_inss;
      
      if(vencimentos <= 1100.00){
          var desc_inss = parseFloat(vencimentos * 0.075)
  
      }else if(vencimentos <= 2203.48){
           desc_inss = parseFloat(vencimentos * 0.09)
  
      }else if(vencimentos <= 3305.22){
          desc_inss = parseFloat(vencimentos * 0.12)
  
      }else if( vencimentos >= 3305.23 || vencimentos > 6433.57){
          desc_inss = 751.99

      }
          sal_liquido = vencimentos - desc_inss;
       

               //! Desc  IR //

    
    
    if(vencimentos <= 1903.99 ){
        var desc_ir = 0
    }else if(vencimentos <= 2826.65){
        desc_ir = parseFloat(vencimentos * 0.075)-142.80

    }else if(vencimentos <= 3751.05){
        desc_ir = parseFloat(vencimentos * 0.15) -354.80
        
    }else if(vencimentos <= 4664.68){
        desc_ir = parseFloat(vencimentos * 0.225) - 636.13
    } else if (vencimentos > 4664.69){
        desc_ir = parseFloat(vencimentos * 0.275) -869.36
    }
    
        sal_liquido = parseFloat(vencimentos - desc_inss) - desc_ir;
    
    resultado.innerHTML = (`${nome} o seu salário mensal  é de ${sal_liquido.toFixed(2)} com desconto de INSS R$ ${desc_inss.toFixed(2)} e desconto IR  de R$ ${desc_ir.toFixed(2)}.`)
}else{
    resultado.innerHTML = 'Preencha todos os campos'
}
 
}

btn.addEventListener('click', calcSalario)


//! 3306---6434