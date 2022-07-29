<template>
  <div class="DoelstellingContext_container">
        <div class="DoelstellingContext_container_background_shadow"></div>

        <div class="DoelstellingContext_container_background_outline">
          <div class="DoelstellingContext_container_background_bar">
            <div
              class="DoelstellingContext_container_background_bar_dot __right"
            ></div>
            <div class="DoelstellingContext_container_background_bar_dot"></div>
            <div class="DoelstellingContext_container_background_bar_dot"></div>
          </div>

          <div class="DoelstellingContext_text_container">
            <div class="DoelstellingContext_rightLeft_div">
              <div class="DoelstellingContext_text">
                <h1>De</h1>
                <h1>Doelstelling</h1>

                <div class="Doelstelling_bar"></div>

                <p>{{dataForDoelstellingContext.productDoelstellingContext.DoelstellingDescription}}</p>
              </div>

              <div class="DeDoelStelling_list">
                <ul role="list" v-for="(task, key) in dataForDoelstellingContext.productDoelstellingContext.DoelstellingTasks" :key="key">
                  <li>{{task}}</li>
                </ul>
              </div>
            </div>

            <div
              class="DoelstellingContext_rightLeft_div DoelstellingContext_Right_div"
            >
              <div class="DoelstellingContext_text">
                <h1>De</h1>
                <h1>Context</h1>

                <div class="Doelstelling_bar"></div>
              </div>

              <div class="DeDoelStelling_list">
                <p>
                  {{dataForDoelstellingContext.productDoelstellingContext.ContextDescription}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'doelstellingContextBanner',
  props:{
    dataForDoelstellingContext: Object
  }
}
</script>