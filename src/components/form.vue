<template>
  <div class="p-4">
    <h2>Додати учасників</h2>
    <input v-model="newName" placeholder="Ім'я" />
    <select v-model="gender">
      <option value="male">Хлопець</option>
      <option value="female">Дівчина</option>
    </select>
    <button @click="save">Додати</button>

    <div class="mt-4">
      <p>Хлопців: {{ store.boys.length }} | Дівчат: {{ store.girls.length }}</p>
      <router-link to="/pairs">
        <button :disabled="store.boys.length === 0 || store.girls.length === 0">
          Сформувати пари
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDanceStore } from '../stores/danceStore'

const store = useDanceStore()
const newName = ref('')
const gender = ref('male')

const save = () => {
  if (newName.value.trim()) {
    store.addPerson(newName.value, gender.value)
    newName.value = ''
  }
}
</script>