<template>
    <div>
        <nav class="sidebar" id="sidebar">
        <ul class="list-posts w-100 overflow-auto p-0">
            <transition-group name="post-list" tag="div">
                <li v-for="(item, index) in postList" @click="selectPost(index,item)" :key="item.data.id" class="card px-5 py-5">                   
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
                            <button class="btn btn-link text-danger col-12 dismiss-single">
                                {{ $t("sidebar.dismiss_post") }}
                            </button>
                        </div>
                    </div>

                </li>
            </transition-group>
        </ul>
    </nav>
    </div>
</template>

<script>

export default {
  name: 'Sidebar',
    data() {
        return {
            
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
        }
    }

};
</script>
