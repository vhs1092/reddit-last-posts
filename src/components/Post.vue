<template>
<div class="post-content">
    <div id="content" class="w-100 h-100 d-flex align-items-center justify-content-center">
        <div class="row w-75 h-75 bg-white align-items-center justify-content-center flex-column-reverse" v-if="activePost">
            <div class="col-lg-6 col-md-6 col-12">
                <h3 class="text-left col-12 text-info text-center">{{ activePost.data.title }}</h3>
                <p class="text-left col-12 m-0 text-center">
                    {{ activePost.data.created_utc | moment("from") }}
                </p>
                <p class="text-left col-12 m-0 text-center">
                    {{ $t("post.author") }} <strong>{{ activePost.data.author }} </strong>
                </p>
            </div>
            <template v-if="activePost.data.thumbnail">
                <template v-if="activePost.data.preview">
                    <a :href="previewImage(activePost)" target="_blank" class="col-lg-6 col-md-6 col-12 d-flex align-items-end justify-content-center">
                        <div class="post-image-content mb-5" :style="{ 'background-image': 'url(' + activePost.data.thumbnail + ')' }"></div>
                    </a>
                </template>
                <template v-else>
                    <img :src="activePost.data.thumbnail">

                </template>
            </template>

        </div>
        <div v-else class="row h-100 align-items-center justify-content-center">
            <h3>
                Select one post
            </h3>
        </div>

    </div>
</div>
</template>

<script>
export default {
    name: 'Post',
    beforeMount() {
        this.$store.commit('getPosts');
    },
    computed: {
        activePost() {
            return this.$store.state.activePost;
        },
    },
    methods: {
        previewImage(activePost) {
            return activePost.data.preview.images[0].source.url.replace("&amp;", "&");
        }
    }
};
</script>

<style lang="scss" scoped>
.post-content {
    width: 70vw;
}

.post-image-content {
    width: 250px;
    height: 150px;
    background-repeat: no-repeat;
    background-size: cover;
}

@media (max-width: 768px) {
    .post-content {
        width: 70vw;
        z-index: 2;
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
    }

    #content {
        .row.w-75.h-75.bg-white.align-items-center.justify-content-center.flex-column-reverse {
            flex-direction: inherit !important;
        }
    }
}
</style>
