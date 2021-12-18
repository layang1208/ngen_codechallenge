<template>
  <Navbar />
  <div class="home">
    <a-layout-content style="padding: 0 50px">
      <div class="movies">
        <a-row :gutter="[36, 36]">
          <a-col
            :grid="{ xs: 24, sm: 8, md: 8 }"
            v-for="movie in movies"
            :key="movie.id"
          >
            <MovieCard :movie="movie" @handleCardClick="handleCardClick" />
          </a-col>
        </a-row>
      </div>
    </a-layout-content>
    <a-pagination
      :total="4000"
      :show-total="total => `Total 200 Pages`"
      :default-current="1"
      :page-size="20"
      @change="handlePaginate"
      show-less-items
      show-quick-jumper
    />
  </div>
  <Footer />
</template>

<script>
import { HTTP } from "../services/httpService";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import MovieCard from "../components/Movie.vue";

export default {
  name: "Home page",
  components: { Navbar, Footer, MovieCard },
  data() {
    return {
      apiKey: process.env.VUE_APP_API_API_KEY,
      movies: [],
   

    };
  },

  async created() {
    await this.getPopularMovie();
  },

  methods: {
    async getPopularMovie() {
      const { data } = await HTTP.get(`/popular?${this.apiKey}&page=1`);
      console.log(data);
      this.movies = data.results;
    },
    async handlePaginate(pageNumber) {
      const { data } = await HTTP.get(
        `/popular?${this.apiKey}&page=${pageNumber}`
      );
      console.log(data);
      this.movies = data.results;
    },

    handleCardClick(id) {
      this.$router.push(`/movies/${id}`);
    },
  },
};
</script>

<style scoped>
main {
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #eee;
  display: flex;
}
.movies {
  display: flex;
  max-width: 1280px;
  padding: 25px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>