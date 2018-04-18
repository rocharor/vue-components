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
            id: 1,
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
        },
        {
            id: 14,
            titulo: 'Titulo 4',
            valor: '400,00',
            imagem: 'http://via.placeholder.com/350x350',
            user_id: 2,
        },
    ],
    dataUser: {
        logged: 0,
        user_id: 1,
        favorites: [
            1,
            13,
        ]
    },
    valor_buotao: 'Deslogado'
  },
  methods: {
      acaoLogar: function() {
            if (this.valor_buotao == 'Deslogado') {
                this.valor_buotao = 'Logado'
                this.dataUser.logged = 1
            } else {
                this.valor_buotao = 'Deslogado'
                this.dataUser.logged = 0
            }
      }
  }
})
