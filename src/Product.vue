<template>
    <div class="box-product">
        <div class="div-favorito-xxxxxx">
            <!-- @if(Auth::check() == 0) -->
                <a @click.prevent='setFavorite(0)'>
                    <div class="img-inativo"></div>
                </a>
            <!-- @else -->
                <!-- <a class="produto-xxxxx" @click.prevent='setFavorite(xxxxxx)'> -->
                    <!-- @if($produto->favorito) -->
                        <!-- <span class="img-ativo"></span> -->
                    <!-- @else -->
                        <!-- <span class="img-inativo"></span> -->
                    <!-- @endif -->
                <!-- </a> -->
            <!-- @endif -->
        </div>

        <div class='title'>
            <b>{{ product.titulo }}</b>
        </div>
        <div class='image'>
            <img class="img-thumbnail" :src="product.imagem" alt="Produto">
        </div>

        <div class='value'>
            <b>Pre&ccedil;o: R$ {{ product.valor }}</b>
        </div>

        <div class='buttons'>
            <a :href="product.link" class='btn btn-warning'><b>Ver detalhes</b></a>
            <!-- @if(Auth::check() == 0) -->
                <!-- <button class='btn btn-info' title='Necessário estar logado' disabled><span class="glyphicon glyphicon-envelope"></span></button> -->
            <!-- @elseif(Auth::user()->id == $produto->user->id) -->
                <!-- <button class='btn btn-info' title='Este produto é seu' disabled><span class="glyphicon glyphicon-envelope"></span></button> -->
            <!-- @else -->
                <button class='btn btn-info' @click.prevent="openContact(product.id)"><span class="glyphicon glyphicon-envelope"></span></button>
            <!-- @endif -->
        </div>
    </div>
</template>

<style media="screen">
    .box-product { text-align: center; }
    .box-product .image { width: 200px; height: 200px; }
    .box-product .image img { width: 100%; height: 100%; }
</style>

<script>
    export default {
        props: ['data-product', 'data-user'],
        data() {
            return {
                product: {
                    id: this.dataProduct.id,
                    titulo: this.dataProduct.titulo,
                    valor: this.dataProduct.valor,
                    imagem: this.dataProduct.imagem,
                    link: 'xx/xx/' + this.dataProduct.id,
                },
                user: {
                    logged: this.dataUser.logged,
                    user_id: this.dataUser.user_id,
                }
            }
        },
        methods: {
            openContact: function(id) {
                alert(id)
            },
            setFavorite: function(status) {

            }
        }
    }
</script>
