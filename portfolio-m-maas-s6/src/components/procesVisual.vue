<template>
  <div class="ProcesVisual_container">
        <div class="ProcesVisual_line">
            <div :class="{'ProcesVisual_square ProcesVisual_square_left': key % 2 === 0, 'ProcesVisual_square ProcesVisual_square_right': key % 2 !== 0}"  v-for="(product, key) in dataForProcesVisual" :key="key">
              <p>{{product}}</p>
            </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'procesVisual',
  props: {
    dataForProcesVisual: Array,
  }
}
</script>