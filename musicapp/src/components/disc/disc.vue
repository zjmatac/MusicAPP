<template>
<music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
</template>

<script type="text/ecmascript-6">
  import MusicList from 'components/music-list/music-list'
  import {getSongList} from 'api/recommend'
  import {ERR_OK} from 'api/config'
  import {mapGetters} from 'vuex'
  import {createNewSong} from 'common/js/song'

  export default {
    computed: {
      title() {
        return this.disc.songListAuthor
      },
      bgImage() {
        return this.disc.picUrl
      },
      ...mapGetters([
        'disc'
      ])
    },
    data() {
      return {
        songs: []
      }
    },
    created() {
      this._getSongList()
    },
    methods: {
      _getSongList() {
        if (!this.disc.id) {
          this.$router.push('/recommend')
          return
       }
       getSongList(this.disc.id).then((res) => {

          if (res.code === ERR_OK) {
            console.log(res.cdlist[0].songlist)
            this.songs = this._normalizeSongs(res.cdlist[0].songlist)
          }
        })
      },
      _normalizeSongs(list) {
        let ret = []
        list.forEach((musicData) => {
          if (musicData.mid && musicData.title) {
            ret.push(createNewSong(musicData))
          }
        })
        
        return ret
      }
    },
    components: {
      MusicList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>