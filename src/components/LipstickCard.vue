<template>
  <div class="card">
    <div class="card-image">
      <slot name="media">
        <img src="https://placehold.co/200x200?text=Lipstick" alt="Default" />
      </slot>
    </div>
    
    <div class="card-info">
      <h3>{{ name }}</h3>
      <p>{{ price }} грн</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  price: Number
})
</script>

<style scoped>

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  text-align: center;
  display: inline-block; 
  margin: 10px;
}
.card-image img {
  max-width: 100%;
  border-radius: 4px;
}
</style>