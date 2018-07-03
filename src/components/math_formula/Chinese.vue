<template>
  <Page class="page">
    <ActionBar class="action-bar" title="中文版">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <Scrollview>
      <StackLayout class="home-panel">
        <listView class="list-group" for="chapter in chapters" @itemTap="onItemTap" style="height:3500px"> 
          <v-template>
            <FlexboxLayout flexDirection="row" class="list-group-item">
              <Label :text="chapter.title" class="list-group-item-heading" style="width: 60%"/>
            </FlexboxLayout>
          </v-template>
        </listView>
      </StackLayout>
    </Scrollview>

  </Page>
</template>

<script>
import Formula from'./Formula';

  export default {
    data(){
      return {
        chapters:[
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元二",
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter3.png",
            title: "單元三"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元四"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元五"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元六"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元七"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元八"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元九"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元十"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元十一"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元十二"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元十三"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元十四"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元十五"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元十六"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元十七"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元十八"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元十九"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元二十"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元二十一"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元二十二"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元二十三"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元二十四"
          },
          {
            imagePath: "~/images/hkdse_math_formula/chinese_version/chapter2.png",
            title: "單元二十五"
          }
        ]
      }
    },

    methods: {
      onItemTap: function(args){
        console.log('Item with index : ' + args.item.title + ' tapped');

        this.$navigateTo(Formula, {
          context:{
            propsData:{
              item: args.item
            }
          }
        })

      }
    }
  };
</script>
