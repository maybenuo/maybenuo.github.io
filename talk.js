$(function() {
    $('#yes').click(function(event) {
        modal('我就知道小桥姐姐一定会愿意的。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('明人不说暗话！', A);
    });
});

function A() {
    modal('你是跑不掉的！', B);
}

function B() {
    modal('请您不要拒绝我', C);
}

function C() {
    modal('呵，女人从我了吧', D);
}

function D() {
    modal('跟我走吧', E);
}

function E() {
    modal('这辈子都不可能让你离开我', F);
}


function F() {
    modal('下面开始炸爱的烟花~', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
