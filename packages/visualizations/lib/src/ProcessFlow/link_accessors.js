"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var accessors_factory_1 = require("../utils/accessors_factory");
var defaultAccessors = {
    // Dash length of link. Default 0 (solid line)
    dash: function (link) {
        return link.dash || 0;
    },
    // Information for the link's focus label
    focusLabel: function (link) {
        var defaultFocusLabel = { name: link.label, value: link.size };
        return link.focusLabel || [defaultFocusLabel];
    },
    // Label to display next to link - defaults to an empty string.
    label: function (link) {
        return link.label || "";
    },
    // Marker style for link. Defaults to "arrow".
    marker: function (link) {
        return link.marker || "arrow";
    },
    // Value for determining width of link. Default: 1.
    size: function (link) {
        return link.size || 1;
    },
    // Color of link. Default: grey.
    stroke: function (link) {
        return link.stroke || "#bbb";
    },
    // Node at which the link starts. Default: undefined.
    source: function (link) {
        return link.source || undefined;
    },
    // ID of node at which the link starts. Default: undefined.
    sourceId: function (link) {
        return link.sourceId || undefined;
    },
    // Node at which the link ends. Default: undefined.
    target: function (link) {
        return link.target || undefined;
    },
    // ID of node at which the link ends. Default: undefined.
    targetId: function (link) {
        return link.targetId;
    },
};
exports.default = accessors_factory_1.default(defaultAccessors);
//# sourceMappingURL=link_accessors.js.map