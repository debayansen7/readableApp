import Moment from 'moment';

export default class helperFunctions {

    static genetateID(){
        return Math.floor((Math.random() * 123115256120) + 1).toString();
    }

    static formatDate(timestamp){
        return Moment(timestamp).format("DD-MM-YYYY h:mma ");
    };

    static generateTimestamp(){
        return parseInt(Moment().format("x"),10);
    }

    static formatCategory(category){
        // console.log(category);
        if(category !== undefined){
            let data = category;
            let rest = category.slice(1, data.length);
            return data.charAt(0).toUpperCase() + rest;
        }else{
            return category;
        }
    };

    static objectFromArray(arr){
        let data = JSON.parse(arr);
        return data.categories;
    };

};
