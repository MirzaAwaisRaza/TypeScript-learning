"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let views = 1000;
function countViews(views) {
    if (views > 999) {
        views = views / 1000;
        console.log(`views: ${views}K`);
    }
}
countViews(views);
//# sourceMappingURL=views.js.map