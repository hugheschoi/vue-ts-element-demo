import Vue from 'vue';
let bus:any = null;
const create = function () {
    if (!bus) {
        bus = new Vue();
    }
    return bus;
};
export const Bus = create();
