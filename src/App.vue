<template>
    <div>
        <Header></Header>
        <b-container class="bv-example-row bv-example-row-flex-cols content-page">
            <!-- <b-row align-v="center">
                <b-col>One of three columns</b-col>
                <b-col>One of three columns</b-col>
                <b-col>One of three columns</b-col>
            </b-row>-->
            <router-view></router-view>
            <!-- <button @click="get_files()">get Files</button> -->

            <!-- <button @click="get_by_type('Music')">get Music</button>
            <button @click="get_by_type('Video')">get Video</button>
            <button @click="get_by_type('Image')">get Image</button>
            <button @click="get_by_type('Doc')">get Doc</button>
            <button @click="get_by_type('Program')">get Program</button>
            <button @click="get_by_type('Compress')">get Compress</button>
            <button @click="get_by_type('Unknow')">get Unknow</button>
            <button @click="clearLocalStorage('')">Clear LocalStore</button>-->
        </b-container>
        <!-- {{ teste }} -->
        <!-- {{ get_music_list }} -->
    </div>
</template>

<script>
import Header from "./components/Header";
import { mapActions, mapGetters } from "vuex";
// import Download from "./components/Download";
export default {
    name: "Share Files",
    components: {
        Header
    },
    computed: {
        teste() {
            console.log(this.$router);
            console.log(this.$route);
            return "teste";
        },
        ...mapGetters("files", [
            "get_music_list",
            "get_compress_list",
            "get_video_list",
            "get_image_list",
            "get__list",
            "get_program_list",
            "get_unknow_list",
            "get_error"
        ]),
        ...mapGetters(["get_version"])
    },
    methods: {
        // ...mapActions(["files/get_file_list"]),
        ...mapActions("files", ["get_file_list", "get_by_type"]),
        get_files() {
            this.get_file_list();
        },
        clearLocalStorage() {
            localStorage.setItem("store", "{}");
        }
    },
    mounted() {
        // console.log({ this: this });
        // console.log({ this_files: this.files });
        // this.get_file_list();
        /* 
        sincronizando os dados das janelas do navegador atraves da localStorage
         */
        setInterval(() => {
            let store = JSON.parse(localStorage.getItem("store"));
            // console.log({ store: store });
            // console.log(this.get_version, store.version);

            if (this.get_version < store.version) {
                this.$store.commit("syncStore");
            }
        }, 2000);
    },
    beforeCreate() {
        this.$store.commit("initialiseStore");
    }
};
</script>

<style >
.content-page {
    margin-top: 3em;
}
</style>
