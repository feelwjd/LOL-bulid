<template>
<br>
<div class="row">
  <div class="col-2">
  </div>
  <div class="col-8">
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 300px" class="shadow-2 rounded-borders">

      <q-page-container>
        <q-page padding>
          <div class="q-pa-md">
            <q-table
              grid
              title="챔피언 선택"
              :rows="rows"
              :columns="columns"
              row-key="name"
              :filter="filter"
              hide-header
              hide-bottom
              v-model:pagination="pagination"
              :rows-per-page-options="[0]"
            >  
              <template v-slot:top-right>
                <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </template>

              <template v-slot:item="props">
                <div class="q-pa-xs col-xs-10 col-sm-1 col-md-1">
                  <q-card :id="props.row.name" v-ripple @click="select($event)" class="my-box cursor-pointer q-hoverable">
                    <q-img :src=props.row.url >
                      <div class="absolute-bottom text-subtitle2 text-center">
                        <font size="1"><strong>{{ props.row.name }}</strong></font>
                      </div>
                      <div class="absolute-top-right text-subtitle2">
                        <font size="1">{{ props.row.line }}</font>
                      </div>
                    </q-img>
                  </q-card>
                </div>
              </template>
            </q-table>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
<br>
  <div>
    <champ-build v-bind:value="c_name" :key="rederkey"></champ-build>
  </div>
  <div class="col-2">
  </div>
  </div>
</div>
</template>

<script>
import { ref } from 'vue'
import ChampBuild from '../components/ChampBuild.vue'
let c_name;
const columns = [
  {
    name: 'champ',
    required: true,
    label: '챔피언',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: '라인', align: 'center', label: 'Line', field: 'line', sortable: true },
]
const rows = [
  {
    name: '가렌',
    line: '탑',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Garen.png"
  },
  {
    name: '아트록스',
    line: '탑',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Aatrox.png"
  },
  {
    name: '아리',
    line: '미드',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Ahri.png"
  },
  {
    name: '아칼리',
    line: '미드',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Akali.png"
  },
  {
    name: '아크샨',
    line: '미드',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Akshan.png"
  },
  {
    name: '알리스타',
    line: '서폿',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Alistar.png"
  },
  {
    name: '아무무',
    line: '정글',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Amumu.png"
  },
  {
    name: '애니비아',
    line: '미드',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Anivia.png"
  },
  {
    name: '애니',
    line: '탑',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Annie.png"
  },
  {
    name: '아펠리우스',
    line: '바텀',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Aphelios.png"
  },
  {
    name: '애쉬',
    line: '바텀',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Ashe.png"
  },
  {
    name: '아우렐리온 솔',
    line: '미드',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/AurelionSol.png"
  },
  {
    name: '아지르',
    line: '미드',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Azir.png"
  },
  {
    name: '바드',
    line: '서폿',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Bard.png"
  },
  {
    name: '블리츠크랭크',
    line: '서폿',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Blitzcrank.png"
  },
  {
    name: '브랜드',
    line: '미드',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Brand.png"
  },
  {
    name: '브라움',
    line: '서폿',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Braum.png"
  },
  {
    name: '케이틀린',
    line: '바텀',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Caitlyn.png"
  },
  {
    name: '카밀',
    line: '탑',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Camille.png"
  },
  {
    name: '카시오페아',
    line: '미드',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Cassiopeia.png"
  },
  {
    name: '초가스',
    line: '탑',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Chogath.png"
  },
  {
    name: '코르키',
    line: '바텀',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Corki.png"
  },
  {
    name: '다리우스',
    line: '탑',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Darius.png"
  },
  {
    name: '다이애나',
    line: '미드',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Diana.png"
  },
  {
    name: '드레이븐',
    line: '바텀',
    url:"http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/Draven.png"
  }
]
export default {
  components: {ChampBuild},
  name: 'sword-wind-build',
  setup () {
    return {
      filter: ref(''),
      columns,
      rows,
      c_name
    }
  },
  data () {
    return{
      value: this.targetId,
      rederkey: 0
    }
  },
  methods: {
    select(event) {
      let targetId = event.currentTarget.id;
      console.log(targetId);
      this.c_name = targetId;
      this.rederkey +=1;
      console.log(this.c_name);
    }
  }
}
</script>