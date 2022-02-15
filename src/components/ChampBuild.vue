<template>
<div class="q-ma-md">
  <div
    :filter="filter"
    >
    <q-scroll-area
      dark
      class="bg-gray text-black rounded-borders"
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
      style="height: 400px"
      id="scroll-area-with-virtual-scroll-1"
    >
      <q-virtual-scroll
        scroll-target="#scroll-area-with-virtual-scroll-1 > .scroll"
        :items="heavyList"
        :virtual-scroll-item-size="32"
        separator
        :filter="filter"
      >
        
        <template v-slot="{ item, index }">
          <q-item
            :key="index"
            dense
          >
            <q-item-section>
              <q-item-label class="build">
                #{{ index }} - {{ item.label }} - {{champ}}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>
            <div class="row items-center">
              <div class="col-5">
                <b>OOO 빌드 xxxx 버전</b>
              </div>
              <!-- 룬 -->
              <div class="col">
                <q-avatar size="80px">
                  <img src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png">
                </q-avatar>
                <q-avatar size="50px">
                  <img src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png">
                </q-avatar>
              </div>
            <!-- 스펠 -->
              <div class="col">
                <div class="column">
                  <q-avatar  size="50px">
                    <img src="http://ddragon.leagueoflegends.com/cdn/12.2.1/img/spell/SummonerHeal.png">
                  </q-avatar>
                  <q-avatar  size="50px">
                    <img src="http://ddragon.leagueoflegends.com/cdn/12.2.1/img/spell/SummonerFlash.png">
                  </q-avatar>
                </div>
              </div>
              <!-- 아이템 -->
              <div class="col">
                <div class="column">
                  <div class="col">
                    <q-avatar  size="40px">
                      <img src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/3109.png">
                    </q-avatar>
                    <q-avatar  size="40px">
                      <img src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/3108.png">
                    </q-avatar>
                    <q-avatar  size="40px">
                      <img src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/3107.png">
                    </q-avatar>
                    <q-avatar  size="40px">
                      <img src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/3115.png">
                    </q-avatar>
                  </div>
                  <div class="col">
                    <q-avatar  size="40px">
                      <img src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/3112.png">
                    </q-avatar>
                    <q-avatar  size="40px">
                      <img src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/3110.png">
                    </q-avatar>
                    <q-avatar  size="40px">
                      <img src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/3111.png">
                    </q-avatar>
                    <q-avatar  size="40px">
                      <img src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/3113.png">
                    </q-avatar>
                  </div>
                </div>
              </div>
            </div>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <div class="col">
                <q-avatar  size="40px">
                  <img src="https://media.istockphoto.com/vectors/heart-symbol-of-love-and-valentines-day-flat-red-icon-isolated-on-vector-id1128400054?k=20&m=1128400054&s=612x612&w=0&h=xWJDi8K0l7DnTbpuboeVduewirVSZtuuAic6foxVTnI=">
                </q-avatar>
                130
                <q-avatar  size="40px">
                  <img src="https://pixsector.com/cache/d69e58d4/avbfe351f753bcaa24ae2.png">
                </q-avatar>
                64
                <q-avatar  size="40px">
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/003/738/383/small/appointment-date-icon-free-vector.jpg">
                </q-avatar>
                22.2.15
              </div>
            </q-item-section>
          </q-item>
        </template>
      </q-virtual-scroll>
    </q-scroll-area>
    </div>
  </div>
</template>

<script>
const maxSize = 20
const heavyList = []

for (let i = 0; i < maxSize; i++) {
  heavyList.push({
    label: '' + (i + 1)
  })
}
import { ref } from 'vue'
export default {
  name: 'champbuild',
  props: ["value"],


  setup () {
  
      return {
      heavyList,
      filter: ref(''),

      thumbStyle: {
        right: '5px',
        borderRadius: '8px',
        backgroundColor: '#027be3',
        width: '8px',
        opacity: 0.75
      },

      barStyle: {
        right: '2px',
        borderRadius: '14px',
        backgroundColor: '#027be3',
        width: '14px',
        opacity: 0.2,
        marginTop: '-3px',
        marginBottom: '-3px',
        paddingTop: '3px',
        paddingBottom: '3px'
      }
    }
  },
  watch:{
    build(){
      this.champ = this.props
      this.$forceUpdate();
    }
  },

  data () {
    return{
    champ : this.value
    }
  }
}
</script>
