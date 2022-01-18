<template>
    <div class="container" style="width:1200px">
        <div class="row justify-start no-wrap" 
        style="border:1px solid #a0a0a0; border-radius:5px;
        padding: 10px 10px 10px 10px;">
            <div class="col-1 self-center" style="padding-left:10px">
                <q-img
                src="https://ww.namu.la/s/0dc95182a4e2a4f3c97be3ac9909c1492fa0c5f7be6f36d1175ba57789f3bfe90c276c4a9402318b85c5e0b8496359246c449c157d7877613d8ddca92312c45bf296172962cef9e0af3ab3cab8662ff593f7b3e0b34a17f4764a82d4f25f3af5"
                style="height:60px; max-width:60px; display:flex; justify-content:center"
                :ratio="1"
                v-if="line==='탑'"
                />
                <q-img
                src= "https://ww.namu.la/s/305ed8a606058e624a75b072b443973b7282faed5926447c6d3d6d465d14b1f428be251d3158b1d5bbd388dbd394eae6f2a00cbf32d7b5407b4e80fdcd1d18dfdbf2b50ee2ac8bafe53fbb07edd26083713f0b5bd98de8da583b5bb7659db6fc"
                style="height:60px; max-width:60px; display:flex; justify-content:center"
                :ratio="1"
                v-if="line==='정글'"
                />
                <q-img
                src= "https://namu.wiki/jump/trVCfVmyGJlTAPNfaEMcxsM4w9jpq2i5atRwdQfKyoYCEnZUcgjTKm0EfA0FUdUZkdqOg7FMErzY%2BbksDuz6iQ%3D%3D"
                style="height:60px; max-width:60px; display:flex; justify-content:center"
                :ratio="1"
                v-if="line==='미드'"
                />
                <q-img
                src= "https://w.namu.la/s/7f916b343072a3f9ea7eb9ddefc3f6e3017afe24da3d0c1d039c87ce3906deb627973515e12626a9dd618d7fabee42ee9afbf3427fff1fd51a430aeb80a0a1b51f8571835604e5b6658e6667dbf83305c3e1fa02817c025f1f45b30d2b88804c"
                style="height:60px; max-width:60px; display:flex; justify-content:center"
                :ratio="1"
                v-if="line==='바텀'"
                />
                <q-img
                src= "https://w.namu.la/s/b151ed5a28ee76f5155075d591fd6fda9d3a20f33ce96b493054af61e4655310cf18353afb0b85755501cc130c0b38a3844baaad9fff71ec3e20ff542e5a064157e503db2e2c6af9e45fbe9f50f9c9df2ce3e4879b13dfd0ef38b4fc1a67de69"
                style="height:60px; max-width:60px; display:flex; justify-content:center"
                :ratio="1"
                v-if="line==='서폿'"
                />
            </div>
            <div class="col-1 self-center">
                <q-img 
                src="http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Yuumi.png"
                style="height:100px; max-width:100px; display:flex; justify-content:center"
                :ratio="1"
                />
            </div>
            <div class="col-8" style="padding:0px 5px 0px 15px">
                <div id="title">{{title}}</div>
                <div>{{champ}}</div>
                <div>{{writer}}</div>
                <div><q-icon name="favorite"/> {{favorite}} &nbsp; &nbsp; <q-icon name="bookmarks"/> {{bookmarks}} &nbsp; &nbsp; {{date}} </div>
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
            <div class="col-6" style="padding:0px 10px 0px 0px">
                <table style="height:420px">
                    <tr>
                        <th>룬</th>
                    </tr>
                    <tr>
                        <td>
                            룬페이지
                            <hr>설명
                        </td>
                    </tr>
                </table>
            </div>
            <div class="col-3" style="padding:0px 5px 0px 0px">
                <table>
                    <tr>
                        <th>소환사 주문</th>
                    </tr>
                    <tr>
                        <td><hr>설명</td>
                    </tr>
                </table>
                <br>
                <table>
                    <tr>
                        <th>스킬 빌드</th>
                    </tr>
                    <tr>
                        <td><hr>설명</td>
                    </tr>
                </table>
            </div>
            <div class="col-3" style="padding:0px 0px 0px 5px">
                <table>
                    <tr>
                        <th>시작 아이템</th>
                    </tr>
                    <tr>
                        <td><hr>설명</td>
                    </tr>
                </table>
                <br>
                <table>
                    <tr>
                        <th>아이템</th>
                    </tr>
                    <tr>
                        <td><hr>설명</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col-9" style="padding:0px 5px 0px 0px">
                <table style="height:420px">
                    <tr>
                        <th>빌드설명</th>
                    </tr>
                    <tr>
                        <td><hr>설명</td>
                    </tr>
                </table>
            </div>
            <div class="col-3" style="padding:0px 0px 0px 5px">
                <table>
                    <tr>
                        <th>상대하기 좋은 챔피언</th>
                    </tr>
                    <tr>
                        <td><hr>설명</td>
                    </tr>
                </table>
                <br>
                <table>
                    <tr>
                        <th>상대하기 힘든 챔피언</th>
                    </tr>
                    <tr>
                        <td><hr>설명</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            version: "12.1.1",
            title: "고양이가 세상을 지배한다",
            champ: "유미",
            line: "서폿",
            writer: "{nickname}",
            favorite: "99",
            bookmarks: "99",
            date: "2022-01-18"
        };
    }
}
</script>

<style scoped>

.container {
    display: grid;
    margin : 60px auto;
    gap: 40px;
}

.col {
    margin: 10px 10px 10px 10px;
    padding: 10px 10px 10px 10px;
    background-color: #a0a0a0;
}
table {
    width: 100%;
    border: 1px solid #a0a0a0;
    border-collapse: separate;
    border-radius: 5px;
    text-align: left;
    min-height: 200px;
    }

th {
    height:30px;
}
#title {
    font-size:24px;
    font-weight:bold;
}

</style>