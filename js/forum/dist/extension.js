'use strict';

System.register('romanzpolski/shawTheme/listInline', ['flarum/extend', 'flarum/Component', 'flarum/helpers/listItems'], function (_export, _context) {
    "use strict";

    var extend, Component, listItems, listInline;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponent) {
            Component = _flarumComponent.default;
        }, function (_flarumHelpersListItems) {
            listItems = _flarumHelpersListItems.default;
        }],
        execute: function () {
            listInline = function (_Component) {
                babelHelpers.inherits(listInline, _Component);

                function listInline() {
                    babelHelpers.classCallCheck(this, listInline);
                    return babelHelpers.possibleConstructorReturn(this, (listInline.__proto__ || Object.getPrototypeOf(listInline)).apply(this, arguments));
                }

                babelHelpers.createClass(listInline, [{
                    key: 'init',
                    value: function init() {
                        this.showing = false;
                    }
                }, {
                    key: 'view',
                    value: function view() {
                        var items = this.props.children ? listItems(this.props.children) : [];

                        return m(
                            'div',
                            { className: 'viewNavInline ' + this.props.className + ' itemCount' + items.length + (this.showing ? ' open' : '') },
                            this.getMenu(items)
                        );
                    }
                }, {
                    key: 'getMenu',
                    value: function getMenu(items) {
                        return m(
                            'ul',
                            { className: 'listInline ' + this.props.menuClassName },
                            items
                        );
                    }
                }], [{
                    key: 'initProps',
                    value: function initProps(props) {
                        babelHelpers.get(listInline.__proto__ || Object.getPrototypeOf(listInline), 'initProps', this).call(this, props);
                        props.className = props.className || '';
                        props.buttonClassName = props.buttonClassName || '';
                        props.menuClassName = props.menuClassName || '';
                        props.label = props.label || '';
                        props.caretIcon = typeof props.caretIcon !== 'undefined' ? props.caretIcon : 'caret-down';
                    }
                }]);
                return listInline;
            }(Component);

            _export('default', listInline);
        }
    };
});;
'use strict';

