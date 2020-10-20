<template>
    <div class="authorization">
        <h1>LeadHit</h1>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="form">
            <el-form-item label="Введите Id" class="form__label" prop="id">
                <el-input v-model="ruleForm.id" class="form__input" v-mask="'########################'"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">Войти</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {Api} from '../service/Api.js';

    const api = new Api();
    export default {
        name: "Authorization_page",
        data() {
            return {
                ruleForm: {
                    id: '',
                },
                rules: {
                    id: [
                        {required: true, message: 'Пожалуйста введите id', trigger: 'blur'},
                        {min: 24, max: 24, message: 'id сайта должен содержать 24 символа', trigger: 'blur'}
                    ],
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        const result = await api.getTestAuth();
                        if (result.message === "ok") {
                            localStorage.setItem('leadhit-site-id', '5f8475902b0be670555f1bb3');
                            await this.$router.push({path: 'Analytics'});
                        }
                    } else {
                        return false;
                    }
                });
            },
        }
    }
</script>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .form__label {
        width: 50%;
    }
</style>