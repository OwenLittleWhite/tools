<template>
  <v-container>
    <v-layout wrap row>
      <v-flex md8 lg8 offset-md2 offset-lg2>
        <v-tabs fixed-tabs>
          <!-- 文字编码 -->
          <v-tab href="#Base64">Base64</v-tab>
          <v-tab-item id="Base64">
            <v-layout wrap row mt-4>
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
            <v-layout wrap column="5" mt-4>
              <v-flex align-center>
                <input accept="image/*" id="upload_file" type="file" value="点击这里选择选择要转换成Base64的图片" @change="changePic">
              </v-flex>
              <v-flex>
                <v-textarea box v-model="base64Output" rows=20 clearable></v-textarea>
                <v-progress-circular indeterminate color="primary" v-show="!loadEnd"></v-progress-circular>
              </v-flex>
              <v-flex>
                <v-btn color="primary" @click="changeToPic">Base64转换为图片</v-btn>
              </v-flex>
              <v-flex>
                <v-card flat tile class="d-flex">
                  <v-img :src="imgSource" aspect-ratio="1" class="grey lighten-2">
                    <!-- <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout> -->
                  </v-img>
                </v-card>
              </v-flex>
            </v-layout>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Base64 from "../../lib/base64";
function $_(id) {
  return document.getElementById(id);
}
// function test_base64() {
//   $_("img_prev").src = "";
//   $_("img_prev").src = $_("base64Output").value;
// }
window.onload = function() {
  if (typeof FileReader === "undefined") {
    alert("抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！");
    $_("upload_file").disabled = true;
  }
};
export default {
  data: () => {
    return {
      decryptStr: "我好帅",
      encryptStr: "",
      base64Output: "",
      loadEnd: true,
      imgSource: ""
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
    },
    changePic: function() {
      let file = $_("upload_file").files[0];
      if (!/image\/\w+/.test(file.type)) {
        alert("请确保文件为图像类型");
        return false;
      }
      let r = new FileReader(); //本地预览
      r.onload = () => {
        // $_("img_size").innerHTML =
        //   "    图片大小：" +
        //   Math.round((r.result.length / 1024) * 1000) / 1000 +
        //   " KB";
      };
      r.onloadend = () => {
        this.loadEnd = true;
        this.base64Output = r.result;
      };
      r.onloadstart = () => {
        this.loadEnd = false;
      };
      r.readAsDataURL(file);
    },
    changeToPic: function() {
      this.imgSource = this.base64Output;
    }
  }
};
</script>

<style scoped>
</style>
