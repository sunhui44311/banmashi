Vue.component('broadcast',{
	template:'#broadcast',
	props:{
		imgsrc:Array
	},
	data(){
		return{
			initial:0,
			//初始值
			imglistlength:this.imgsrc.length,
			//图片数组的长度
			timer:null
			//计时器
		}
	},
	watch:{
		initial(val){
			if(val<0){
				this.initial=this.imglistlength-1;
				//当展示图片为第一张时 回退后为最后一张
			}
			if(val>=this.imglistlength){
				this.initial=0;
				//当展示图片为最后一张时 前进后为第一张
			}
			
		},
		//初始值范围 及展示图片的个数
	},
	methods:{
		sinceSwitch(){
			this.timer=setInterval(()=>{
				this.initial++
			},3000)
		},
            //自动切换
            Stop(){
            	clearTimeout(this.timer)
            },
            //停止自切换
            implement(){
            	this.sinceSwitch()
            }
            //执行自切换
        },
        mounted(){
        	this.sinceSwitch()
		//当组件实例创建完成执行自动切换
	}

})











