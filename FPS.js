(function (win, doc) {

/**
 * FPS
 * @class
 * @param {Number} target target FPS number.
 */
function FPS(target) {
    this.target     = target;
    this.interval   = 1000 / target;
    this.checkpoint = new Date();
    this.fps        = 0;
}

FPS.prototype = {
    /**
     * Check FPS from previous checkpoint.
     * @return undefined
     */
    check: function () {

        var now = new Date();

        this.fps = 1000 / (now - this.checkpoint);
        this.checkpoint = new Date();
    },

    /**
     * Get current FPS.
     * @return {Number} FPS
     */
    getFPS: function () {

        return this.fps.toFixed(2);
    },

    // 次回処理までのインターバルを取得
    /**
     * Get interval to next process.
     */
    getInterval: function () {

        var elapsed = new Date() - this.checkpoint;

        return this.interval - elapsed > 10 ? this.interval - elapsed : 10;
    }
};

}(window, document));