System.register('romanzpolski/shawTheme/main', ['flarum/extend', 'flarum/app', 'flarum/components/Post', 'flarum/Component', 'flarum/components/Page', 'flarum/components/TerminalPost', 'flarum/components/HeaderSecondary', 'flarum/components/HeaderPrimary', 'flarum/components/SessionDropdown', 'flarum/components/Dropdown', 'flarum/utils/DiscussionControls', 'flarum/components/DiscussionListItem', 'flarum/components/IndexPage', 'flarum/helpers/listItems', 'flarum/utils/ItemList', 'flarum/components/Button', 'flarum/helpers/highlight', 'flarum/components/LinkButton', 'flarum/utils/extractText', 'flarum/utils/abbreviateNumber', 'Reflar/gamification/components/AddHotnessSort', 'flarum/components/SelectDropdown', 'flarum/tags/helpers/tagLabel', 'flarum/tags/components/TagsPage', 'flarum/helpers/humanTime', 'flarum/helpers/icon', 'flarum/helpers/avatar', 'flarum/helpers/username', 'romanzpolski/shawTheme/listInline', 'flarum/tags/helpers/tagsLabel', 'flarum/tags/utils/sortTags', 'flarum/utils/string'], function (_export, _context) {
    "use strict";

    var extend, app, Post, Component, Page, TerminalPost, HeaderSecondary, HeaderPrimary, SessionDropdown, Dropdown, DiscussionControls, DiscussionListItem, IndexPage, listItems, ItemList, Button, highlight, LinkButton, extractText, abbreviateNumber, AddHotnessFilter, SelectDropdown, tagLabel, TagsPage, humanTime, icon, avatar, username, listInline, tagsLabel, sortTags, truncate;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumComponentsPost) {
            Post = _flarumComponentsPost.default;
        }, function (_flarumComponent) {
            Component = _flarumComponent.default;
        }, function (_flarumComponentsPage) {
            Page = _flarumComponentsPage.default;
        }, function (_flarumComponentsTerminalPost) {
            TerminalPost = _flarumComponentsTerminalPost.default;
        }, function (_flarumComponentsHeaderSecondary) {
            HeaderSecondary = _flarumComponentsHeaderSecondary.default;
        }, function (_flarumComponentsHeaderPrimary) {
            HeaderPrimary = _flarumComponentsHeaderPrimary.default;
        }, function (_flarumComponentsSessionDropdown) {
            SessionDropdown = _flarumComponentsSessionDropdown.default;
        }, function (_flarumComponentsDropdown) {
            Dropdown = _flarumComponentsDropdown.default;
        }, function (_flarumUtilsDiscussionControls) {
            DiscussionControls = _flarumUtilsDiscussionControls.default;
        }, function (_flarumComponentsDiscussionListItem) {
            DiscussionListItem = _flarumComponentsDiscussionListItem.default;
        }, function (_flarumComponentsIndexPage) {
            IndexPage = _flarumComponentsIndexPage.default;
        }, function (_flarumHelpersListItems) {
            listItems = _flarumHelpersListItems.default;
        }, function (_flarumUtilsItemList) {
            ItemList = _flarumUtilsItemList.default;
        }, function (_flarumComponentsButton) {
            Button = _flarumComponentsButton.default;
        }, function (_flarumHelpersHighlight) {
            highlight = _flarumHelpersHighlight.default;
        }, function (_flarumComponentsLinkButton) {
            LinkButton = _flarumComponentsLinkButton.default;
        }, function (_flarumUtilsExtractText) {
            extractText = _flarumUtilsExtractText.default;
        }, function (_flarumUtilsAbbreviateNumber) {
            abbreviateNumber = _flarumUtilsAbbreviateNumber.default;
        }, function (_ReflarGamificationComponentsAddHotnessSort) {
            AddHotnessFilter = _ReflarGamificationComponentsAddHotnessSort.default;
        }, function (_flarumComponentsSelectDropdown) {
            SelectDropdown = _flarumComponentsSelectDropdown.default;
        }, function (_flarumTagsHelpersTagLabel) {
            tagLabel = _flarumTagsHelpersTagLabel.default;
        }, function (_flarumTagsComponentsTagsPage) {
            TagsPage = _flarumTagsComponentsTagsPage.default;
        }, function (_flarumHelpersHumanTime) {
            humanTime = _flarumHelpersHumanTime.default;
        }, function (_flarumHelpersIcon) {
            icon = _flarumHelpersIcon.default;
        }, function (_flarumHelpersAvatar) {
            avatar = _flarumHelpersAvatar.default;
        }, function (_flarumHelpersUsername) {
            username = _flarumHelpersUsername.default;
        }, function (_romanzpolskiShawThemeListInline) {
            listInline = _romanzpolskiShawThemeListInline.default;
        }, function (_flarumTagsHelpersTagsLabel) {
            tagsLabel = _flarumTagsHelpersTagsLabel.default;
        }, function (_flarumTagsUtilsSortTags) {
            sortTags = _flarumTagsUtilsSortTags.default;
        }, function (_flarumUtilsString) {
            truncate = _flarumUtilsString.truncate;
        }],
        execute: function () {

            app.initializers.add('romanzpolski/shawTheme', function (app) {

                SessionDropdown.prototype.getButtonContent = function () {
                    var user = app.session.user;
                    var attrs = {};
                    attrs.style = { background: '#000' };
                    return [m(
                        'span',
                        { className: 'Button-label' },
                        username(user)
                    ), avatar(user), ' '];
                };

                IndexPage.prototype.viewItems = function () {
                    var _this = this;

                    var items = new ItemList();
                    var sortMap = app.cache.discussionList.sortMap();

                    var sortOptions = {};
                    for (var i in sortMap) {
                        sortOptions[i] = app.translator.trans('core.forum.index_sort.' + i + '_button');
                    }

                    items.add('sort', listInline.component({
                        buttonClassName: 'Button',
                        label: sortOptions[this.params().sort] || Object.keys(sortMap).map(function (key) {
                            return sortOptions[key];
                        })[0],
                        children: Object.keys(sortOptions).map(function (value) {
                            var label = sortOptions[value];
                            var active = (_this.params().sort || Object.keys(sortMap)[0]) === value;

                            return Button.component({
                                className: 'Button',
                                children: label,
                                icon: active ? 'check' : true,
                                onclick: _this.changeSort.bind(_this, value),
                                active: active
                            });
                        })
                    }));

                    return items;
                };

                IndexPage.prototype.sidebarItems = function () {
                    var items = new ItemList();
                    var canStartDiscussion = app.forum.attribute('canStartDiscussion') || !app.session.user;

                    items.add('newDiscussion', Button.component({
                        children: app.translator.trans(canStartDiscussion ? 'core.forum.index.start_discussion_button' : 'core.forum.index.cannot_start_discussion_button'),
                        icon: 'edit',
                        className: 'Button Button--primary IndexPage-newDiscussion',
                        itemClassName: 'App-primaryControl',
                        onclick: this.newDiscussion.bind(this),
                        disabled: !canStartDiscussion
                    }));

                    items.add('nav', SelectDropdown.component({
                        children: this.navItems(this).toArray(),
                        buttonClassName: 'Button',
                        className: 'App-titleControl'
                    }));
                    return items;
                };

                TagsPage.prototype.view = function () {
                    var pinned = this.tags.filter(function (tag) {
                        return tag.position() !== null;
                    });
                    var cloud = this.tags.filter(function (tag) {
                        return tag.position() === null;
                    });

                    return m(
                        'div',
                        { className: 'TagsPage' },
                        IndexPage.prototype.hero(),
                        m(
                            'div',
                            { className: 'container' },
                            m(
                                'nav',
                                { className: 'TagsPage-nav IndexPage-nav sideNav', config: IndexPage.prototype.affixSidebar },
                                m(
                                    'ul',
                                    null,
                                    listItems(IndexPage.prototype.sidebarItems().toArray())
                                )
                            ),
                            m(
                                'div',
                                { className: 'TagsPage-content sideNavOffset' },
                                m(
                                    'ul',
                                    { className: 'TagTiles' },
                                    pinned.map(function (tag) {
                                        var lastDiscussion = tag.lastDiscussion();
                                        var children = sortTags(app.store.all('tags').filter(function (child) {
                                            return child.parent() === tag;
                                        }));
                                        return m(
                                            'li',
                                            { className: 'TagTile bgImg ' + tag.data.attributes.slug + (tag.color() ? ' colored' : ''),
                                                style: { backgroundColor: tag.color() } },
                                            m(
                                                'a',
                                                { className: 'TagTile-info', href: app.route.tag(tag), config: m.route },
                                                m(
                                                    'h3',
                                                    { className: 'TagTile-name' },
                                                    tag.name()
                                                ),
                                                m(
                                                    'p',
                                                    { className: 'TagTile-description' },
                                                    tag.description()
                                                ),
                                                children ? m(
                                                    'div',
                                                    { className: 'TagTile-children' },
                                                    children.map(function (child) {
                                                        return [m(
                                                            'a',
                                                            { href: app.route.tag(child), config: function config(element, isInitialized) {
                                                                    if (isInitialized) return;
                                                                    $(element).on('click', function (e) {
                                                                        return e.stopPropagation();
                                                                    });
                                                                    m.route.apply(this, arguments);
                                                                } },
                                                            child.name()
                                                        ), ' '];
                                                    })
                                                ) : ''
                                            ),
                                            lastDiscussion ? m(
                                                'a',
                                                { className: 'TagTile-lastDiscussion',
                                                    href: app.route.discussion(lastDiscussion, lastDiscussion.lastPostNumber()),
                                                    config: m.route },
                                                m(
                                                    'span',
                                                    { className: 'TagTile-lastDiscussion-title' },
                                                    lastDiscussion.title()
                                                ),
                                                humanTime(lastDiscussion.lastTime())
                                            ) : m('span', { className: 'TagTile-lastDiscussion' })
                                        );
                                    })
                                ),
                                cloud.length ? m(
                                    'div',
                                    { className: 'TagCloud' },
                                    cloud.map(function (tag) {
                                        var color = tag.color();

                                        return [tagLabel(tag, { link: true }), ' '];
                                    })
                                ) : ''
                            )
                        )
                    );
                };

                IndexPage.prototype.view = function () {
                    return m(
                        'div',
                        { className: 'IndexPage' },
                        m(
                            'div',
                            { className: 'row fakeHeaderNav' },
                            m(
                                'div',
                                { className: 'container' },
                                m(
                                    'ul',
                                    { className: 'IndexPage-toolbar-view' },
                                    listItems(this.viewItems().toArray())
                                )
                            )
                        ),
                        m(
                            'div',
                            { className: 'container' },
                            m(
                                'nav',
                                { className: 'IndexPage-nav sideNav' },
                                m(
                                    'ul',
                                    null,
                                    listItems(this.sidebarItems().toArray())
                                )
                            ),
                            m(
                                'div',
                                { className: 'IndexPage-results sideNavOffset' },
                                app.cache.discussionList.render()
                            )
                        )
                    );
                };

                HeaderSecondary.prototype.view = function () {
                    return m(
                        'ul',
                        { className: 'Header-controls' },
                        listItems(this.items().toArray())
                    );
                };

                DiscussionListItem.prototype.view = function () {
                    var _this2 = this;

                    var retain = this.subtree.retain();

                    if (retain) return retain;

                    var discussion = this.props.discussion;
                    var startPost = discussion.startPost();
                    var excerpt = m(
                        'span',
                        null,
                        truncate(startPost.contentPlain(), 200)
                    );
                    var startUser = discussion.startUser();
                    var isUnread = discussion.isUnread();
                    var isRead = discussion.isRead();
                    var showUnread = !this.showRepliesCount() && isUnread;
                    var jumpTo = Math.min(discussion.lastPostNumber(), (discussion.readNumber() || 0) + 1);
                    var relevantPosts = this.props.params.q ? discussion.relevantPosts() : [];
                    var controls = DiscussionControls.controls(discussion, this).toArray();
                    var attrs = this.attrs();
                    var lastPost = !this.showStartPost();
                    var user = discussion[lastPost ? 'lastUser' : 'startUser']();
                    var time = discussion[lastPost ? 'lastTime' : 'startTime']();

                    var tags = this.props.discussion.tags();

                    //console.log(discussion);
                    return m(
                        'div',
                        attrs,
                        m(
                            'a',
                            { className: 'Slidable-underneath Slidable-underneath--left Slidable-underneath--elastic' + (isUnread ? '' : ' disabled'),
                                onclick: this.markAsRead.bind(this) },
                            icon('check')
                        ),
                        m(
                            'div',
                            { className: 'DiscussionListItem-content Slidable-content' + (isUnread ? ' unread' : '') + (isRead ? ' read' : '') },
                            m(
                                'ul',
                                { className: 'DiscussionListItem-badges badges' },
                                listItems(discussion.badges().toArray())
                            ),
                            m(
                                'a',
                                { href: startUser ? app.route.user(startUser) : '#',
                                    className: 'DiscussionListItem-author',
                                    title: extractText(app.translator.trans('core.forum.discussion_list.started_text', { user: startUser, ago: humanTime(discussion.startTime()) })),
                                    config: function config(element) {
                                        $(element).tooltip({ placement: 'right' });
                                        m.route.apply(this, arguments);
                                    } },
                                avatar(startUser, { title: '' })
                            ),
                            m(
                                'p',
                                { className: 'postedBy' },
                                'Posted by ',
                                startUser.data.attributes.displayName
                            ),
                            m(
                                'a',
                                { href: app.route.discussion(discussion, jumpTo),
                                    config: m.route,
                                    className: 'DiscussionListItem-main' },
                                m(
                                    'h3',
                                    { className: 'DiscussionListItem-title' },
                                    highlight(discussion.title(), this.props.params.q)
                                )
                            ),
                            m(
                                'p',
                                { className: 'ListDiscussion-excerpt' },
                                excerpt,
                                ' ',
                                m(
                                    'a',
                                    { href: app.route.discussion(discussion, jumpTo) },
                                    '(more)'
                                )
                            ),
                            relevantPosts && relevantPosts.length ? m(
                                'div',
                                { className: 'DiscussionListItem-relevantPosts' },
                                relevantPosts.map(function (post) {
                                    return PostPreview.component({ post: post, highlight: _this2.props.params.q });
                                })
                            ) : ''
                        ),
                        m(
                            'div',
                            { className: 'row DiscussionListItem-bottomMeta' },
                            m(
                                'span',
                                { className: 'DiscussionListItem-count',
                                    onclick: this.markAsRead.bind(this),
                                    title: showUnread ? app.translator.trans('core.forum.discussion_list.mark_as_read_tooltip') : '' },
                                abbreviateNumber(discussion[showUnread ? 'unreadCount' : 'repliesCount']()),
                                ' answers | last updated ',
                                humanTime(time)
                            ),
                            ' \xA0',
                            m(
                                'span',
                                { className: 'tags' },
                                tagsLabel(tags),
                                ' '
                            ),
                            controls.length ? Dropdown.component({
                                icon: 'ellipsis-h',
                                children: controls,
                                className: 'DiscussionListItem-controls',
                                buttonClassName: 'Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right'
                            }) : ''
                        )
                    );
                };

                /*    extend(Post.prototype, 'view', function(vdom) {
                //        vdom.children.push('<div class="kutas"><p>this is some stuff to add after each post</p></div>');
                        vdom.attrs.style = 'background-color: #fafafa; border-bottom: 1px solid #000';
                    });*/
            });
        }
    };
});;
'use strict';

