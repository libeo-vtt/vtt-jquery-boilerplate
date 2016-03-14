(function($) {
    var MODULENAME_UPPERCASE = function(element, options) {
        this.MODULENAME_LOWERCASE = $(element);
        this.config = $.extend({

        }, options || {});

        this.classes = {
            active: 'is-active'
        };

        this.init();
    };

    $.extend(MODULENAME_UPPERCASE.prototype, {

        // Component initialization
        init: function() {

        }

    });

    $.fn.MODULENAME_LOWERCASE = function(options) {
        return this.each(function() {
            var element = $(this);

            // Return early if this element already has a plugin instance
            if (element.data('MODULENAME_LOWERCASE')) return;

            // pass options to plugin constructor
            var MODULENAME_LOWERCASE = new MODULENAME_UPPERCASE(this, options);

            // Store plugin object in this element's data
            element.data('MODULENAME_LOWERCASE', MODULENAME_LOWERCASE);
        });
    };
})(jQuery);
