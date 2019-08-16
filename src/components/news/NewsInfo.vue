<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <h3 class="title">{{ newsinfo.title }}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间：{{ newsinfo.add_time }}</span>
            <span>点击：{{ newsinfo.click }}</span>
        </p>
        
    </div>
</template>

<script>
import Toast from 'mint-ui'

export default {
    data() {
        return {
            id: this.$route.params.id, // 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
            newsinfo: {}// 新闻对象
        };
    },
    methods: {
        getNewsInfo() {// 获取新闻详情
            this.$http.get("api/getnew/" + this.id)
                .then(result => {
                    if(result.body.status === 0) {
                        this.newsinfo = result.body.message[0];
                    } else {
                        Toast("获取新闻失败");
                    }
                })
        }
    },
    created() {
        this.getNewsInfo();
    }
    
}
</script>

<style lang="scss">
    .newsinfo-container {
        padding: 0 4px;
        .title {
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: rgb(226, 99, 99);
        }

        .subtitle {
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
</style>