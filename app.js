
Vue.component("cardie",{
    // Here it is basically using id of template, we can even pass specific html elements in template like `<h3>This template </h3> but for linking we need to give 'is' property to the template`
    template: '#card-template',
    props:['cardValue']

})
new Vue({
    el:"#app",
    data(){
        return {
            cards: ['King', 'Ace', 'Queen', 'Joker', 'YDKJS']
        }
    }
})