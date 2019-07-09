<template>
    <div>
        <b-card no-body>
            <b-tabs card align="center">
                <!-- <b-tabs card align="center" vertical nav-wrapper-class="w-50"> -->
                <!-- <b-tab title="Tab 1" active></b-tab> -->
                <b-tab
                    title="Compress"
                    id="tabcompress"
                    ref="tabcompress"
                    @click="check('compress')"
                    :active="activesTabs.compress"
                >
                    <b-card-text v-if="get_compress_list.lenght !=0">
                        <b-list-group>
                            <!-- <li v-for="" ></li> -->
                            <b-list-group-item
                                @click="download(file.id)"
                                v-for="(file) in get_compress_list"
                                button
                                :key="file.id"
                            >{{ file.originalname }}</b-list-group-item>
                        </b-list-group>

                        <!-- <ul> -->
                        <!-- <li :v-for="name in get_compress_list">{{ name.originalname }}</li> -->
                        <!-- </ul> -->
                    </b-card-text>
                </b-tab>

                <b-tab
                    :active="activesTabs.doc"
                    title="Doc"
                    id="tabdoc"
                    ref="tabdoc"
                    @click="check('doc')"
                >
                    <b-card-text v-if="get_doc_list.length!=0">
                        <b-list-group>
                            <!-- <li v-for="" ></li> -->
                            <b-list-group-item
                                @click="download(file.id)"
                                v-for="(file) in get_doc_list"
                                button
                                :key="file.id"
                            >{{ file.originalname }}</b-list-group-item>
                        </b-list-group>
                    </b-card-text>
                </b-tab>
                <b-tab
                    :active="activesTabs.image"
                    title="Image"
                    id="tabimage"
                    ref="tabimage"
                    @click="check('image')"
                >
                    <b-card-text v-if="get_image_list.length!=0">
                        <b-list-group>
                            <!-- <li v-for="" ></li> -->
                            <b-list-group-item
                                @click="download(file.id)"
                                v-for="(file) in get_image_list"
                                button
                                :key="file.id"
                            >{{ file.originalname }}</b-list-group-item>
                        </b-list-group>
                    </b-card-text>
                </b-tab>
                <b-tab
                    :active="activesTabs.music"
                    title="Music"
                    id="tabmusic"
                    ref="tabmusic"
                    @click="check('music')"
                >
                    <b-card-text v-if="get_music_list.length!=0">
                        <b-list-group>
                            <!-- <li v-for="" ></li> -->
                            <b-list-group-item
                                @click="download(file.id)"
                                v-for="(file) in get_music_list"
                                button
                                :key="file.id"
                            >{{ file.originalname }}</b-list-group-item>
                        </b-list-group>
                    </b-card-text>
                </b-tab>
                <b-tab
                    :active="activesTabs.program"
                    title="Program"
                    id="tabprogram"
                    ref="tabprogram"
                    @click="check('program')"
                >
                    <b-card-text v-if="get_program_list.length!=0">
                        <b-list-group>
                            <!-- <li v-for="" ></li> -->
                            <b-list-group-item
                                @click="download(file.id)"
                                v-for="(file) in get_program_list"
                                button
                                :key="file.id"
                            >{{ file.originalname }}</b-list-group-item>
                        </b-list-group>
                    </b-card-text>
                </b-tab>
                <b-tab
                    :active="activesTabs.unknow"
                    title="Unknow"
                    id="tabunknow"
                    ref="tabunknow"
                    @click="check('unknow')"
                >
                    <b-card-text v-if="get_unknow_list.length!=0">
                        <b-list-group>
                            <!-- <li v-for="" ></li> -->
                            <b-list-group-item
                                @click="download(file.id)"
                                v-for="(file) in get_unknow_list"
                                button
                                :key="file.id"
                            >{{ file.originalname }}</b-list-group-item>
                        </b-list-group>
                    </b-card-text>
                </b-tab>
                <b-tab
                    :active="activesTabs.video"
                    title="Video"
                    id="tabvideo"
                    ref="tabvideo"
                    @click="check('video')"
                >
                    <b-card-text v-if="get_video_list.length!=0">
                        <b-list-group>
                            <!-- <li v-for="" ></li> -->
                            <b-list-group-item
                                @click="download(file.id)"
                                v-for="(file) in get_video_list"
                                button
                                :key="file.id"
                            >{{ file.originalname }}</b-list-group-item>
                        </b-list-group>
                    </b-card-text>
                </b-tab>
                <!-- <div v-for="item in items"></div> -->
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
// import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
    name: "Download",
    data() {
        return {
            activesTabs: {
                compress: false,
                doc: false,
                image: false,
                music: false,
                program: false,
                unknow: false,
                video: false
            },
            types: [
                {
                    name: "Compress",
                    data: false
                },
                {
                    name: "Doc",
                    data: false
                },
                {
                    name: "Image",
                    data: false
                },
                {
                    name: "Music",
                    data: false
                },
                {
                    name: "Program",
                    data: false
                },
                {
                    name: "Unknow",
                    data: false
                },
                {
                    name: "Video",
                    data: false
                }
            ],
            items: [
                {
                    message: "Algo"
                },
                {
                    message: "Outro"
                }
            ]
        };
    },
    mounted() {
        this.setAllFalse();
        // console.log(types["Compress"]);
        let type = this.$route.query.type;
        console.log({ type: type });

        if (
            type != undefined &&
            this.types.find(item => {
                if (
                    item.name.toString().toLowerCase() ===
                    type.toString().toLowerCase()
                ) {
                    return true;
                }
            })
        ) {
            this.activesTabs[type] = !this.activesTabs[type];
            // // 'asd'.toLocaleLowerCase()
            // this.$refs[`tab${type.toString().toLocaleLowerCase()}`].activate();
            // this.$refs[`tab${type.toString().toLocaleLowerCase()}`].$el;
            // console.log(
            //     this.$refs[`tab${type.toString().toLocaleLowerCase()}`]
            // );
            // console.log(
            //     this.$refs[
            //         `tab${type.toString().toLocaleLowerCase()}`
            //     ].activate()
            // );
            // console.log(this.$attrs);
        }
        //     let query = this.$route.query;
        //     if (query.toString() == "") {
        //         console.log("object");
        //     }
        //     console.log({ query: typeof query });
        //     console.log({ query: query.type });
    },
    computed: {
        ...mapGetters("files", [
            "get_music_list",
            "get_compress_list",
            "get_video_list",
            "get_image_list",
            // "get__list",
            "get_program_list",
            "get_unknow_list",
            "get_error",
            "get_doc_list"
        ])
    },
    methods: {
        ...mapActions("files", ["get_file_list", "get_by_type"]),
        check(type) {
            this.setAllFalse();
            this.activesTabs[type] = !this.activesTabs[type];
            // console.log(type);
            this.$route.query.type = type;
            // this.$router.push({
            //     name: "Downloads",
            //     query: {
            //         type: type
            //     }
            // });
        },
        setAllFalse() {
            for (let i in this.activesTabs) {
                this.activesTabs[i] = false;
            }
        },

        download(id) {
            let { location } = window;
            let url = `http://${location.hostname}:9090/files/${id}`;
            window.open(url);
        }
    }
};
</script>

<style>
</style>
