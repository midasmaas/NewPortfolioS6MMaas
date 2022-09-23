<template>
    <div class="productSelector_container">
        <a class="productSelector_button" @click="back" v-if="isNotFirstProduct">
            <p><span class="productSelector_btn_reverseArrow">> </span>Vorige</p>
        </a>

        <a class="productSelector_button" @click="forward" v-if="isNotLastProduct">
            <p>Volgende ></p>
        </a>
    </div>
</template>

<script>
//Data
import productenJson from "../json-data/producten.json";
export default {
  name: "productSelector",
  computed:{
    isNotFirstProduct(){
        const currentProductId = parseInt(this.$route.params.productid)
        const isLastProduct = currentProductId === 0
        if (isLastProduct === true){
            return false
        } else return true

    },
    isNotLastProduct(){
        const numberOfProducts = productenJson.length -1;
        const currentProductId = parseInt(this.$route.params.productid)
        const isLastProduct = numberOfProducts === currentProductId
        if (isLastProduct === true){
            return false
        } else return true

    }
  },
  methods:{
    productIndex(){
       return productenJson.length()
    },
    forward(){
        let numberOfProducts = productenJson.length -1;
        let currentProductId = parseInt(this.$route.params.productid)
        const nextProductId = parseInt(this.$route.params.productid) + 1;
        if (currentProductId < numberOfProducts){
            console.log('currentproduct: ' + currentProductId)
            console.log('number of products: ' + numberOfProducts)
            this.$router.push({name: 'PortfolioProductView', params:{productid: nextProductId}})
        }else{
            return
        }
    },
    back(){
        //let numberOfProducts = productenJson.length -1;
        let currentProductId = parseInt(this.$route.params.productid)
        const prevProductId = parseInt(this.$route.params.productid) + -1;
        if (currentProductId > 0){
            this.$router.push({name: 'PortfolioProductView', params:{productid: prevProductId}})
        }else{
            return
        }
    }
  }
};
</script>