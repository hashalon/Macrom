let Util = {
    TAU     : Math.PI*2,
    halfPI  : Math.PI*0.5,
    listAdd : function(list : any[], element : any){
        list[list.length] = element;
    },
    listRemove : function(list : any[], element : any){
        let index = list.indexOf(element);
        if(index > -1) list.splice(index, 1);
        else Sup.log("element is not present in list", list, element);
    },
    areEqualsVec2 : function(a:Sup.Math.XY, b:Sup.Math.XY) : boolean{
        return (a.x == b.x && a.y == b.y);
    },
    areEqualsVec3 : function(a:Sup.Math.XYZ, b:Sup.Math.XYZ) : boolean{
        return (a.x == b.x && a.y == b.y && a.z == b.z);
    },
    clampAngle : function(angle : number) : number{
        // we convert the angle in sin and cos value to reduce the amount of if else
        let sin = Math.sin(angle);
        let cos = Math.cos(angle);
        // if sin is greater, the block will be oriented on the Z-axis
        if( Math.abs(sin) > Math.abs(cos) ){ 
            // if sin is positive, the block is oriented toward Z+
            if(sin > 0) angle = Util.halfPI;
            // Z- otherwise
            else angle = -Util.halfPI;
        }else{ // cos is greater, the block will be oriented on the X-axis
            // if cos is positive, the block is oriented toward X+
            if(cos > 0) angle = 0;
            // X- otherwise
            else angle = Math.PI;
        }
        return angle;
    }
};
