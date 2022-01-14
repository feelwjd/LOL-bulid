<template>
    <div style="height:50px; background-color:#C4C4C4"></div>
    <div class="container" style="width:1200px">
        <div class="row justify-start no-wrap">
            <div class="col-1 self-center">
                <q-icon name="emoji_events"
                size="60px"
                v-if="best_build"
                style="display:flex; justify-content:center"
                />
            </div>
            <div class="col-1 self-center">
                <q-img
                src="https://w.namu.la/s/9071d0575b6d14c0d6fc5832e26fe8ef0a298a1abb1d442cc3c865534ec5e949e8a2d195fe425ebb15f2f1f5b270e6b86979bd1e3fcb4e9d9432bdfbf4fb02a66fbfcbc696eac46c272d391360972b3a9e16135bfa558c8250ec5656068ed7d2"
                style="height:100px; max-width:100px; display:flex; justify-content:center"
                :ratio="1"
                />
            </div>
            <div class="col-8">
                <div id="title">제목으로 바뀔 것</div>
                <br>
                <div>글 작성자</div>
            </div>
            <div class="col-1">
                <q-btn 
                outline rounded color="primary" 
                icon="thumb_up_off_alt"
                label="추천"
                style="width:100%; font-size:8pt; font-weight:bold"
                />
            </div>
            <div class="col-1">
                <q-btn 
                outline rounded color="primary" 
                icon="bookmark_border"
                label="북마크"
                style="width:100%; font-size:8pt; font-weight:bold"
                />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <table>
                    <tr>
                        <th>룬</th>
                    </tr>
                    <tr>
                        <td>룬페이지</td>
                    </tr>
                </table>
            </div>
            <div class="col">
                <table>
                    <tr>
                        <th>소환사 주문</th>
                    </tr>
                    <tr>
                        <td>소환사 주문</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>소환사 주문</th>
                    </tr>
                    <tr>
                        <td>소환사 주문</td>
                    </tr>
                </table>
            </div>
            <div class="col"></div>
        </div>
        <div class="row">
            <div class="col">
            </div>
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
    background-color : rgb(223, 223, 223);
    padding : 20px 20px;
}
.row {
    padding: 10px 10px;
}
.col {
    margin: 5px 5px 5px 5px;
}
table {
    width: 100%;
    border: 1px solid #c2c2c2;
    border-collapse: collapse;
    text-align: left;
    margin: 5px 5px 5px 5px;
    }
</style>