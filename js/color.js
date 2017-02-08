var COLORS=['red', 'green', 'blue'];
var current_recipe = undefined;
var current_title = undefined;

function tohex(x) {
    x = parseInt(x);
    if (x > 255) {
        ret = 'ff';
    } else {
        ret = x.toString(16);
        if (ret.length < 2) ret = '0' + ret;
    }

    return ret;
}

function tocolor(rgb) {
    return '#' + rgb.map(c => { return tohex(c); }).join('');
}

function to_init_color(color, value) {
    switch(color) {
        case 'red':
            return tocolor([value, 0, 0]);
        case 'green':
            return tocolor([0, value, 0]);
        case 'blue':
            return tocolor([0, 0, value])
        default:
            return undefined;
    }
}

function value_to_range(v) { return v < 10 ? 0 : Math.floor((v-10)/25); }
function range_to_value(r) { return 25*r + 10; }

function sel_clicked() {
    // switch border
    $(this).parent().find(".bordered").removeClass('bordered');
    $(this).addClass('bordered');

    // get wish values
    var wish = COLORS.map(function (color) {
        return $('#' + color + '-selector').find(".bordered")[0].id.replace(color, '');
    })

    // recolor
    wcolor = tocolor(wish.map(c => { return range_to_value(c);}));
    $('#cc').css('background-color', wcolor)
            .prop('title', wcolor);

    // if current recipe hit - display color title
    console.log(wish + ' ' + current_recipe + ' ' + current_title);
    if ( current_recipe &&
         wish[0] == current_recipe[0] &&
         wish[1] == current_recipe[1] &&
         wish[2] == current_recipe[2]) {

        $('.colorname').text(current_title);
        $('.colorname').fadeIn(1000);

    }
        
}

function create_selectors() {
    COLORS.forEach( color => {
        var div_html = ''

        for (i=0; i<10; i++) {
            div_html += '<div class="selelem" id="' + color + i +'"></div>'
        }

        $('#' + color + '-selector').html(div_html)

        for (i=0; i<10; i++) {
            $('#'+ color +i).css('background-color', to_init_color(color, range_to_value(i)));
        }

        $('#' + color +'0').addClass('bordered');
    })
}

function get_sample_by_id(id) { return SAMPLES.find( item => {return item.id == id} ) }

function set_sample_data(sample_id, sample) {
    $(sample_id).css('background-color', sample.color)
                .prop('title', sample.id)
                .data('cid', sample.id);
}

function create_samples() {
    for (i=0; i<CURR_SAMPLES.length; i++) {
        sample = get_sample_by_id(CURR_SAMPLES[i]);
        set_sample_data('#sample'+i, sample);
    }
}

function create_recipe(o) {
    var recipe = '<div class="recipe_circle" style="background-color:#cc0000; background:radial-gradient(#ff0000, #7f0000)"><div class="recipe_symbol">' + value_to_range(o.colors[0]) + '</div></div>+'
    recipe += '<div class="recipe_circle" style="background-color:#00cc00; background:radial-gradient(#00ff00, #007f00)"><div class="recipe_symbol">' + value_to_range(o.colors[1]) + '</div></div>+'
    recipe += '<div class="recipe_circle" style="background-color:#0000cc; background:radial-gradient(#0000ff, #00007f)"><div class="recipe_symbol">' + value_to_range(o.colors[2]) + '</div></div>='
    recipe += '<div class="recipe_circle" style="background-color:' + o.color + '"><div class="recipe_symbol" style="color:' + o.color + '">:)</div></div>'

    return recipe; 
}

function get_random_sample() {
    var index = Math.floor(Math.random() * SAMPLES.length)
    return SAMPLES[index];
}

function redraw_sample(who) {
    for (;;) {
        var sample = get_random_sample()
        if (CURR_SAMPLES.indexOf(sample.id) == -1)
            break
    }

    CURR_SAMPLES.splice(CURR_SAMPLES.indexOf(who.title), 1);
    CURR_SAMPLES.push(sample.id);

    set_sample_data(who, sample);
}

function sample_clicked() {
    var so = get_sample_by_id($(this).data().cid)
    $('.help').show();
    $('.colorname').fadeOut(1400);

    if (so) {
        current_recipe = so.colors.map(c => { return value_to_range(c) });
        current_title = so.id;
        $('#help').html(create_recipe(so));
        var cw = $('.recipe_circle').width();
        $('.recipe_circle').css({'height':cw+'px'});
    }

    redraw_sample($(this));
}


$(document).ready(function() {
    create_selectors();
    create_samples();

    $('.selelem').click(sel_clicked);
    $('.sample_circle').click(sample_clicked);
    $('.help').click(function() { $(this).hide(); $('.colorname').fadeOut(1400); });
    $('.colorname').hide();
})
