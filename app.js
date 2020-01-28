
Vue.component("cardie",{
    // Here it is basically using id of template, we can even pass specific html elements to in template like `<h3>This template </h3>`
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