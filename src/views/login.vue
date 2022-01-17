<template>
    <div id="login_root">
        <q-form @submit="on_submit" >
            <h5 class="text-left">로그인</h5>
            <q-input
                style="width:464px"
                filled
                type="email"
                label="아이디"
                id="email"
                v-model="email"
                hint="example@gmail.com"
                lazy-rules
                :rules="[ val => val && val.length > 0 || '아이디를 입력하세요']">
                <template v-slot:prepend>
                    <q-icon name="mail" />
                </template>
            </q-input>
            <div style="height:10px"></div>
            <q-input
                filled
                style="width:464px"
                type="password"
                v-model="password"
                label="비밀번호"
                id="password"
                :rules="[ val => val && val.length > 0 || '패스워드를 입력하세요']">
                <template v-slot:prepend>
                    <q-icon name="lock" />
                </template>
            </q-input>
            <div style="height:10px"></div>
            <q-btn color="black" type="submit" style="width:464px" label="로그인하기"></q-btn>
        </q-form>
    </div>
</template>

<script>
const HOST = "";

export default { 
    data() { 
        return { 
            userId: null, 
            userPassword: null, 
        };
    }, 
    methods: { 
        loginSubmit() { 
            let saveData = {}; 
            saveData.userId = this.userId; 
            saveData.userPassword = this.userPassword; 
            
            try { 
                this.$axios 
                    .post(HOST + "/signin", JSON.stringify(saveData), { 
                        headers: { 
                            "Content-Type": `application/json`, 
                        },
                    }) 
                    .then((res) => { 
                        if (res.status === 200) { 
                            // 로그인 성공시 처리해줘야할 부분
                            this.$store.commit("login", res.data);
                            this.$router.push("이동할 페이지 path");
                        } 
                      }); 
            } catch (error) { 
                console.error(error); 
            }
        }, 
    }, 
};

</script>
<style>
    #login_root {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top:10%;
        font-family: "Abel", "sans-serif";
    }
</style>