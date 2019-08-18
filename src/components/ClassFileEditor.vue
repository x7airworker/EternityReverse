<template>
    <div class="editor">
        <h1 v-if="!source">Drop your jar file anywhere</h1>
        {{ source }}
    </div>
</template>

<script>
    export default {
        name: "class-file-editor",
        props: ["source"]
    }
</script>

<style scoped>
    .editor {
        padding: 5px;
    }
</style>