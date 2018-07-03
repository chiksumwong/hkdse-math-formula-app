<template>
  <Page class="page">
    <ActionBar class="action-bar" :title="this.item.title">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="onBackTap"/>
    </ActionBar>

      <StackLayout>
        <Image :src="this.item.imagePath" />
      </StackLayout>

  </Page>
</template>

<script>
  export default {
    props: [
        'item'
    ],

    data () {
      return {
      }
    },

    methods: {
        onBackTap(){
            console.log("Back");
            this.$navigateBack();
        }
    },

  };
</script>
