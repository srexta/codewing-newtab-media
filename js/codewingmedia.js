var frame = wp.media.view.MediaFrame.Select;
wp.media.view.MediaFrame.Select = frame.extend({

    //initialize media frame
    initialize: function () {
        frame.prototype.initialize.apply(this, arguments);

        var State = wp.media.controller.State.extend({
            insert: function (options) {
                console.log("something")
                this.frame.close();
            }
        });

        this.states.add([
            new State({
                id: 'codewingmedia',
                title: 'Codewing Media',
                button: {
                    text: 'Insert into Editor',
                    priority: 100
                }
            })
        ]);

        this.on('content:render:codewingmedia', this.rendercodewingmedia, this);
    },

    //override browse router
    browseRouter: function (routerView) {
        routerView.set({
            upload: {
                text: wp.media.view.l10n.uploadFilesTitle,
                priority: 20
            },
            codewingmedia: {
                text: 'Codewing Media',
                priority: 30,
            },
            browse: {
                text: wp.media.view.l10n.mediaLibraryTitle,
                priority: 40
            }
        });
    },

    //override content
    rendercodewingmedia: function () {
        var CodewingMediaContent = wp.Backbone.View.extend({
            tagName: 'div',
            className: 'codewing-media',
            template: wp.template('codewingmedia'),
            initialize: function () {
                this.render();
            },
            render: function () {
                this.$el.html(this.template());
                return this;
            }
        });

        var view = new CodewingMediaContent();
        this.content.set(view);
    }
});