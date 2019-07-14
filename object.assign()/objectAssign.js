const Slider2 = function(type, animSpeed, pauseTime, slideSelector, afterPrevFn, afterNextFn) {
    this.type = type;
    this.animSpeed = animSpeed;
    this.pauseTime = pauseTime;
    this.slideSelector = slideSelector;
    this.afterPrevFn = afterPrevFn;
    this.afterNextFn = afterNextFn;
}

//es6
const Slider = function(opts = {}) {

    if (opts instanceof Object && opts.constructor !== Object) {
        throw Error('Parametr opcji musi być obiektem');
    }

    const defaultOptions = {
        type : "fade",
        animSpeed : 1000,
        pauseTime : 5000,
        slideSelector : ".slider",
        afterPrevFn : function() {},
        afterNextFn : function() {}
    }

    this.options = Object.assign({}, defaultOptions, opts);

    console.log(this.options);
}
const slide = new Slider({
    type: "myType",
    animSpeed: 26,
    slideSelector: ".ob1"
});

console.log(slide.options)
