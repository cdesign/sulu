!function(){"use strict";define([],function(){return{getButtons:function(){var a=Husky.sulu.buttons.getApiButton("layout");a.dropdownItems={masonry:{},table:{}};var b=Husky.sulu.buttons.getApiButton("edit");b.title="sulu.header.edit-collection",b.disabled=!1,b.callback=function(){Husky.emit("sulu.toolbar.edit-collection")};var c=Husky.sulu.buttons.getApiButton("delete");c.title="sulu.header.delete-collection",c.callback=function(){Husky.emit("sulu.toolbar.delete-collection")};var d=Husky.sulu.buttons.getApiButton("move");d.title="sulu.collection.move",d.icon="arrows",d.callback=function(){Husky.emit("sulu.toolbar.move-collection")};var e=Husky.sulu.buttons.getApiButton("permission");return e.title="security.roles.permissions",e.icon="lock",e.callback=function(){Husky.emit("sulu.toolbar.collection-permissions")},[{name:"mediaDecoratorDropdown",template:a},{name:"editCollection",template:b},{name:"deleteCollection",template:c},{name:"moveCollection",template:d},{name:"permissionSettings",template:e}]},getDropdownItems:function(){return[{name:"masonry",template:{title:"sulu.toolbar.masonry",callback:function(){Husky.emit("sulu.toolbar.change.masonry")}.bind(app)}}]}}})}();