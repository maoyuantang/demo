<!--
 * @Author: zqg
 * @Date: 2019-11-25 15:49:06
 * @LastEditors: zqg
 * @LastEditTime: 2019-11-26 16:17:21
 * @Description: Do not edit
 -->
<template>
  <div class="hello">
    
    <el-form :model="form"  :rules="rules" ref="formId">
        <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
            <el-input v-model="form.age"></el-input>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button>取 消</el-button>
        <el-button type="primary" @click="onSubmit('formId')">确 定</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
interface FormType {
    name: string;
    age: string;
    phone: string;
}

@Component({
    name: 'Hello',
    components: {
    },
})
export default class Hello extends Vue {
    @Prop() private msg!: string;
    private abc: string = '';
    private form: FormType = {
        name: '',
        age: '',
        phone: '',
    };

    private checkName(rule: any, value: string, callback: any) {
        const reg = /[a-z]/;
        if (!reg.test(value)) {
            return callback(new Error('请输入有效的姓名'));
        }
        callback();
    }
    private checkAge(rule: any, value: string, callback: any) {
        const reg = /[0-9]{1,3}/;
        if (!reg.test(value)) {
            return callback(new Error('请输入有效的年龄'));
        }
        callback();
    }

    private onSubmit(formId: any) {
        (this.$refs[formId] as any).validate((valid: boolean) => {
          if (valid) {
            alert('submit!');
          } else {
            alert('error submit!!');
            return false;
          }
        });
    }


    get rules(): any {
        return {
            name: [
                {required: true, message: '请输入姓名', trigger: 'blur'},
                {validator: this.checkName, trigger: 'blur'},
            ],
            age: [
                {required: true, message: '请输入年龄', trigger: 'blur'},
                {validator: this.checkAge, trigger: 'blur'},
            ],
        };
    }
}
</script>
