<template>
    <div style="height:50px; background-color:#C4C4C4"></div>
    <div class="container">
        <div class="row">
            <div class="col-md-1">
                <q-icon name="emoji_events"
                size="80px"
                v-if="best_build"
                />
            </div>
            <div class="col-md-2">
                <q-img
                src="https://w.namu.la/s/9071d0575b6d14c0d6fc5832e26fe8ef0a298a1abb1d442cc3c865534ec5e949e8a2d195fe425ebb15f2f1f5b270e6b86979bd1e3fcb4e9d9432bdfbf4fb02a66fbfcbc696eac46c272d391360972b3a9e16135bfa558c8250ec5656068ed7d2"
                style="height:120px; max-width:120px"
                :ratio="1"
                />
            </div>
            <div class="col-md-6">
                <div id="title">제목으로 바뀔 것</div>
                <div>글 작성자</div>
            </div>
            <div class="col-md-3">
                <q-btn 
                outline rounded color="primary" 
                icon="thumb_up_off_alt"
                label="추천"
                />
                <q-btn 
                outline rounded color="primary" 
                icon="bookmark_border"
                label="북마크"
                />
            </div>
        </div>
        <div class="row">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
        </div>
    </div>    
</template>

<script>
export default {
    data () {
        return {
            best_build: true
        };
    }

}
</script>

<style scoped>
.container {
    margin : 60px auto;
    width : 1000px;
    background-color : rgb(223, 223, 223);
    padding : 10px 10px;
}
</style>