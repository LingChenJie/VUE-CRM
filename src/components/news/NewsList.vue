<template>
    <div>

        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.id">
                <router-link :to="'/home/newsinfo/'+ item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_src">
                    <div>
                        <h1>{{ item.title }}</h1>
                        <p class="mui-ellipsis">
                            <span>发表时间：{{ item.add_time }}</span>
                            <span>点击：{{ item.click }}</span>
                        </p>
                    </div>
                </router-link>
            </li>
            

        </ul>
        
    </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
    data() {
        return {
            newlist: []// 新闻列表数据
        }
    },
    methods: {
        getNewsList() {// 获取新闻列表数据
            this.$http.get("api/getnewslist")
                .then(result => {
                    // console.log(result)
                    if(result.body.status === 0) {
                        this.newlist = result.body.message;
                    } else {
                        Toast("获取新闻列表数据失败");
                    }
                })
        }
    },
    created() {
        this.getNewsList();
    }
}
</script>

<style lang="scss" scoped>

.mui-table-view {
    li {
        h1 {
            font-size: 14px;
        }
        .mui-ellipsis {
            font-size: 12px;
            color: #3d78ee;
            display: flex;
            justify-content: space-between;
            margin-top: 2%;
        }
    }
}

</style>