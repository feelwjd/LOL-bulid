<template>
    <div id="signup_root">
        <q-form @submit.prevent="submitForm">
            <h5 class="text-center" style="font-family: Abel">회원가입</h5>
			<div>
				<label for="email">아이디</label>
				<q-input
                    style="width:464px"
                    outlined
                    id="email"
                    v-model="email"
                    type="email"
                    @blur="emailCheck"
                    bottom-slots
                    error-message="이메일을 정확히 입력해주세요"
                    :error="!emailCheckFlag">
                    <template v-slot:prepend>
                        <q-icon name="mail" />
                    </template>
                </q-input>
			</div>
            <div style="height:10px"></div>
			<div>
				<label for="password">비밀번호</label>
				<q-input
                    style="width:464px"
                    outlined
                    maxlength="16"
                    id="password"
                    v-model="password"
                    type="password"
                    @blur="pwCheck"
                    bottom-slots
                    error-message="비밀번호를 정확히 입력해주세요"
                    :error="!pwCheckFlag">
                    <template v-slot:prepend>
                        <q-icon name="lock" />
                    </template>
                </q-input>
			</div>
            <div style="height:10px"></div>
			<div>
				<label for="pw_confirm">비밀번호 확인</label>
				<q-input
                    style="width:464px"
                    outlined
                    maxlength="16"
                    id="pw_confirm"
                    v-model="pw_confirm"
                    type="password"
                    @blur="passwordCheckValid"
                    bottom-slots
                    error-message="비밀번호가 일치하지 않습니다!"
                    :error="!passwordCheckFlag">
                    <template v-slot:prepend>
                        <q-icon name="lock" />
                    </template>
                </q-input>
			</div>
            <div style="height:20px"></div>
			<div>
				<label for="name">닉네임</label>
				<q-input
                    style="width:464px"
                    outlined
                    id="name"
                    v-model="name"
                    type="text"
                    @blur="nameCheck"
                    bottom-slots
                    error-message="닉네임을 정확히 입력해주세요"
                    :error="!nameCheckFlag">
                    <template v-slot:prepend>
                        <q-icon name="person" />
                    </template>
                </q-input>
			</div>
            <div style="height:10px"></div>
			<q-btn color="black" type="submit" style="width:464px" label="가입하기" @click="registered"></q-btn>
		</q-form>
	</div>
</template>

<script>
export default {
	data() {
		return {
            signup: {
                email: '',
                password: '',
                name: ''
            },
            emailCheckFlag: true,
            pwCheckFlag: true,
            nameCheckFlag: true,
            pw_confirm:'',
            passwordCheckFlag: true
		};
	},
	methods: {
        emailCheck(){
            if(this.email == null){
                this.emailCheckFlag = false
            } else {
                this.emailCheckFlag = true
            }
        },
        pwCheck(){
            if(this.password == null){
                this.pwCheckFlag = false
            } else {
                this.pwCheckFlag = true
            }
        },
        nameCheck(){
            if(this.name == null){
                this.nameCheckFlag = false
            } else {
                this.nameCheckFlag = true
            }
        },
        passwordCheckValid(){
            if(this.password == this.pw_confirm) {
                this.passwordCheckFlag = true
            } else if(this.pw_confirm == "") {
                this.passwordCheckFlag = true
            } else {
                this.passwordCheckFlag = false
            }
        },
        registered(){
            if (this.email == null || this.password == null || this.name == null) { alert('필수 입력 사항이 누락되었습니다!') 
            return 
            }
            if (!this.passwordCheckFlag) { alert('비밀번호를 다시 확인해주세요.') 
            return
            }
            alert('회원가입이 완료되었습니다.') 
            this.$router.push({ name: 'signup', params: { signup: this.signup } })
        }
	},
};
</script>
<style>
    #signup_root {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top:5%;
        font-family: "Abel", "sans-serif";
    }
</style>