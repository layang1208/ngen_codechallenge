<template>
  <a-pagination v-model="page" :total="50" show-less-items />
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  prop: {
      page: Number,
  }
};
</script>
