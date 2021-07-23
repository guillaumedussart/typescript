export class Vote {

    // @ts-ignore
    private collegue_id: string;
    // @ts-ignore
    private like:boolean;

    getCollegueId(){
        return this.collegue_id;
    }
    setCollegueId(collegue_id:string ){
        this.collegue_id = collegue_id;
    }
    getLike(){
        return this.like;
    }
    setLike(like:boolean ){
        this.like = like;
    }

    constructor() {
    }
}