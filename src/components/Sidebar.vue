<template>
    <div>

    <nav class="sidebar" id="sidebar">
        <p class="sidebar-header btn-info py-2 m-0">
            {{ $t("sidebar.title") }}
        </p>
        <ul class="list-posts w-100 overflow-auto p-0">
            <transition-group name="post-list" tag="div">
                <li v-for="(item, index) in postList" @click="selectPost(index,item)" :key="item.data.id" class="card px-5 py-5">
                    <font-awesome-icon icon="eye" v-if="item.data.visited" class="visited-post"/>
                    <font-awesome-icon icon="eye-slash" v-else class="visited-post"/>
                    
                    <div class="new-post btn-success" :class="{ checked: item.data.visited }"></div>

                    <div class="row align-items-center">
                        <div class="col-6 text-center">
                            <div class="post-image col-12" :style="{ 'background-image': 'url(' + item.data.thumbnail + ')' }"></div>
                        </div>

                        <div class="col-6  text-left text-black">
                            <p class="text-black-50 mb-0">
                                <small>{{ item.data.author }}</small>
                            </p>
                            <h6 class="text-black-50">
                                <small>{{ item.data.created_utc | moment("from") }} </small>
                            </h6>
                            <h5 class="text-info"><small>{{item.data.title}}</small></h5>
                        </div>
                    </div>

                    <div class="row align-items-center mt-3">
                        <div class="col-6  text-left text-black border border-left-0 border-top-0 border-bottom-0 border-info">
                            <p class="text-black mb-0">
                                <small>{{ item.data.num_comments }} {{ $t("sidebar.comments_text") }}</small>
                            </p>
                        </div>
                        <div class="col-6  text-left text-black">
                            <button v-on:click="dismiss(index)" class="btn btn-link text-danger col-12 dismiss-single">
                                {{ $t("sidebar.dismiss_post") }}
                            </button>
                        </div>
                    </div>

                </li>
            </transition-group>
        </ul>
        <div class="row">
            <button @click="dismissAll" class="btn btn-info dismiss-all col-12">
                {{ $t("sidebar.dismiss_all_posts") }}
            </button>
        </div>
    </nav>

    </div>
</template>

<script>

export default {
    name: 'Sidebar',
    data() {
        return {
            displayLoader: true,
            currentPage: 1,
            postPerPage: 10,
            totalPost: 50
        };
    },
    computed: {
        postList() {
            return this.$store.state.postList;
        }
    },
    beforeMount() {
      this.$store.dispatch('loadPosts')
    },
    methods: {
        selectPost(index, item) {
            item.data.visited = true;
            const pageIndex = this.definePostIndex(index);
            this.activePost(pageIndex);
        },
        activePost(index) {
            this.$store.commit('getPosts', index);
        },
        dismiss(index) {
            const pageIndex = this.definePostIndex(index);
            this.$store.commit('dismissSingle', pageIndex);
        },
        dismissAll() {
            this.$store.commit('dismissAll');
        },
        definePostIndex(index) {
            return ((this.currentPage * this.postPerPage) - this.postPerPage) + index;
        },
        setPage(pageNumber) {
            this.currentPage = pageNumber;
        }
    }
};
</script>

<style lang="scss" scoped>
.sidebar {
    position: relative;
    width: 30vw;
    transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);
    display: inline-block;
    float: left;
    margin: 0;
    overflow-x: hidden;
    height: 100vh;

    .list-posts {
        height: calc(100% - 114px);
        overflow-x: hidden !important;
        margin: 0;

        .visited-post{
          position: absolute;
          left:25px;
          top: 10px;
        }
        .post-image {
            height: 150px;
            background-repeat: no-repeat;
            background-size: cover;
        }

        li {
            position: relative;
            transition: all 500ms cubic-bezier(0.87, -0.76, 0.06, 1.47);
            cursor: pointer;

            &:hover {
                background-color: rgba(0, 0, 0, 0.05);
            }

            .new-post {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 8px;
                opacity: 1;
                z-index: 1;

                &.checked {
                    opacity: 0;
                }
            }
        }
    }

    .post-list-leave,
    .post-list-enter-to {
        opacity: 1;
        transform: scale(1);
    }

    .post-list-enter,
    .post-list-leave-to {
        opacity: 0;
        transform: scale(0);
    }

    .dismiss-all {
        display: block;
        width: 50%;
        bottom: 0;
        border: 0;

        &:hover {
            text-decoration: none;
            background-color: black;
            color: #fff;
        }
    }

    .post-empty {
        transition: all 600ms ease-in-out;
        transition-delay: 500ms;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;

        h6 {
            font-weight: 100;
            font-size: 14px;
        }
    }
}

@media (max-width: 768px) {
    .sidebar {
        position: fixed;
        z-index: 3;
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        top: 0
    }

    #sidebar.zIndex {
        z-index: 0;
    }

    .MobileCloseModal.open {
        display: block;
    }

}
</style>