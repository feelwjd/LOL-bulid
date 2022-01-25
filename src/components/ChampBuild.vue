<template>
<div class="q-ma-md">
  <div
    :filter="filter"
    >
    <q-scroll-area
      dark
      class="bg-dark text-white rounded-borders"
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
                  <img src="https://w.namu.la/s/8f8c2bdf9e11c41d63924d236b55c7e51e3424fba7a22f7bb2e73279f50d68bcb2d28790cff24fed2e6f2b71fd8473a01b41b4ae5cd478d032db844baa74e2dd6c12f5a9553a5600c2213cf0044414b7b05f191f7b37b057ff624ca1fd1ef9de">
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

export default {
  name: 'champbuild',
  props: ["value"],


  setup () {
  
      return {
      heavyList,

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
