<template>
    <div>
        <v-speed-dial
                v-model="fab"
                top
                right
                :direction="direction"
                :transition="transition"
        >
            <template v-slot:activator>
                <v-btn
                        v-model="fab"
                        color="blue darken-2"
                        small
                        dark
                        fab
                >
                    <v-icon v-if="fab">X</v-icon>
                    <v-icon v-else>A</v-icon>
                </v-btn>
            </template>
            <v-btn
                    fab
                    dark
                    x-small
                    color="green"
            >
                <v-icon @click="showWiki">$vuetify.icons.wiki</v-icon>
            </v-btn>
            <v-btn
                    fab
                    dark
                    x-small
                    color="indigo"
            >
                <v-icon>$vuetify.icons.books</v-icon>
            </v-btn>
            <v-btn
                    fab
                    dark
                    x-small
                    color="red"
            >
                <v-icon>$vuetify.icons.myth</v-icon>
            </v-btn>
        </v-speed-dial>

        <v-dialog v-model="dialog" width="100%">
            <v-card scrollable min-height="100%">
                <p style="height: 10px"></p>
                <p class="title text--primary card-title">{{figure}} 百科</p>
                <v-divider></v-divider>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "FloatingButton",
        props: {
            figure: {
                type: String,
                default: ""
            },
            required: true
        },
        data: () => ({
            direction: 'left',
            fab: false,
            fling: false,
            hover: false,
            tabs: null,
            transition: 'slide-x-transition',
            dialog: false,
        }),
        methods: {
            showWiki() {
                let self = this;
                self.dialog = true;
            }
        }
    }
</script>

<style scoped>
    .v-speed-dial {
        position: absolute;
        margin-top: 20px;
    }

    .v-btn--floating {
        position: relative;
    }
</style>