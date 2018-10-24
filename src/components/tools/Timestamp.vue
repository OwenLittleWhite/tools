<template>
  <v-container>
    <v-layout wrap row>
      <v-flex md10 sm12 xs12 offset-md1>
        <v-layout wrap row grid-list-xl justify-start>
          <v-flex md9 sm10 xs12 mb-2>
            <v-layout wrap row grid-list-xl justify-start align-center>
              <v-flex md1 sm3 xs3 mb-2>
                <div class="text-lg-left text-md-left text-sm-left text-xs-left">现在：</div>
              </v-flex>
              <v-flex md11 sm9 xs9 mb-2>
                <div class="text-lg-left text-md-left text-sm-left text-xs-left time-text">{{nowTime}}</div>
              </v-flex>
              <v-flex md1 sm2 xs3 mb-2>
                <div class="text-lg-left text-md-left text-sm-left text-xs-left">时间戳：</div>
              </v-flex>
              <v-flex md3 sm8 xs8 mb-2>
                <div class="text-lg-left text-md-left text-sm-left text-xs-left">
                  <v-text-field v-model="timeSampleTime" type="number" solo></v-text-field>
                </div>
              </v-flex>
              <v-flex md2 sm5 xs5 ml-1 mb-2>
                <div class="text-lg-left text-md-left text-sm-left text-xs-left">
                  <v-select :items="units" v-model="unit" label="Unit field" solo></v-select>
                </div>
              </v-flex>
              <v-flex md2 sm4 xs4 ml-2 mb-2>
                <div class="text-lg-left text-md-left text-sm-left text-xs-left">
                  <v-btn @click="updateDatestr()" block bottom color="info">转换>></v-btn>
                </div>
              </v-flex>
              <v-flex md3 sm10 xs10 ml-2 mb-2>
                <div class="text-lg-left text-md-left text-sm-left text-xs-left">
                  <v-text-field v-model="dateStr" type="text" solo></v-text-field>
                </div>
              </v-flex>
              <v-flex md1 sm2 xs3 mb-2>
                <div class="text-lg-left text-md-left text-sm-left text-xs-left">时间：</div>
              </v-flex>
              <v-flex md3 sm8 xs8 mb-2>
                <div class="text-lg-left text-md-left text-sm-left text-xs-left">
                  <v-text-field v-model="dateStr2" type="text" solo></v-text-field>
                </div>
              </v-flex>
              <v-flex md2 sm4 xs4 ml-2 mb-2>
                <div class="text-lg-left text-md-left text-sm-left text-xs-left">
                  <v-btn @click="updateTime2()" block bottom color="info">转换>></v-btn>
                </div>
              </v-flex>
              <v-flex md3 sm10 xs10 ml-2 mb-2>
                <div class="text-lg-left text-md-left text-sm-left text-xs-left">
                  <v-text-field v-model="time2" solo></v-text-field>
                </div>
              </v-flex>
              <v-flex md2 sm5 xs5 ml-1 mb-2>
                <div class="text-lg-left text-md-left text-sm-left text-xs-left">
                  <v-select :items="units" v-model="unit2" label="Unit field" solo></v-select>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex md12 sm12 xs12>
            <div class="text-lg-left text-md-left text-sm-left text-xs-left">
              <h3>获取当前时间戳</h3>
            </div>
          </v-flex>
          <v-flex md12 sm12 xs12>
            <v-data-table hide-headers :items="expresses" hide-actions item-key="lang" class="elevation-1">
              <template slot="items" slot-scope="props">
                <td>{{ props.item.lang }}</td>
                <td class="text-xs-left" v-html="props.item.sentence"></td>
              </template>
            </v-data-table>
          </v-flex>
        </v-layout>

      </v-flex>
    </v-layout>

  </v-container>
</template>
<script>
export default {
  data: () => ({
    units: ["秒", "毫秒"],
    unit: "秒",
    unit2: "秒",
    dateStr: "",
    time2: "",
    dateStr2: "",
    now: new Date(),
    timeSample: new Date(),
    timeSampleTime: Math.round(new Date().getTime() / 1000),
    expresses: [
      {
        lang: "Swift",
        sentence: "NSDate().timeIntervalSince1970"
      },
      {
        lang: "Go",
        sentence: `import (<br>
  "time"<br>
)<br>
int32(time.Now().Unix())`
      },
      {
        lang: "Java",
        sentence: `// pure java<br>
(int) (System.currentTimeMillis() / 1000)`
      },
      {
        lang: "JavaScript",
        sentence: "Math.round(new Date() / 1000)"
      },
      {
        lang: "Objective-C",
        sentence: "[[NSDate date] timeIntervalSince1970]"
      },
      {
        lang: "MySQL",
        sentence: "SELECT unix_timestamp(now())"
      },
      {
        lang: "SQLite",
        sentence: "SELECT strftime('%s', 'now')"
      },
      {
        lang: "PHP",
        sentence: `// pure php <br>
time()`
      },
      {
        lang: "Erlang",
        sentence:
          "calendar:datetime_to_gregorian_seconds(calendar:universal_time())-719528*24*3600."
      },
      {
        lang: "Python",
        sentence: `import time<br>
time.time()`
      },
      {
        lang: "Ruby",
        sentence: "Time.now.to_i"
      },
      {
        lang: "Shell",
        sentence: "date +%s"
      }
    ]
  }),
  created: function() {
    this.dateStr2 = this.convertToDateStr(new Date().getTime(), "毫秒");
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  },
  computed: {
    nowTime() {
      return Math.round(this.now.getTime() / 1000);
    }
  },
  methods: {
    convertToDateStr(mill, unit) {
      if (unit === "秒") {
        mill = mill * 1000;
      }
      let d = new Date(mill);
      let year = d.getFullYear();
      let month = ("00" + (d.getMonth() + 1)).slice(-2);
      let date = ("00" + d.getDate()).slice(-2);
      let hour = ("00" + d.getHours()).slice(-2);
      let min = ("00" + d.getMinutes()).slice(-2);
      let sec = ("00" + d.getSeconds()).slice(-2);
      return (
        year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + sec
      );
    },
    updateDatestr() {
      this.dateStr = this.convertToDateStr(
        parseInt(this.timeSampleTime),
        this.unit
      );
    },
    updateTime2() {
      if (this.unit2 === "秒") {
        this.time2 = Math.round(new Date(this.dateStr2).getTime() / 1000);
      } else {
        this.time2 = new Date(this.dateStr2).getTime();
      }
    }
  }
};
</script>
<style scoped>
.time-text {
  color: green;
}
</style>


