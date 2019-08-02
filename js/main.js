function montaOpcoes(){
    var html_menu;
    var item_menu;
    $.map(Object.keys(menu_items), function(menu){
        html_menu = "";
        item_menu = "";
        item_menu = '<li class="list-group-item active">'+ menu +'</li>'
        $.map(menu_items[menu], function(item){
            item_menu += '<a href="'+ item.link +'" class="list-group-item list-group-item-action">'+ item.title +'</a>';
        });
        html_menu += '<div class="col-md-2"><ul class="list-group">' + item_menu + '</ul></div>';
        $("#menu_items").append(html_menu);
    });
}