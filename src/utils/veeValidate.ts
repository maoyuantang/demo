import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { localize } from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN.json';
// import i18n from 'vue-i18n';
localize({zh_CN});
// Add the required rule
extend('required', {
    ...required,
    message: 'This field is required',
});
