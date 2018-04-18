import Vue from 'vue'
import Product from './Product.vue'

var appVue = new Vue({
  el: '#app',
  //render: h => h(App)
  components: {
    Product
  },
  data:{
    dataProduct: [
        {
            id: 11,
            titulo: 'Titulo 1',
            valor: '200,00',
            imagem: 'http://via.placeholder.com/350x350',
            user_id: 1,
        },
        {
            id: 12,
            titulo: 'Titulo 2',
            valor: '300,00',
            imagem: 'http://via.placeholder.com/350x350',
            user_id: 1,
        },
        {
            id: 13,
            titulo: 'Titulo 3',
            valor: '400,00',
            imagem: 'http://via.placeholder.com/350x350',
            user_id: 2,
        }
    ],
    dataUser: {
        logged: 0,
        user_id: 1,
    }
  }
})
