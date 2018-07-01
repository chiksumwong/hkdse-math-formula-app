<template>
  <Page class="page">
    <ActionBar class="action-bar" :title="this.item.title">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="onBackTap"/>
    </ActionBar>

      <StackLayout>
        <Image :src="image1" stretch="fill"/>
        <Image :src="image2" stretch="fill"/>
        <Image :src="image3" stretch="fill"/>

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
        image1: "~/images/NativeScript-Vue.png",
        image2: "~/images/chapter2.png",
        image3: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
      }
    },

    methods: {
        onBackTap(){
            console.log("Back");
            this.$navigateBack();
        }
    },
    
    mounted () {
      console.log(this.item.title);
      console.log(this.item.imagePath);
      console.log(this.image2);

    }
  };
</script>
