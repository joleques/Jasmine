
var objTeste = {
    
    setarValorNoImput : function(idCampo,valor){
        $(idCampo).val(valor);
    },
    
    setarValorNoText : function(idCampo,valor){
        $(idCampo).text(valor);
    },
    
    setarValorNoHtml : function(idCampo,valor){
        $(idCampo).html(valor);
    },
    
    calculadora : function (tipo,primeiro,segundo){
        var retorno = null;
        retorno = this.executaCalculo(tipo, primeiro, segundo);
        this.setarValorNoText("#mensagem",retorno);    
        return retorno;
    },    
    executaCalculo : function (tipo,primeiro,segundo){        
        switch(tipo){
            case 'soma' :
                return this.soma(primeiro,segundo);
            case 'subtracao' :
                return this.subtracao(primeiro,segundo);
        }
        return null;
    },

    soma : function (primeiro,segundo){
        if(this.ehValido(primeiro) && this.ehValido(segundo)){
            return primeiro+segundo;
        }
        return 0;
    },
    subtracao : function (primeiro,segundo){
        if(this.ehValido(primeiro) && this.ehValido(segundo)){
            return primeiro-segundo;
        }
        return 0;
    },

    ehValido : function (valor){
        return (valor != undefined && valor != '');
    },
    
    ajaxBuscarEstabelecimentos : function(){
        var i = 0;
        var li;
        for(i; i < 20; i++){
            li = "<li>cnpj numero "+i+"</li>";
            $('#lista-estab').append(li);
        }
    }
    
    
};


