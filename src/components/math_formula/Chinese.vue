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
        chapters: [{
            title: "單元二 估算",
            contents: [{
              index: "2.1 誤差",
              imagePath: "~/images/hkdse_math_formula/chinese_version/2/0.png"
            }]
          },
          {
            title: "單元三 百分比",
            contents: [{
                index: "3.1 百分變化",
                imagePath: "~/images/hkdse_math_formula/chinese_version/3/3.1.png"
              },
              {
                index: "3.2 利潤及虧蝕",
                imagePath: "~/images/hkdse_math_formula/chinese_version/3/3.2.png"
              },
              {
                index: "3.3 折扣",
                imagePath: "~/images/hkdse_math_formula/chinese_version/3/3.3.png"
              },
              {
                index: "3.4 單利息和複利息",
                imagePath: "~/images/hkdse_math_formula/chinese_version/3/3.4.png"
              },
              {
                index: "3.5 增長及貶值",
                imagePath: "~/images/hkdse_math_formula/chinese_version/3/3.5.png"
              },
            ]
          },
          {
            title: "單元四 求積法",
            contents: [{
              index: "I.	 扇形",
              imagePath: "~/images/hkdse_math_formula/chinese_version/4/4.1.png"

            },
            {
              index: "II.	 立體",
              imagePath: "~/images/hkdse_math_formula/chinese_version/4/4.2.png"

            },
            {
              index: "III.	 相似平面圖形和立體",
              imagePath: "~/images/hkdse_math_formula/chinese_version/4/4.3.png"

            },
            {
              index: "IV.	 一樣高的三角形的面積比",
              imagePath: "~/images/hkdse_math_formula/chinese_version/4/4.4.png"

            },
            ]
          },
          {
            title: "單元五 變換及對稱",
            contents: [{
              index: "I.	 正多邊形的反射對稱和旋轉對稱",
              imagePath: "~/images/hkdse_math_formula/chinese_version/5/5.1.png"

            },{
              index: "II.	 正多面體的反射對稱和旋轉對稱",
              imagePath: "~/images/hkdse_math_formula/chinese_version/5/5.2.png"

            }, ]
          },
          {
            title: "單元六 演繹幾何 I",
            contents: [{
              index: "I.	 角和平行線",
              imagePath: "~/images/hkdse_math_formula/chinese_version/6/6.1.png"

            },
            {
              index: "II.	 三角形和凸多邊形的角",
              imagePath: "~/images/hkdse_math_formula/chinese_version/6/6.2.png"

            },
            {
              index: "III.相似三角形",
              imagePath: "~/images/hkdse_math_formula/chinese_version/6/6.3.png"

            },
            {
              index: "IV.	 全等三角形",
              imagePath: "~/images/hkdse_math_formula/chinese_version/6/6.4.png"

            },
            {
              index: "V.	 平行四邊形",
              imagePath: "~/images/hkdse_math_formula/chinese_version/6/6.5.png"

            },
            {
              index: "VI.	 畢氏定理",
              imagePath: "~/images/hkdse_math_formula/chinese_version/6/6.6.png"

            },
            {
              index: "VII.	 中點定理和截線定理",
              imagePath: "~/images/hkdse_math_formula/chinese_version/6/6.7.png"

            },
            {
              index: "VIII.	 三角形不等式",
              imagePath: "~/images/hkdse_math_formula/chinese_version/6/6.8.png"

            }, ]
          },
          {
            title: "單元七 數系",
            contents: [{
              index: "I.	 根",
              imagePath: "~/images/hkdse_math_formula/chinese_version/7/7.1.png"

            },{
              index: "II.	 複數",
              imagePath: "~/images/hkdse_math_formula/chinese_version/7/7.2.png"

            }, ]
          },
          {
            title: "單元八 方程式",
            contents: [{
              index: "I.一元二次方程",
              imagePath: "~/images/hkdse_math_formula/chinese_version/8/8.1.png"

            },
            {
              index: "II.	 根的性質",
              imagePath: "~/images/hkdse_math_formula/chinese_version/8/8.2.png"

            },
            {
              index: "III.	 根的和及積",
              imagePath: "~/images/hkdse_math_formula/chinese_version/8/8.3.png"

            }, ]
          },
          {
            title: "單元十 多項式",
            contents: [{
              index: "I.	 因式化",
              imagePath: "~/images/hkdse_math_formula/chinese_version/10/10.1.png"

            },{
              index: "II.	 餘式定理",
              imagePath: "~/images/hkdse_math_formula/chinese_version/10/10.8.8.png"

            },
            {
              index: "III.	 因式定理",
              imagePath: "~/images/hkdse_math_formula/chinese_version/10/10.3.png"

            }, ]
          },
          {
            title: "單元十一 指數律、 指數函數與對數函數",
            contents: [{
              index: "I. 指數律",
              imagePath: "~/images/hkdse_math_formula/chinese_version/11/11.1.png"

            },
            {
              index: "II. 對數性質",
              imagePath: "~/images/hkdse_math_formula/chinese_version/11/11.2.png"

            }, ]
          },
          {
            title: "單元十二 率、比和變分",
            contents: [{
              index: "I.	 正變",
              imagePath: "~/images/hkdse_math_formula/chinese_version/12/12.1.png"

            },{
              index: "II.	 反變",
              imagePath: "~/images/hkdse_math_formula/chinese_version/12/12.2.png"

            },{
              index: "III.	 聯變",
              imagePath: "~/images/hkdse_math_formula/chinese_version/12/12.3.png"

            },{
              index: "IV.	 部分變",
              imagePath: "~/images/hkdse_math_formula/chinese_version/12/12.4.png"

            }, ]
          },
          {
            title: "單元十三 不等式",
            contents: [{
              index: "不等式",
              imagePath: "~/images/hkdse_math_formula/chinese_version/13/13.1.png"

            }, ]
          },
          {
            title: "單元十四 坐標幾何 I",
            contents: [{
              index: "坐標幾何 I (PART 1)",
              imagePath: "~/images/hkdse_math_formula/chinese_version/14/14.1.1.png"

            },
            {
              index: "坐標幾何 I (PART 2)",
              imagePath: "~/images/hkdse_math_formula/chinese_version/14/14.1.2.png"

            }, ]
          },
          {
            title: "單元十五 演繹幾何 I",
            contents: [{
              index: "I.	 圓的弦線 (PART 1)",
              imagePath: "~/images/hkdse_math_formula/chinese_version/15/15.1.1.png"

            },{
              index: "I.	 圓的弦線 (PART 2)",
              imagePath: "~/images/hkdse_math_formula/chinese_version/15/15.1.2.png"

            },{
              index: "II.	 圓的角 (PART 1)",
              imagePath: "~/images/hkdse_math_formula/chinese_version/15/15.2.1.png"

            },{
              index: "II.	 圓的角 (PART 2)",
              imagePath: "~/images/hkdse_math_formula/chinese_version/15/15.2.2.png"

            },{
              index: "III.	 角、弧和弦線 (PART 1)",
              imagePath: "~/images/hkdse_math_formula/chinese_version/15/15.3.1.png"

            },{
              index: "III.	 角、弧和弦線 (PART 2)",
              imagePath: "~/images/hkdse_math_formula/chinese_version/15/15.3.2.png"

            },{
              index: "IV.	 圓內接四邊形 (PART 1)",
              imagePath: "~/images/hkdse_math_formula/chinese_version/15/15.4.1.png"

            },{
              index: "IV.	 圓內接四邊形 (PART 2)",
              imagePath: "~/images/hkdse_math_formula/chinese_version/15/15.4.2.png"

            },{
              index: "V.	 切線 (PART 1)",
              imagePath: "~/images/hkdse_math_formula/chinese_version/15/15.5.1.png"

            },{
              index: "V.	 切線 (PART 2)",
              imagePath: "~/images/hkdse_math_formula/chinese_version/15/15.5.2.png"

            }, ]
          },
          {
            title: "單元十六 三角學 I	– 基本三角學",
            contents: [{
              index: "I.	 定義",
              imagePath: "~/images/hkdse_math_formula/chinese_version/16/16.1.png"

            },{
              index: "II.	 特殊角的三角比",
              imagePath: "~/images/hkdse_math_formula/chinese_version/16/16.2.png"

            },{
              index: "III.	 三角比的正負符號",
              imagePath: "~/images/hkdse_math_formula/chinese_version/16/16.3.png"

            },{
              index: "IV.	 三角比恆等式 (PART 1)",
              imagePath: "~/images/hkdse_math_formula/chinese_version/16/16.4.1.png"

            },{
              index: "IV.	 三角比恆等式 (PART 2)",
              imagePath: "~/images/hkdse_math_formula/chinese_version/16/16.4.2.png"

            }, ]
          },
          {
            title: "單元十七 三角學 II	– 三角學應用",
            contents: [{
              index: "三角學 II	– 三角學應用",
              imagePath: "~/images/hkdse_math_formula/chinese_version/17/17.1.png"

            }, ]
          },
          {
            title: "單元十八 重要的圖像",
            contents: [{
              index: "重要的圖像",
              imagePath: "~/images/hkdse_math_formula/chinese_version/18/18.png"

            }, ]
          },
          {
            title: "單元十九 續函數及其圖像",
            contents: [{
              index: "變換對函數的影響",
              imagePath: "~/images/hkdse_math_formula/chinese_version/19/19.png"

            }, ]
          },
          {
            title: "單元二十 坐標幾何 II",
            contents: [{
              index: "圓的方程",
              imagePath: "~/images/hkdse_math_formula/chinese_version/20/20.png"

            }, ]
          },
          {
            title: "單元二十一 排列與組合",
            contents: [{
              index: "排列與組合",
              imagePath: "~/images/hkdse_math_formula/chinese_version/21/21.png"
            }, ]
          },
          {
            title: "單元二十二 概率",
            contents: [{
              index: "I.	 定義",
              imagePath: "~/images/hkdse_math_formula/chinese_version/22/22.1.png"
            },{
              index: "II.	 期望值",
              imagePath: "~/images/hkdse_math_formula/chinese_version/22/22.2.png"
            },{
              index: "III.	 加法定律",
              imagePath: "~/images/hkdse_math_formula/chinese_version/22/22.3.png"
            },{
              index: "IV.	 乘法定律",
              imagePath: "~/images/hkdse_math_formula/chinese_version/22/22.4.png"
            },{
              index: "V.	 條件概率",
              imagePath: "~/images/hkdse_math_formula/chinese_version/22/22.5.png"
            }, ]
          },
          {
            title: "單元二十四 數列",
            contents: [{
              index: "I.	 等差數列",
              imagePath: "~/images/hkdse_math_formula/chinese_version/24/24.1.png"
            },{
              index: "II.	 等比數列",
              imagePath: "~/images/hkdse_math_formula/chinese_version/24/24.2.png"
            }, ]
          },
          {
            title: "單元二十五 統計",
            contents: [{
              index: "I.	 量度集中趨勢",
              imagePath: "~/images/hkdse_math_formula/chinese_version/25/25.1.png"
            },{
              index: "II.	 離差的度量",
              imagePath: "~/images/hkdse_math_formula/chinese_version/25/25.2.png"
            },{
              index: "III.	 標準差的應用",
              imagePath: "~/images/hkdse_math_formula/chinese_version/25/25.3.png"
            },{
              index: "IV.	 數據的改變",
              imagePath: "~/images/hkdse_math_formula/chinese_version/25/25.4.png"
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