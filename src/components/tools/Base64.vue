<template>
  <v-container>
    <v-layout wrap row>
      <v-flex md8 lg8 offset-md2 offset-lg2>
        <v-tabs fixed-tabs>
          <!-- 文字编码 -->
          <v-tab href="#Base64">Base64</v-tab>
          <v-tab-item id="Base64">
            <v-layout wrap row>
              <v-flex text-md-left>
                明文:
                <v-textarea box v-model="decryptStr" hint="请输入明文" rows=20 clearable error-messages=""></v-textarea>
              </v-flex>
              <v-flex>
                <v-layout mt-4 column align-center>
                  <v-btn color="primary" @click="encrypt()">base64编码<v-icon dark left>arrow_forward</v-icon>
                  </v-btn>
                  <v-btn color="primary" @click="decrypt()">
                    <v-icon dark left>arrow_back</v-icon>base64解码
                  </v-btn>
                </v-layout>
              </v-flex>
              <v-flex text-md-left>
                密文:
                <v-textarea box v-model="encryptStr" hint="请输入密文" rows=20 clearable></v-textarea>
              </v-flex>
            </v-layout>
          </v-tab-item>
          <!-- 图片编码 -->
          <v-tab href="#图片">图片/BASE64转换</v-tab>
          <v-tab-item id="图片">
            <v-card flat>
              <v-card-text>图片/BASE64转换</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Base64 from "../../lib/base64";
export default {
  data: () => {
    return {
      decryptStr: "我好帅",
      encryptStr: ""
    };
  },
  methods: {
    encrypt: function() {
      try {
        this.encryptStr = Base64.encode(this.decryptStr);
      } catch (error) {
        this.encryptStr = "";
      }
    },
    decrypt: function() {
      try {
        this.decryptStr = Base64.decode(this.encryptStr);
      } catch (error) {
        this.decryptStr = "";
      }
    }
  }
};
</script>

<style scoped>
</style>
