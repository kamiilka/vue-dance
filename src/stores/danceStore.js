
import { defineStore } from "pinia";

export const useDanceStore = defineStore("dance", {
  state: () => ({
    boys: [],
    girls: [],
    pairs: [],
  }),
  actions: {
    addPerson(name, gender) {
      if (gender === "male") {
        this.boys.push(name);
      } else {
        this.girls.push(name);
      }
    },
    generatePairs() {

      let b = [...this.boys].sort(() => Math.random() - 0.5);
      let g = [...this.girls].sort(() => Math.random() - 0.5);

      this.pairs = [];
      const count = Math.min(b.length, g.length);

      for (let i = 0; i < count; i++) {
        this.pairs.push({ boy: b[i], girl: g[i] });
      }
    },
  },
});
