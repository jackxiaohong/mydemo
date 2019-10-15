<!--模板-->
<template>
    <div> <!--模板要求：根组件-->
        <h3>mint-ui组件库-toast</h3>
        <van-button type="default">默认按钮</van-button>
    </div>
</template>

<!--业务js-->
<script>
export default {
    created(){
        //功能:当前组件创建成功后调用函数
        //this当前组件对象
        //$toast组件短消息
        this.$toast({
            message:"操作成功",//消息
            position:"top" ,   //位置
            duration:5000,    //时间
            iconClass:"iconfont icon-shouye"//指定图标class
        });
    }
}
</script>

<!--样式-->
