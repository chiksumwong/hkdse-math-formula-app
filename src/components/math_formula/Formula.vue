<template>
  <Page class="page">
    <!-- <ActionBar class="action-bar" title="中文版">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="onBackTap"/>
    </ActionBar> -->

      <StackLayout>
        <Image :src="this.imageSrc"/>
      </StackLayout>

  </Page>
</template>

<script>
  export default {
    props: [
        'imageSrc'
    ],

    data () {
        return {
            image:"~/images/NativeScript-Vue.png"
        }
    },

    methods: {
        onBackTap(){
            console.log("Back");
            this.$navigateBack();
        }
    }
  };
</script>
