function montaOpcoes(){
    var html_menu;
    var item_menu;
    $.map(Object.keys(menu_items), function(menu){
        html_menu = "";
        item_menu = "";
        item_menu = '<li class="list-group-item active">'+ menu +'</li>'
        $.map(menu_items[menu], function(item){
            item_menu += '<a href="'+ item.link +'" class="list-group-item list-group-item-action l-i">'+ item.title +'</a>';
        });
        html_menu += '<div class="col-md-2"><ul class="list-group" data-list="'+ menu +'">' + item_menu + '</ul></div>';
        $("#menu_items").append(html_menu);
    });
}

function busca(element){
    var valorBusca = $(element).val().toLowerCase();
    $(".l-i").css("display", "none");
    $("#menu_items").find(".l-i").each(function(){
        var str = $(this).text().toLowerCase();
        str = removerAcentos(str);
        valorBusca = removerAcentos(valorBusca);
        if(str.includes(valorBusca)){
            $(this).css("display", "block");            
        }
    });
}

function removerAcentos( newStringComAcento ) {
    var string = newStringComAcento;
    var mapaAcentosHex 	= {
        a : /[\xE0-\xE6]/g,
        e : /[\xE8-\xEB]/g,
        i : /[\xEC-\xEF]/g,
        o : /[\xF2-\xF6]/g,
        u : /[\xF9-\xFC]/g,
        c : /\xE7/g,
        n : /\xF1/g
    };
    for ( var letra in mapaAcentosHex ) {
        var expressaoRegular = mapaAcentosHex[letra];
        string = string.replace( expressaoRegular, letra );
    }
    return string;
}