class Validation{
    kiemTraRong = (value)=>{
        if(value.trim() === "")
        {
            return true;
        }
        return false;
    }
    kiemTraEmail = (value)=>{
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(value.toLowerCase());
    }
    kiemTraSoDT = (value)=>{
        var re = /^\d+$/;
        if(re.test(value) && value.length >=10)
        {
            return true;
        }
        return false;
    }
}
export {Validation};