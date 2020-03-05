<template>
  <div class="orders">
    <div class="top">
      <div class="input" style="width:200px">
        <el-input
            size="small"
            placeholder="按订单编号查询"
            v-model="input"
            clearable>
        </el-input>
      </div>
      <div class="btn" style="float:left">
        <el-button type="primary" size="small" round>查询</el-button>
      </div>
    </div>
    <div class="table">
         <el-table
            size="small"
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="date"
            label="订单编号">
            </el-table-column>
            <el-table-column
            prop="name"
            label="格口">
            </el-table-column>
            <el-table-column
            prop="address"
            label="投递员">
            </el-table-column>
            <el-table-column
            prop="address"
            label="取件人">
            </el-table-column>
            <el-table-column
            prop="address"
            label="投递时间">
            </el-table-column>
            <el-table-column
            prop="address"
            label="取件时间">
            </el-table-column>
            <el-table-column
            prop="address"
            label="订单状态">
            </el-table-column>
            <el-table-column
            prop="address"
            label="动态密码">
            </el-table-column>
        </el-table>
    </div>
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
.orders{
  padding: 1.5em
}
</style>
