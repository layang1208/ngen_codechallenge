<template>
  <div class="movieCard">
    <a-card
      :title="movie.title"
      style="width: 300px"
      @click="$emit('handleCardClick', movie.id)"
      type="col-flex"
      align="middle"
      justify="space-between"
      class="card"
    >
      <img alt="moviePoster" :src="imageBaseUrl + movie.poster_path" />
      <a-card-meta
        style="margin-top: 20px"
        :title="movie.vote_average"
        :description="movie.release_date.substring(0, 4)"
      >
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  data() {
    return {
      imageBaseUrl: process.env.VUE_APP_API_POSTER_BASE_URL,
    };
  },
  props: { movie: Object },
};
</script>

<style scoped>
.movie-card {
  width: 100%;
  margin-top: 45px;
}
.card {
  transition: transform 0.25s ease;
  border-radius: 30px;
}
.card:hover {
  transform: scale(1.05);
  cursor: pointer;
  background-color: rgba(0, 187, 255, 0.749);
}
</style>