<template>
    <div>
        <div class="info">
            {{ currentClass.name }}
        </div>
        <class-file-editor :source="currentClass.decompiled"></class-file-editor>
    </div>
</template>

<script>
    import ClassFileEditor from "./ClassFileEditor";
    import {EventBus} from "../EventBus";

    export default {
        name: "class-file-viewer",
        components: {ClassFileEditor},
        data() {
            return {
                currentClass: {
                    name: "No file opened!",
                    decompiled: ""
                }
            }
        },
        mounted() {
            EventBus.$on("select-class", newClass => {
                newClass.decompile();
                this.currentClass = newClass;
            });
        }
    }
</script>

<style scoped>
    .info  {
        padding-left: 5px;
        padding-top: 3px;
        padding-bottom: 3px;
        width: 100%;
        border-bottom: gray 2px solid;
    }
</style>