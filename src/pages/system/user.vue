<template>
  <div class="user">
    <h2>用户管理</h2>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
    
    }
  },
  computed: {
    // ...mapState('users', ['user', 'visible', 'title','total']),
    // ...mapGetters('users', ['usersSize'])
  },
  created() {
    // this.findByYema();
  },
  methods: {
    // ...mapMutations('users', ['showModal', 'closeModal', 'setTitle']),
    // ...mapActions('users', ['findAlluser','saveOrUpdateUsers','deleteUsersById', ]),
   
  },

}
</script>
<style scoped>
.users{
  padding: 1.5em
}
</style>
