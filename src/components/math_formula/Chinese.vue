<template>
  <Page class="page">
    <ActionBar class="action-bar" title="中文版">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')" />
    </ActionBar>

    <Scrollview>
      <StackLayout class="home-panel">
        <listView class="list-group" for="chapter in chapters" @itemTap="onItemTap" style="height:3500px">
          <v-template>
            <FlexboxLayout flexDirection="row" class="list-group-item">
              <Label :text="chapter.title" class="list-group-item-heading" style="width: 60%" />
            </FlexboxLayout>
          </v-template>
        </listView>
      </StackLayout>
    </Scrollview>

  </Page>
</template>

<script>
  import ListFormula from './ListFormula';

  export default {
    data() {
      return {
        chapters: [
          {
            title: "單元二",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"
            }]
          },
          {
            title: "單元三",
            contents: [{
                index: "3.1百分變化",
                imagePath: "~/images/hkdse_math_formula/chinese_version/3/3.1.png"
              },
              {
                index: "3.2利潤及虧蝕",
                imagePath: "~/images/hkdse_math_formula/chinese_version/3/3.2.png"
              },
              {
                index: "3.3折扣",
                imagePath: "~/images/hkdse_math_formula/chinese_version/3/3.3.png"
              },
              {
                index: "3.4單利息和複利息",
                imagePath: "~/images/hkdse_math_formula/chinese_version/3/3.4.png"
              },
              {
                index: "3.5增長及貶值",
                imagePath: "~/images/hkdse_math_formula/chinese_version/3/3.5.png"
              },
            ]
          },
          {
            title: "單元四",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"

            }, ]
          },
          {
            title: "單元五",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"

            }, ]
          },
          {
            title: "單元六",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"

            }, ]
          },
          {
            title: "單元七",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"

            }, ]
          },
          {
            title: "單元八",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"

            }, ]
          },
          {
            title: "單元九",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"

            }, ]
          },
          {
            title: "單元十",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"

            }, ]
          },
          {
            title: "單元十一",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"

            }, ]
          },
          {
            title: "單元十二",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"

            }, ]
          },
          {
            title: "單元十三",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"

            }, ]
          },
          {
            title: "單元十四",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"

            }, ]
          },
          {
            title: "單元十五",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"

            }, ]
          },
          {
            title: "單元十六",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"

            }, ]
          },
          {
            title: "單元十七",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"

            }, ]
          },
          {
            title: "單元十八",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"

            }, ]
          },
          {
            title: "單元十九",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"

            }, ]
          },
          {
            title: "單元二十",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"

            }, ]
          },
          {
            title: "單元二十一",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"
            }, ]
          },
          {
            title: "單元二十二",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"
            }, ]
          },
          {
            title: "單元二十三",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"

            }, ]
          },
          {
            title: "單元二十四",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"
            }, ]
          },
          {
            title: "單元二十五",
            contents: [{
              index: "2.誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"
            }]
          }
        ]
      }
    },

    methods: {
      onItemTap: function (args) {
        console.log('Item with index : ' + args.item.title + ' tapped');

        this.$navigateTo(ListFormula, {
          context: {
            propsData: {
              chapters: args.item
            }
          }
        })

        console.log('chinese page : ' + this.chapters)

      }
    }
  };
</script>