describe('Exibicao da mensagem de boas-vindas', function(){
    beforeEach(function(){
        setFixtures('<div id="mensagem" />');
        this.mensagem = $('#mensagem');
    });
  
    afterEach(function(){
        this.horas = [];
    });

    it("Deve exibir 'Bom-dia!' entre 5:00 e 11:59", function(){
        this.horas = ['05:00', '09:33', '10:22', '11:59'];
        for(i in this.horas){
            saudacao(this.horas[i]);
            expect(this.mensagem.text()).toEqual('Bom-dia!');
        }
    });

    it("Deve exibir 'Boa-tarde!' entre 12:00 e 17:59", function(){
        this.horas = ['15:00', '13:22', '17:59'];
        for(i in this.horas){
            saudacao(this.horas[i]);
            expect(this.mensagem.text()).toEqual('Boa-tarde!');
        }
        
    });

    it("Deve exibir 'Boa-noite!' entre 18:00 e 23:59", function(){
        this.horas = ['18:00', '20:22', '23:59'];
        for(i in this.horas){
            saudacao(this.horas[i]);
            expect(this.mensagem.text()).toEqual('Boa-noite!');
        }        
    });
    
    it("Deve exibir, por padrão, a mensagem de acordo com a hora do cliente", function(){
        var data = new Date;
        data.setTime(data.getTime()); 
        var hora = data.getHours();

        saudacao();

        var texto = this.mensagem.text();
        if(hora < 5) 
            expect(texto).toEqual('Dormir é para os fracos!');
        if(hora < 12)
            expect(texto).toEqual('Bom-dia!');
        else if(hora < 18)
            expect(texto).toEqual('Boa-tarde!');
        else
            expect(texto).toEqual('Boa-noite!');
    });
});

describe('Quando eu passar o soma para calculadora', function(){
    
    beforeEach(function(){
        setFixtures('<div id="mensagem" />');
        this.mensagem = $('#mensagem');
    });
  
    afterEach(function(){
        this.primeiroValor = null;
        this.segundoValor = null;
    });
    
    it("passando 1 e 2! deve retornar 3", function(){
        var retorno = 0;        
        this.primeiroValor = 1;
        this.segundoValor = 2;
        retorno = objTeste.calculadora('soma',this.primeiroValor,this.segundoValor);        
        expect(retorno).toEqual(3);
        expect('3').toEqual(this.mensagem.text())
    });
    
    it("passando valores vazio! deve retornar 0", function(){
        var retorno = 0;        
        this.primeiroValor = '';
        this.segundoValor ='';
        retorno = objTeste.calculadora('soma',this.primeiroValor,this.segundoValor);        
        expect(retorno).toEqual(0);
        expect('0').toEqual(this.mensagem.text())
    });
    
    it("passando valores undefined! deve retornar 0", function(){
        var retorno = 0;        
        retorno = objTeste.calculadora('soma');        
        expect(retorno).toEqual(0);
        expect('0').toEqual(this.mensagem.text())
    });
    
    it("passando 1 e -2! deve retornar -1", function(){
        var retorno = -1;        
        this.primeiroValor = 1;
        this.segundoValor =-2;
        retorno = objTeste.calculadora('soma',this.primeiroValor,this.segundoValor);        
        expect(retorno).toEqual(-1);
        expect('-1').toEqual(this.mensagem.text())
    });
    
});

describe("Quando eu chamar a calculadora", function(){
    
    beforeEach(function(){
        
    });
  
    afterEach(function(){
        this.primeiroValor = null;
        this.segundoValor = null;
    });
    
    it('Tem que passar uma vez pela soma!', function(){
        this.primeiroValor = 1;
        this.segundoValor = 2;
        spyOn(objTeste, 'soma');
        objTeste.calculadora('soma',this.primeiroValor,this.segundoValor);   
        expect(objTeste.soma).toHaveBeenCalled();
    });
    
    it('Tem que passar pela soma com os parametros 1 e 2!', function(){
        this.primeiroValor = 1;
        this.segundoValor = 2;
        spyOn(objTeste, 'soma');
        objTeste.calculadora('soma',this.primeiroValor,this.segundoValor);   
        expect(objTeste.soma).toHaveBeenCalledWith(this.primeiroValor,this.segundoValor);
    });
    
    it('Não deve passar pela subtração!', function(){
        this.primeiroValor = 1;
        this.segundoValor = 2;
        spyOn(objTeste, 'subtracao');
        objTeste.calculadora('soma',this.primeiroValor,this.segundoValor);   
        expect(objTeste.subtracao).not.toHaveBeenCalled();
    });
});

