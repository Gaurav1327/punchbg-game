new Vue({
  el:'#PUNCHBAG',
  data:{
   powerleft: 100,
   end: false,
  },
methods:{
    punch: function () {
	   this.powerleft-=10;
	   if (this.powerleft==0) {
	   	this.end=true;
	   }
	},
	restart: function () {
	   this.powerleft=100;
	   this.end=false;
	}
},
computed:{
	
}
});