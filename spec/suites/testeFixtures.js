

describe('Quando eu passar valor', function(){
    
    beforeEach(function(){
        setFixtures('<input id="campoValor" /> '+
            '<div id="campoValorHtml" />'
            );
        this.campo = $('#campoValor');
        this.campoHtml = $('#campoValorHtml');
    });
  
    afterEach(function(){
        this.valor = null;
    });
    
    it("deve setar no imput", function(){
        this.valor = 'Teste de Valor no Imput!';
        objTeste.setarValorNoImput('#campoValor',this.valor);
        expect(this.valor).toEqual(this.campo.val())
    });
    
    it("deve setar no text", function(){
        this.valor = 'Teste de Valor no Text!';
        objTeste.setarValorNoText('#campoValor',this.valor);
        expect(this.valor).toEqual(this.campo.text())
    });
    
    it("deve setar no html", function(){
        this.valor = 'Teste de Valor no HTML!';
        objTeste.setarValorNoHtml('#campoValorHtml',this.valor);
        expect(this.valor).toEqual(this.campoHtml.html())
    });
});

jasmine.getFixtures().fixturesPath = '../spec/fixtures/'; 

describe('Exibição dos últimos Estabelecimentos carregados', function(){
    beforeEach(function(){
        loadFixtures('listaEstabelecimento.html');
    });

    it('Deve carregar na primeira página', function(){
        expect($('#carrega-estab').data('pagina')).toEqual(1);
    });

    it('Deve carregar os 20 estabelecimentos', function(){
        runs(function(){
            objTeste.ajaxBuscarEstabelecimentos();
        });
        waits(150);
        runs(function(){
            expect($('#lista-estab li').length).toEqual(20);
        });
    });
});

