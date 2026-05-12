<template>
  <div class="p-4">
    <h2>Танцювальні пари</h2>
    <button @click="store.generatePairs()">Перемішати знову</button>
    
    <ul class="mt-4">
      <li v-for="(pair, index) in store.pairs" :key="index">
         {{ pair.girl }} +  {{ pair.boy }}
      </li>
    </ul>

    <div v-if="store.pairs.length === 0">
      Додайте учасників на першій сторінці
    </div>

    <router-link to="/">Повернутися назад</router-link>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDanceStore } from '../stores/danceStore'

const store = useDanceStore()

onMounted(() => {
  if (store.pairs.length === 0) {
    store.generatePairs()
  }
})
</script>