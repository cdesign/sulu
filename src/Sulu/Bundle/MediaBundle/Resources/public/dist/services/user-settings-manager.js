define(function(){"use strict";function a(){}var b=null,c="mediaLanguage",d="collectionEditListView",e="last-visited-collection";return a.prototype={getMediaLocale:function(){return Husky.sulu.getUserSetting(c)||Husky.sulu.user.locale},setMediaLocale:function(a){Husky.sulu.saveUserSetting(c,a)},getMediaListView:function(){return Husky.sulu.getUserSetting(d)||"datagrid/decorators/masonry-view"},setMediaListView:function(a){Husky.sulu.saveUserSetting(d,a)},setLastVisitedCollection:function(a){Husky.sulu.saveUserSetting(e,a)}},a.getInstance=function(){return null===b&&(b=new a),b},a.getInstance()});