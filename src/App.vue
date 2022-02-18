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
            <v-icon>mdi-plus</v-icon>
          </v-btn>

          <v-btn icon> <v-icon>mdi-dots-vertical</v-icon> </v-btn>

          <template v-slot:extension>
            <v-tabs align-with-title>
              <v-tab @click="getPosts('new')">New</v-tab>
              <v-tab @click="getPosts('new')">Popular</v-tab>
            </v-tabs>
          </template>
        </v-app-bar>

        <v-sheet
          id="scrolling-techniques-3"
          class="overflow-y-auto"
          max-height="100vh"
          style="padding-top: 25vh"
        >
          <Message :message="message" />
          <v-row no-gutters>
            <v-col cols="3">
              <SearchBar />
              <Posts />
            </v-col>
            <v-col style="padding: 5vh">
              <router-view />
            </v-col>
            <v-btn>
              <v-icon dark>add</v-icon>
            </v-btn>

            <div class="text-center">
              <v-dialog
                v-model="dialog"
                width="500"
                content-class="my-custom-dialog"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    fab
                    light
                    large
                    color="primary"
                    fixed
                    right
                    bottom
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </template>

                <Create @close-dialog="dialog = false" />
                <Comments v-if="false" />
              </v-dialog>
            </div>
          </v-row>
          <Footer />
        </v-sheet>

        <v-navigation-drawer v-model="drawer" absolute bottom temporary>
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
              style="margin-top: 30vh"
            >
              <v-list-item>
                <v-list-item-title @click="goTo('Home')">
                  Home
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title @click="goTo('About')">
                  About
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title @click="goTo('Single')">
                  Single
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import routerMixin from "./mixins/routerMixin";
import messageMixin from "./mixins/messageMixin";
import Posts from "./components/posts/Posts";
import Comments from "./components/posts/comments/Comments";
import Create from "./components/posts/Create";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Message from "./components/Message";
export default {
  name: "App",
  mixins: [routerMixin, messageMixin],
  components: {
    Posts,
    Footer,
    SearchBar,
    Message,
    Comments,
    Create,
  },
  data: () => ({
    drawer: false,
    group: null,
    filter: "newest",
    dialog: false,
  }),
  mounted() {
    this.$store.dispatch("getPosts", { type: "all" });
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

.card-outter {
  padding-bottom: 50px;
}
.card-actions {
  position: absolute;
  bottom: 0;
}
.my-custom-dialog {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>