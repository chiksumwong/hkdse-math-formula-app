<template>
  <Page class="page">
    <ActionBar class="action-bar" :title="this.item.title">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="onBackTap" />
    </ActionBar>

    <StackLayout>
      <!-- <Image for="image in images" :src="image" stretch="aspectFit" /> -->

      <listView class="list-group" for="image in images">
        <v-template>
          <Image :src="image" stretch="aspectFit" />
        </v-template>
      </listView>

    </StackLayout>

  </Page>
</template>

<script>
  export default {
    props: [
      'item'
    ],

    data() {
      return {
        images: []
      }
    },

    methods: {
      onBackTap() {
        console.log("Back");
        this.$navigateBack();
      }
    },

    mounted() {
      console.log(this.item.imagePath);
      this.images = this.item.imagePath;
      console.log(this.images);
      console.log(this.images[0]);
    }

  };
</script>