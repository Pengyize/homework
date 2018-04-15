!function () {
    let view = $('#slides');
    let current = 0;
    let controller = {
        view: null,
        current: null,
        init: function (view,current) {
           this.view = view;
           this.current = current;
           this.bindEvents();
        },
        bindEvents: function () {
            let $buttons = $('#buttonWrapper>li');
            let $images = view.children('img');
            this.makeFakeSlide($images);
            view.css({transform: 'translateX(-920px)'});
            this.playSlide($buttons);
        },
        makeFakeSlide: function ($images) {
                let $firstCopy = $images.eq(0).clone(true);
                let $lastCopy = $images.eq($images.length - 1).clone(true);
                this.view.append($firstCopy);
                this.view.prepend($lastCopy);
        },
        playSlide: function ($buttons) {
            let that = this;
            $('#buttonWrapper').on('click', 'li', function (e) {
                let $button = $(e.currentTarget);
                $button.addClass('active').siblings().removeClass('active');
                let index = $button.index();
                that.goToSlide(index,$buttons);
            });
        },
        goToSlide: function (index,$buttons) {
            if(index>$buttons.length-1){
                index=0;
            }else if(index<0){
                index = $buttons.length-1
            }
            if(index === 0 && current === $buttons.length-1){
                view.css({transform:`translateX(${-($buttons.length+1)*920}px)`})
                    .one('transitionend', () => {
                        view.hide().offset();
                        view.css({transform: `translateX(${-(index+1)*920}px)`})
                            .show();
                    });
                current = index;
            }else if(current === 0 && index === $buttons.length-1){
                view.css({transform:`translateX(0px)`})
                    .one('transitionend',function () {
                        view.hide().offset();
                        view.css({transform: `translateX(${-(index+1)*920}px)`})
                            .show();
                    });
                current = index;
            }else{
                view.css({transform:`translateX(${-(index+1)*920}px)`});
                current = index;
            }
        }
    };
    controller.init(view,current);

}();
