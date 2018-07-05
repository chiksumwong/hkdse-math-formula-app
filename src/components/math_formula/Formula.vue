<template>
  <Page class="page">
    <ActionBar class="action-bar" :title="this.item.index">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="onBackTap" />
    </ActionBar>

    <StackLayout>
      <Image :src="this.item.imagePath" stretch="aspectFit" />
    </StackLayout>

  </Page>
</template>

<script>
  export default {
    props: [
      'item'
    ],

    methods: {
      onBackTap() {
        console.log("Back");
        this.$navigateBack();
      }
    }

  };
</script>