<template>
  <div class="container">
    <h2>Мій магазин помад</h2>

    <div style="display: flex; gap: 20px">
      <LipstickCard name="Matte Red" :price="520">
        <template #media>
          <img
            src="data:image/jpeg;base64,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"
            alt="Red"
          />
        </template>
      </LipstickCard>

      <LipstickCard name="Nude Pink" :price="480" />

      <LipstickCard name="Glossy Shine" :price="350">
        <template #media>
          <div>Топ продажів!</div>
        </template>
      </LipstickCard>
    </div>
  </div>
</template>

<script setup>
import LipstickCard from "./components/LipstickCard.vue";
</script>
