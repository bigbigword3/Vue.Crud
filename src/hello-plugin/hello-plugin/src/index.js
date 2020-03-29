import HelloPlugin from './compontent/HelloPlugin.vue'
const helloPlugin = {
    install(Vue, options) {
        Vue.component(HelloPlugin.name, HelloPlugin);
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(helloPlugin);
}
export default helloPlugin