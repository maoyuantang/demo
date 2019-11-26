<!--
 * @Author: tmy
 * @Date: 2019-11-25 15:49:06
 * @LastEditors: zqg
 * @LastEditTime: 2019-11-26 16:01:01
 * @Description: Do not edit
 -->
<template>
  <div class="home">
    <RuleForm></RuleForm>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import RuleForm from '@/components/RuleForm.vue';
@Component({
    name: 'Home',
    components: {
        RuleForm,
    },
})
export default class Home extends Vue {
}
</script>
