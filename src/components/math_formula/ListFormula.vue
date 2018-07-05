<template>
    <Page class="page">
        <ActionBar class="action-bar" :title="this.chapters.title">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="onBackTap" />
        </ActionBar>

        <Scrollview>
            <StackLayout class="home-panel">
                <listView class="list-group" for="content in contents" @itemTap="onItemTap" style="height:3500px">
                    <v-template>
                        <FlexboxLayout flexDirection="row" class="list-group-item">
                            <Label :text="content.index" class="list-group-item-heading" style="width: 60%" />
                        </FlexboxLayout>
                    </v-template>
                </listView>
            </StackLayout>
        </Scrollview>

    </Page>
</template>

<script>
    import Formula from './Formula';

    export default {
        props: [
            'chapters'
        ],

        data () {
            return {
                contents:[]
            }
        },

        methods: {
            onItemTap: function (args) {
                console.log('Item with index : ' + args.item.index + ' tapped');

                this.$navigateTo(Formula, {
                    context: {
                        propsData: {
                            item: args.item
                        }
                    }
                })

            },

            onBackTap() {
                console.log("Back");
                this.$navigateBack();
            }
        },

        mounted() {
            this.contents = this.chapters.contents;
        }

    };
</script>