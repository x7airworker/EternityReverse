<template>
    <div>
        <div class="title">
            {{ title }}
        </div>
        <div class="classView">
            <p v-for="(javaClass, index) in classFiles" :key="index">
                <a class="classLink" @click="selectClass(index)">
                    <fa-icon icon="folder"></fa-icon>
                    {{ javaClass.name }}
                </a>
            </p>
        </div>
    </div>
</template>

<script>
    import JSZip from "jszip";
    import JavaClass from "../lib/JavaClass";
    import {EventBus} from "../EventBus";

    export default {
        name: "class-file-browser",
        props: ["file"],
        data() {
            return {
                classFiles: []
            }
        },
        watch: {
            file: async function() {
                const zip = await JSZip.loadAsync(this.file);
                zip.forEach((relativePath, zipEntry) => {
                    if (zipEntry.dir) return;
                    zip.file(zipEntry.name).async("Uint8Array")
                        .then(byteUtil => new JavaClass(zipEntry.name, byteUtil))
                        .then(javaClass => this.classFiles.push(javaClass));
                });
            }
        },
        computed: {
            title() {
                return this.file ? this.file.name : "No file opened!";
            }
        },
        methods: {
            selectClass: function (index) {
                EventBus.$emit('select-class', this.classFiles[index]);
            }
        }
    }
</script>

<style scoped>
    .title {
        text-align: center;
        padding-top: 3px;
        padding-bottom: 3px;
        border-bottom: gray 2px solid;
    }

    .classLink {
        color: cornflowerblue;
        cursor: pointer;
    }

    .classView {
        padding-left: 5px;
    }
</style>