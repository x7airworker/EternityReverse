<template>
    <div @dragover="preventDefaultActions" @dragenter="preventDefaultActions" @drop="onFileDropEvent">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "file-dropzone",
        methods: {
            onFileDropEvent: function(e) {
                if (!e.dataTransfer) return;
                if (e.dataTransfer.files.length) {
                    this.preventDefaultActions(e);
                    this.$emit("file-drop", e.dataTransfer.files[0]);
                }
            },
            preventDefaultActions: function(e) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
    }
</script>

<style scoped>

</style>