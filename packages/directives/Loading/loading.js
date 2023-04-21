import Vue from "vue";
import Loading from "./Loading.vue";

const loading = {
    bind() {
    },
    inserted(el, binding, vnode) {
        const vueConstructor = Vue.extend(Loading);
        el.instalce = new vueConstructor().$mount()
        if (binding.value) {
            append(el)
        }
    },
    update(el, binding) {
        if (binding.value !== binding.oldValue) {
            binding.value ? append(el) : remove(el)
        }
    },
    componentUpdated() {
    },
    unbind() {
    },

}

function append(el) {
    if(el.style.position === ""){
        el.style.position = "relative"
    }
    el.appendChild(el.instalce.$el)
}

function remove(el) {
    el.removeChild(el.instalce.$el)
}

export default loading
