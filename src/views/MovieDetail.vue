<template>
  <div>
    <Navbar />
    <a-layout>
      <a-layout-content :style="{ background: '#fff', padding: '24px' }">
        <div>
          <a-button type="primary" @click="goBack" class="button">
           <ArrowLeftOutlined />
            Back
          </a-button>
          <div>
            <a-descriptions
              :title="movieTitle"
              :column="{ md: 1, sm: 1, xs: 1 }"
            >
              <a-descriptions-item name="moviePoster">
                <img alt="moviePoster" :src="imageBaseUrl + imageFilePath" />
              </a-descriptions-item>
              <a-descriptions-item label="Release Date">
                {{ this.releaseDate }}
              </a-descriptions-item>
              <a-descriptions-item label="Vote Average">
                {{ this.voteAverage }}
              </a-descriptions-item>
              <a-descriptions-item label="Overview" :span="3">
                {{ this.overview }}
              </a-descriptions-item>
            </a-descriptions>
          </div>
        </div>
      </a-layout-content>
      <Footer class="footer" />
    </a-layout>
  </div>
</template>

<script>
import { HTTP } from "../services/httpService";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { ArrowLeftOutlined } from "@ant-design/icons-vue";
export default {
  data() {
    return {
      apiKey: process.env.VUE_APP_API_API_KEY,
      imageBaseUrl: process.env.VUE_APP_API_POSTER_BASE_URL,
      movieTitle: null,
      imageFilePath: null,
      releaseDate: null,
      overview: null,
      voteAverage: null,
    };
  },
  components: { Navbar, Footer, ArrowLeftOutlined },
  props: {
    movieId: String,
  },

  async created() {
    await this.getMovieDetail();
  },

  methods: {
    async getMovieDetail() {
      const { data } = await HTTP.get(`/${this.movieId}?${this.apiKey}`);
      this.movieTitle = data.original_title;
      this.imageFilePath = data.poster_path;
      this.releaseDate = data.release_date;
      this.overview = data.overview;
      this.voteAverage = data.vote_average;
    },
    goBack() {
      this.$router.push(`/`);
    },
  },
};
</script>

<style scoped>
.button {
  border-radius: 30px;
  margin-bottom: 30px;
}
.footer {
  position: absolute;
  bottom: 0;
}
</style>