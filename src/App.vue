<template>
  <v-app>
    <div>
      <v-card class="mx-auto overflow-hidden main-background" width="100%">
        <v-app-bar
          absolute
          color="#6A76AB"
          dark
          shrink-on-scroll
          prominent
          src="https://picsum.photos/1920/1080?random"
          fade-img-on-scroll
          scroll-target="#scrolling-techniques-3"
        >
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
            ></v-img>
          </template>

          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>

          <v-app-bar-title>Picture Gallery</v-app-bar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>

          <template v-slot:extension>
            <v-tabs align-with-title>
              <v-tab @click="filter = 'newest'">Newest</v-tab>
              <v-tab @click="filter = 'popular'">Popular</v-tab>
              <v-tab @click="filter = 'random'">Random</v-tab>
              <v-tab @click="filter = 'my'">My</v-tab>
              <v-tab @click="filter = 'archived'">Archived</v-tab>
            </v-tabs>
          </template>
        </v-app-bar>

        <v-sheet
          id="scrolling-techniques-3"
          class="overflow-y-auto"
          max-height="100vh"
        >
          <br /><br />
          <v-row no-gutters style="margin-top: 15vh">
            <v-col cols="3">
              <Posts />
            </v-col>
            <v-col>
              <Single />
            </v-col>
            <!-- <v-col cols="3">
              <PostComments />
            </v-col> -->
          </v-row>
        </v-sheet>

        <v-navigation-drawer v-model="drawer" absolute bottom temporary>
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
              style="margin-top: 30vh"
            >
              <v-list-item>
                <v-list-item-title to="/home">Foo</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title to="/home">Bar</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Fizz</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Buzz</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-card>
      <Footer />
      <v-btn elevation="2" fab large dark class="corner-button"></v-btn>
      <v-btn elevation="2" fab large dark class="corner-button"></v-btn>
    </div>
  </v-app>
</template>

<script>
import Posts from "./components/posts/Posts";
import Footer from "./components/Footer";
import Single from "./views/Single";
export default {
  name: "App",
  components: {
    Posts,
    Footer,
    Single,
  },
  data: () => ({
    drawer: false,
    group: null,
    filter: "newest",
  }),
  mounted() {
    this.$store.dispatch("getPosts");
  },
  watch: {
    group() {
      this.drawer = false;
    },
    filter() {
      console.log(this.filter);
    },
  },
};
</script>


<style>
@import "./assets/css/main.css";
@import "./assets/css/background.css";
</style>