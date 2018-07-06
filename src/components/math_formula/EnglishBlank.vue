<template>
  <Page class="page">
    <ActionBar class="action-bar" title="English Blank Version">
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
            title: "Unit 2 Estimation",
            contents: [{
              index: "Errors",
              imagePath: "~/images/hkdse_math_formula/english_blank/2/2.png"
            }]
          },
          {
            title: "Unit 3 Percentages",
            contents: [{
                index: "I. Percentage change",
                imagePath: "~/images/hkdse_math_formula/english_blank/3/3.1.png"
              },
              {
                index: "II. Profit and loss",
                imagePath: "~/images/hkdse_math_formula/english_blank/3/3.2.png"
              },
              {
                index: "III. Discount",
                imagePath: "~/images/hkdse_math_formula/english_blank/3/3.3.png"
              },
              {
                index: "IV. Simple and compound interests",
                imagePath: "~/images/hkdse_math_formula/english_blank/3/3.4.png"
              },
              {
                index: "V. Growth and depreciation",
                imagePath: "~/images/hkdse_math_formula/english_blank/3/3.5.png"
              },
              {
                index: "VI. Rates",
                imagePath: "~/images/hkdse_math_formula/english_blank/3/3.6.png"
              },
            ]
          },
          {
            title: "Unit 4 Mensuration",
            contents: [{
              index: "I.	 Sectors",
              imagePath: "~/images/hkdse_math_formula/english_blank/4/4.1.png"

            },
            {
              index: "II.	 Solids (PART 1)",
              imagePath: "~/images/hkdse_math_formula/english_blank/4/4.2.1.png"

            },
            {
              index: "II.	 Solids (PART 2)",
              imagePath: "~/images/hkdse_math_formula/english_blank/4/4.2.2.png"

            },
            {
              index: "III.	 Similar plane figures and similar solids",
              imagePath: "~/images/hkdse_math_formula/english_blank/4/4.3.png"

            },
            {
              index: "IV.	 Ratio of triangles with same height",
              imagePath: "~/images/hkdse_math_formula/english_blank/4/4.4.png"

            },
            ]
          },
          {
            title: "Unit 5 Transformation and Symmetry",
            contents: [{
              index: "I.	 Reflectional symmetry and rotational symmetry of regular polygons",
              imagePath: "~/images/hkdse_math_formula/english_blank/5/5.1.png"

            },{
              index: "II.	 Reflectional symmetry and rotational symmetry of regular polyhedra",
              imagePath: "~/images/hkdse_math_formula/english_blank/5/5.2.png"

            }, ]
          },
          {
            title: "Unit 6 Deductive Geometry I - Rectilinear Figures",
            contents: [
            {
              index: "I.	 Angles and parallel lines (PART 1)",
              imagePath: "~/images/hkdse_math_formula/english_blank/6/6.1.1.png"

            },
            {
              index: "I.	 Angles and parallel lines (PART 2)",
              imagePath: "~/images/hkdse_math_formula/english_blank/6/6.1.2.png"

            },
            {
              index: "II.	 Angles of a triangle and a convex polygon",
              imagePath: "~/images/hkdse_math_formula/english_blank/6/6.2.png"

            },
            {
              index: "III. Similar triangles",
              imagePath: "~/images/hkdse_math_formula/english_blank/6/6.3.png"

            },
            {
              index: "IV.	 Congruent triangles (PART 1)",
              imagePath: "~/images/hkdse_math_formula/english_blank/6/6.4.1.png"

            },
            {
              index: "IV.	 Congruent triangles (PART 2)",
              imagePath: "~/images/hkdse_math_formula/english_blank/6/6.4.2.png"

            },
            {
              index: "V.	 Parallelograms (PART 1)",
              imagePath: "~/images/hkdse_math_formula/english_blank/6/6.5.1.png"
            },
            {
              index: "V.	 Parallelograms (PART 2)",
              imagePath: "~/images/hkdse_math_formula/english_blank/6/6.5.2.png"
            },
            {
              index: "VI.	 Pythagoras' theorem",
              imagePath: "~/images/hkdse_math_formula/english_blank/6/6.6.png"

            },
            {
              index: "VII.	 Mid-point theorem and intercept theorem",
              imagePath: "~/images/hkdse_math_formula/english_blank/6/6.7.png"

            },
            {
              index: "VIII.	 Triangle inequality",
              imagePath: "~/images/hkdse_math_formula/english_blank/6/6.8.png"

            },{
              index: "IX.	 Center of triangle",
              imagePath: "~/images/hkdse_math_formula/english_blank/6/6.9.png"

            }, ]
          },
          {
            title: "Unit 7 Number Systems",
            contents: [{
              index: "Number Systems",
              imagePath: "~/images/hkdse_math_formula/english_blank/7/7.png"

            } ]
          },
          {
            title: "Unit 8 Equations",
            contents: [{
              index: "Equations",
              imagePath: "~/images/hkdse_math_formula/english_blank/8/8.png"

            } ]
          },
          {
            title: "Unit 10 Polynomials",
            contents: [{
              index: "Polynomials",
              imagePath: "~/images/hkdse_math_formula/english_blank/10/10.png"
            } ]
          },
          {
            title: "Unit 11 Law of Indices, Exponential Functions and Logarithmic Functions",
            contents: [{
              index: "I. Laws of indices",
              imagePath: "~/images/hkdse_math_formula/english_blank/11/11.1.png"
            },
            {
              index: "II. Properties of logarithms",
              imagePath: "~/images/hkdse_math_formula/english_blank/11/11.2.png"
            }, ]
          },
          {
            title: "Unit 12 Rate, Ratio and Variation",
            contents: [{
              index: "Rate, Ratio and Variation",
              imagePath: "~/images/hkdse_math_formula/english_blank/12/12.png"
            } ]
          },
          {
            title: "Unit 13 Inequalities in One Unknown",
            contents: [{
              index: "Inequalities in One Unknown",
              imagePath: "~/images/hkdse_math_formula/english_blank/13/13.png"
            }, ]
          },
          {
            title: "Unit 14 Corrdinate Geometry I",
            contents: [{
              index: "Corrdinate Geometry I (PART 1)",
              imagePath: "~/images/hkdse_math_formula/english_blank/14/14.1.1.png"

            },
            {
              index: "Corrdinate Geometry I (PART 2)",
              imagePath: "~/images/hkdse_math_formula/english_blank/14/14.1.2.png"

            }, ]
          },
          {
            title: "Unit 15 Deductive Geometry II - Circles",
            contents: [{
              index: "I.	 Chords of circle (PART 1)",
              imagePath: "~/images/hkdse_math_formula/english_blank/15/15.1.1.png"

            },{
              index: "I.	 Chords of circle (PART 2)",
              imagePath: "~/images/hkdse_math_formula/english_blank/15/15.1.2.png"

            },{
              index: "II.	 Angles in a circle (PART 1)",
              imagePath: "~/images/hkdse_math_formula/english_blank/15/15.2.1.png"

            },{
              index: "II.	 Angles in a circle (PART 2)",
              imagePath: "~/images/hkdse_math_formula/english_blank/15/15.2.2.png"

            },{
              index: "III.	 Angles, arcs and chords (PART 1)",
              imagePath: "~/images/hkdse_math_formula/english_blank/15/15.3.1.png"

            },{
              index: "III.	 Angles, arcs and chords (PART 2)",
              imagePath: "~/images/hkdse_math_formula/english_blank/15/15.3.2.png"

            },{
              index: "IV.	 Cyclic quadrilaterals (PART 1)",
              imagePath: "~/images/hkdse_math_formula/english_blank/15/15.4.1.png"

            },{
              index: "IV.	 Cyclic quadrilaterals (PART 2)",
              imagePath: "~/images/hkdse_math_formula/english_blank/15/15.4.2.png"

            },{
              index: "V.	 Tangents (PART 1)",
              imagePath: "~/images/hkdse_math_formula/english_blank/15/15.5.1.png"

            },{
              index: "V.	 Tangents (PART 2)",
              imagePath: "~/images/hkdse_math_formula/english_blank/15/15.5.2.png"

            }, ]
          },
          {
            title: "Unit 16 Trigonometry I - Basic Trigonometry",
            contents: [{
              index: "I.	 Definition",
              imagePath: "~/images/hkdse_math_formula/english_blank/16/16.1.png"

            },{
              index: "II.	 Trigonometric ratios of special angles",
              imagePath: "~/images/hkdse_math_formula/english_blank/16/16.2.png"

            },{
              index: "III.	 The signs of the trigonometric ratios",
              imagePath: "~/images/hkdse_math_formula/english_blank/16/16.3.png"

            },{
              index: "IV.	 Trigonometric identities (PART 1)",
              imagePath: "~/images/hkdse_math_formula/english_blank/16/16.4.1.png"

            },{
              index: "IV.	 Trigonometric identities (PART 2)",
              imagePath: "~/images/hkdse_math_formula/english_blank/16/16.4.2.png"

            }, ]
          },
          {
            title: "Unit 17 Trigonometry II - Applications of Trigonometry",
            contents: [{
              index: "Trigonometry II - Applications of Trigonometry",
              imagePath: "~/images/hkdse_math_formula/english_blank/17/17.png"

            }, ]
          },
          {
            title: "Unit 18 Important Figures",
            contents: [{
              index: "Important Figures",
              imagePath: "~/images/hkdse_math_formula/english_blank/18/18.png"

            }, ]
          },
          {
            title: "Unit 19 More about Graphs of Functions",
            contents: [{
              index: "Transformations of functions",
              imagePath: "~/images/hkdse_math_formula/english_blank/19/19.png"

            }, ]
          },
          {
            title: "Unit 20 Coordinate Geometry II",
            contents: [{
              index: "Equation of a circle",
              imagePath: "~/images/hkdse_math_formula/english_blank/20/20.png"

            }, ]
          },
          {
            title: "Unit 21 Permutation and Combination",
            contents: [{
              index: "Permutation and Combination",
              imagePath: "~/images/hkdse_math_formula/english_blank/21/21.png"
            }, ]
          },
          {
            title: "Unit 22 Probability",
            contents: [{
              index: "I.	 Definition",
              imagePath: "~/images/hkdse_math_formula/english_blank/22/22.1.png"
            },{
              index: "II.	 Expected value of a variable",
              imagePath: "~/images/hkdse_math_formula/english_blank/22/22.2.png"
            },{
              index: "III.	 Addition law of probability",
              imagePath: "~/images/hkdse_math_formula/english_blank/22/22.3.png"
            },{
              index: "IV.	 Multiplication law of probability",
              imagePath: "~/images/hkdse_math_formula/english_blank/22/22.4.png"
            },{
              index: "V.	 Conditional probability",
              imagePath: "~/images/hkdse_math_formula/english_blank/22/22.5.png"
            }, ]
          },
          {
            title: "Unit 24 Sequences",
            contents: [{
              index: "I.	 Arithmetic sequence",
              imagePath: "~/images/hkdse_math_formula/english_blank/24/24.1.png"
            },{
              index: "II.	 Geometric sequence",
              imagePath: "~/images/hkdse_math_formula/english_blank/24/24.2.png"
            }, ]
          },
          {
            title: "Unit 25 Statistics",
            contents: [{
              index: "I.	 Measures of central tendency",
              imagePath: "~/images/hkdse_math_formula/english_blank/25/25.1.png"
            },{
              index: "II.	 Measures of dispersion (PART 1)",
              imagePath: "~/images/hkdse_math_formula/english_blank/25/25.2.1.png"
            },{
              index: "II.	 Measures of dispersion (PART 2)",
              imagePath: "~/images/hkdse_math_formula/english_blank/25/25.2.2.png"
            },{
              index: "III.	 Application of standard deviation",
              imagePath: "~/images/hkdse_math_formula/english_blank/25/25.3.png"
            },{
              index: "IV.	 Changes of data",
              imagePath: "~/images/hkdse_math_formula/english_blank/25/25.4.png"
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