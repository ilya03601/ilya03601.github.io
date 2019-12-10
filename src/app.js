import './style.less';

$(function () {
    new Intro();
    new Header();
    new SideNav();
});

class Intro {
    constructor() {
        this.$el = $('.Intro');
        this.$title = this.$el.find('.Intro-title');

        $(window).on('scroll', this.onScroll.bind(this));
        $(window).on('resize', this.onResize.bind(this));

        this.onResize();
    }

    onScroll() {
        const scrollTop = $(window).scrollTop();

        if (scrollTop + this.titleHeight + this.titleMarginTop + 50 < this.windowHeight) {
            this.$title.removeClass('isAbsolute');
        }

        if (scrollTop + this.titleHeight + this.titleMarginTop + 50 >= this.windowHeight) {
            this.$title.addClass('isAbsolute');
        }
    }

    onResize() {
        const windowWidth = $(window).width();
        this.windowHeight = $(window).height();
        this.titleHeight = this.$title.height();
        this.titleMarginTop = windowWidth > 720 ? 200 : 100;

        this.onScroll();
    }
}

class Header {
    constructor() {
        this.$el = $('.Header');
        this.$el.find('.Header-menu').on('click', this.onMenuButtonClick.bind(this));
    }

    onMenuButtonClick() {
        $('.SideNav').addClass('isOpen');
    }
}

class SideNav {
    constructor() {
        this.$el = $('.SideNav');
        this.$el.find('.SideNav-close').on('click', this.onClose.bind(this));
    }

    onClose() {
        this.$el.removeClass('isOpen');
    }
}