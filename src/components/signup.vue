<template>
    <div style="height:50px; background-color:#C4C4C4">
    </div>
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
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || '아이디를 입력하세요']">
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
                    id="password"
                    v-model="password"
                    type="password"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || '비밀번호를 입력하세요']">
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
                    id="pw_confirm"
                    v-model="pw_confirm"
                    type="password"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || '비밀번호를 다시 입력하세요']">
                    <template v-slot:prepend>
                        <q-icon name="lock" />
                    </template>
                </q-input>
			</div>
            <div style="height:10px"></div>
			<div>
				<label for="name">닉네임</label>
				<q-input
                    style="width:464px"
                    outlined
                    id="name"
                    v-model="name"
                    type="text"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || '닉네임을 입력하세요']">
                    <template v-slot:prepend>
                        <q-icon name="person" />
                    </template>
                </q-input>
			</div>
            <div style="height:10px"></div>
			<q-btn color="black" type="submit" style="width:464px" label="가입하기"></q-btn>
		</q-form>
	</div>
</template>

<script>
export default {
	name: 'SignupForm',
	data() {
		return {
			email: '',
			password: '',
			passwordConfirm: '',
            name: ''
		};
	},
	methods: {
		submitForm() {
			console.log('dd');
		},
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