System.register('romanzpolski/shawTheme/newComponent', ['flarum/extend', 'flarum/Component', 'flarum/helpers/listItems'], function (_export, _context) {
    "use strict";

    var extend, Component, listItems, NewComponent;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponent) {
            Component = _flarumComponent.default;
        }, function (_flarumHelpersListItems) {
            listItems = _flarumHelpersListItems.default;
        }],
        execute: function () {
            NewComponent = function (_Component) {
                babelHelpers.inherits(NewComponent, _Component);

                function NewComponent() {
                    babelHelpers.classCallCheck(this, NewComponent);
                    return babelHelpers.possibleConstructorReturn(this, (NewComponent.__proto__ || Object.getPrototypeOf(NewComponent)).apply(this, arguments));
                }

                babelHelpers.createClass(NewComponent, [{
                    key: 'init',
                    value: function init() {
                        this.showing = false;
                    }
                }, {
                    key: 'view',
                    value: function view() {
                        var items = this.props.children ? listItems(this.props.children) : [];

                        return m(
                            'div',
                            { className: 'viewNavInline ' + this.props.className + ' itemCount' + items.length + (this.showing ? ' open' : '') },
                            this.getMenu(items)
                        );
                    }
                }, {
                    key: 'getMenu',
                    value: function getMenu(items) {
                        return m(
                            'ul',
                            { className: 'listInline ' + this.props.menuClassName },
                            items
                        );
                    }
                }], [{
                    key: 'initProps',
                    value: function initProps(props) {
                        babelHelpers.get(NewComponent.__proto__ || Object.getPrototypeOf(NewComponent), 'initProps', this).call(this, props);
                        props.className = props.className || '';
                        props.buttonClassName = props.buttonClassName || '';
                        props.menuClassName = props.menuClassName || '';
                        props.label = props.label || '';
                        props.caretIcon = typeof props.caretIcon !== 'undefined' ? props.caretIcon : 'caret-down';
                    }
                }]);
                return NewComponent;
            }(Component);

            _export('default', NewComponent);
        }
    };
});