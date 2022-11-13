let addon = require('bindings')('aux_math.node')

module.exports = {
    aux_add: addon.aux_add,
    aux_sub: addon.aux_sub,
    aux_multi: addon.aux_multi,
};