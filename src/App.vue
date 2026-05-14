<template>
  <div class="container">
    <div class="language-switcher">
      <button @click="locale = 'uk'">UA</button>
      <button @click="locale = 'en'">EN</button>
    </div>

    <h2>{{ $t('title') }}</h2>

    <div style="display: flex; gap: 20px">
      <!-- Назви тепер беруться з об'єкта перекладів -->
      <LipstickCard :name="$t('products.matteRed')" :price="520">
        <template #media>
          <img src="...base64..." alt="Red" />
        </template>
      </LipstickCard>

<LipstickCard :name="$t('products.berryWine')" :price="600">
  <template #media>
    <img src="https://placehold.co/200x200?text=Berry+Wine" alt="Berry Wine" />
  </template>
</LipstickCard>

      <LipstickCard :name="$t('products.nudePink')" :price="480" />

      <LipstickCard :name="$t('products.glossyShine')" :price="350">
        <template #media>
          <div>{{ $t('topSales') }}</div>
        </template>
      </LipstickCard>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import LipstickCard from "./components/LipstickCard.vue";

const { locale } = useI18n(); // Отримуємо доступ до поточної локалі
</script>

<style scoped>
.language-switcher {
  margin-bottom: 20px;
}
.language-switcher button {
  margin-right: 5px;
  cursor: pointer;
  padding: 5px 10px;
}

</style>